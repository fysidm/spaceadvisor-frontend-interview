import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Draggable from 'react-draggable';
import {
  plus,
  minus,
  toggleDisplay,
  setValue,
  selectCalculator,
} from './calculatorSlice';
import styles from './Calculator.module.css';
import { panelList } from './consts';
import useWindowDimensions from '../../utils/useWindowDimensions';

export function Calculator() {
  const [enteringValue, setEnteringValue] = useState('0');
  const [prevOp, setPrevOp] = useState();
  const {value, display} = useSelector(selectCalculator);
  const dispatch = useDispatch();
  const modal = document.getElementById("calculator-modal");
  const { width } = useWindowDimensions();
  const isMobile = width <= 425;

  window.onclick = (e) => {
    if (e.target === modal) {
      return dispatch(toggleDisplay());
    }
  };

  return (
    <div
      id={'calculator-modal'}
      className={styles.modal}
      style={{display: display ? 'block' : 'none'}}
    >
      <Draggable disabled={isMobile} handle={`.${styles.calculatorContainer}`}>
        <div className={isMobile ? styles.calculatorContainerM : styles.calculatorContainer}>
          <div className={styles.calculatorResult}>
            {enteringValue}
          </div>
          <div className={styles.calculatorPanel}>
            {
              panelList.map(({items}, index) => {
                return (
                  <div
                    key={`panel-button-row-${index}`}
                    className={styles.panelButtonRow}
                  >
                    {
                      items.map((item, index) => {
                        const {
                          grow,
                          backgroundColor,
                          text,
                          isDisabled,
                          isOperator,
                          operator
                        } = item;

                        return (
                          <div
                            disabled={isDisabled}
                            key={`panel-button-row-${index}`}
                            className={!!grow ? styles.panelButton2x : styles.panelButton}
                            style={{
                              backgroundColor: !!backgroundColor ? backgroundColor : '#333',
                            }}
                            onClick={() => {
                              if (isOperator) {
                                if (!isDisabled) {
                                  operation(operator, prevOp, enteringValue, value, dispatch, setEnteringValue, setPrevOp);
                                }
                              } else {
                                if (prevOp === 'equal') {
                                  setEnteringValue(text);
                                  setPrevOp('new');
                                } else {
                                  if (enteringValue === '0') {
                                    setEnteringValue(text);
                                  } else {
                                    setEnteringValue(enteringValue + text);
                                  }
                                }
                              }
                            }}
                          >
                            {text}
                          </div>
                        );
                      })
                    }
                  </div>
                );
              })
            }
          </div>
        </div>
      </Draggable>
    </div>
  );
}

const operation = (operator, prevOp, enteringValue, value, dispatch, setEnteringValue, setPrevOp) => {
  switch (operator) {
    case 'plus':
    case 'minus':
      if (prevOp === 'minus') {
        dispatch(minus(Number(enteringValue)));
      } else if (prevOp === 'plus') {
        dispatch(plus(Number(enteringValue)));
      } else {
        dispatch(setValue(Number(enteringValue)))
      }
      setEnteringValue('0');
      break;
    case 'equal':
      if (!prevOp) {
        dispatch(setValue(Number(enteringValue)));
      } else {
        if (prevOp === 'plus') {
          dispatch(plus(Number(enteringValue)));
          setEnteringValue((value + Number(enteringValue)).toString());
        } else if (prevOp === 'minus') {
          dispatch(minus(Number(enteringValue)));
          setEnteringValue((value - Number(enteringValue)).toString());
        } else {
          setEnteringValue(value.toString());
        }
      }
      break;
    case 'all_clear':
      dispatch(setValue(0));
      setEnteringValue('0');
      break;
    default:
      console.log('oh no');
  }
  setPrevOp(operator);
}

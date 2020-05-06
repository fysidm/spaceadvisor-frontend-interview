export const panelList = [
  {
    items: [
      {
        text: 'AC',
        backgroundColor: '#afafaf',
        isOperator: true,
        operator: 'all_clear',
      },
      {
        text: '+/-',
        backgroundColor: '#afafaf',
        isDisabled: true,
        isOperator: true,
        operator: 'positive_negative_switch',
      },
      {
        text: '%',
        backgroundColor: '#afafaf',
        isDisabled: true,
        isOperator: true,
        operator: 'mod',
      },
      {
        text: '÷',
        backgroundColor: '#3091fd',
        isDisabled: true,
        isOperator: true,
        operator: 'divid',
      },
    ]
  },
  {
    items: [
      {
        text: '7',
      },
      {
        text: '8',
      },
      {
        text: '9',
      },
      {
        text: 'x',
        backgroundColor: '#3091fd',
        isDisabled: true,
        isOperator: true,
        operator: 'multiply',
      },
    ]
  },
  {
    items: [
      {
        text: '4',
      },
      {
        text: '5',
      },
      {
        text: '6',
      },
      {
        text: '-',
        isOperator: true,
        operator: 'minus',
        backgroundColor: '#3091fd',
      },
    ]
  },
  {
    items: [
      {
        text: '1',
      },
      {
        text: '2',
      },
      {
        text: '3',
      },
      {
        text: '+',
        isOperator: true,
        operator: 'plus',
        backgroundColor: '#3091fd',
      },
    ]
  },
  {
    items: [
      {
        text: '0',
        grow: 2
      },
      {
        text: '.',
        isDisabled: true,
        isOperator: true,
        operator: 'add_dot',
      },
      {
        text: '=',
        isOperator: true,
        operator: 'equal',
        backgroundColor: '#3091fd',
      },
    ]
  },
];

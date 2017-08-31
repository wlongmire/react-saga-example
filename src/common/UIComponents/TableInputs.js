import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#add-component': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 1 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'add-component-header': {
    'background': '#dedede',
    'display': 'grid',
    'gridTemplateColumns': '1fr 20px',
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }],
    'fontWeight': 'bold'
  },
  'add': {
    'color': '#f84445',
    'fontSize': [{ 'unit': 'string', 'value': 'x-large' }],
    'fontWeight': 'bold',
    'cursor': 'pointer'
  }
});

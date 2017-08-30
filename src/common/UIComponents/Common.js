import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'dropdown-label': {
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'fontWeight': 'bold',
    'color': 'gray',
    'display': 'inline-block',
    'textAlign': 'left',
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 0.9 }]
  },
  'dropdown-value': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'display': 'inline-block',
    'textAlign': 'left',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dedede' }],
    'borderRadius': '3px',
    'position': 'relative',
    'right': [{ 'unit': 'em', 'value': 0.2 }],
    'height': [{ 'unit': 'em', 'value': 3.2 }]
  }
});

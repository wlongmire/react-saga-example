import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#add-component': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 1 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'add-component-header': {
    'background': '#eaefee',
    'display': 'grid',
    'gridTemplateColumns': '1fr 20px',
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }],
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'borderRadius': '3px'
  },
  'add': {
    'color': '#f84445',
    'fontSize': [{ 'unit': 'string', 'value': 'x-large' }],
    'fontWeight': 'bold',
    'cursor': 'pointer'
  },
  'component-entry': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'width': [{ 'unit': '%H', 'value': 0.8 }]
  },
  'component-entry-panels': {
    'display': 'grid',
    'gridTemplateColumns': '25% 25% 25% 25%',
    'width': [{ 'unit': 'px', 'value': 800 }]
  }
});

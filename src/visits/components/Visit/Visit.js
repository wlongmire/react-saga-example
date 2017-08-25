import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#visit-drawer': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'textAlign': 'center'
  },
  'header': {
    'minHeight': [{ 'unit': '%V', 'value': 0.1 }],
    'background': '#f84445'
  },
  'header p': {
    'color': 'white',
    'fontWeight': '900',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }]
  },
  'maintenance-section': {
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'padding': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }]
  },
  'table-element': {
    'width': [{ 'unit': '%H', 'value': 0.8 }]
  }
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#visit-drawer': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'black' }],
    'overflowY': 'scroll'
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
  }
});

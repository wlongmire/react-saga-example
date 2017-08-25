import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'App': {
    'textAlign': 'center',
    'display': 'grid',
    'gridTemplateRows': '11vh 1fr'
  },
  'App-header': {
    'height': [{ 'unit': 'px', 'value': 150 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'color': 'white'
  },
  'App-intro': {
    'fontSize': [{ 'unit': 'string', 'value': 'large' }]
  }
});

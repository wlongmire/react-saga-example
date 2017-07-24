import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'App': {
    'textAlign': 'center'
  },
  'App-header': {
    'height': [{ 'unit': 'px', 'value': 150 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'color': 'white'
  },
  'App-intro': {
    'fontSize': [{ 'unit': 'string', 'value': 'large' }]
  },
  'title': {
    'color': '#f84445'
  },
  'container': {
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'visit-drawer-hide': {
    'transform': 'translateX(0)',
    'transition': 'transform .6s ease-in-out'
  },
  'visit-drawer-show': {
    'transform': 'translateX(100%)',
    'transition': 'transform .6s ease-in-out'
  }
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'visits-container': {
    'textAlign': 'center'
  },
  'title': {
    'color': '#f84445'
  },
  'container': {
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'visit-drawer-show': {
    'transform': 'translateX(0)',
    'transition': 'transform .6s ease-in-out'
  },
  'visit-drawer-hide': {
    'transform': 'translateX(100%)',
    'transition': 'transform .6s ease-in-out'
  }
});

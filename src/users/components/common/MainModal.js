import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#main-modal': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'background': 'rgba(0,0,0,0.6)',
    'zIndex': '4'
  },
  'modal-content': {
    'margin': [{ 'unit': '%V', 'value': 0.1 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': '%V', 'value': 0.1 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'height': [{ 'unit': 'vw', 'value': 30 }],
    'color': 'black',
    'display': 'grid',
    'gridTemplateRows': '15% 75%',
    'background': 'white'
  },
  'modal-title': {
    'background': '#f84445',
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'color': 'white'
  }
});

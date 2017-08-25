import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#main-modal': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'background': 'rgba(0,0,0,0.6)',
    'zIndex': '4',
    'overflow': 'hidden'
  },
  'modal-content': {
    'margin': [{ 'unit': '%V', 'value': 0.1 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': '%V', 'value': 0.1 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'height': [{ 'unit': 'vw', 'value': 40 }],
    'color': 'black',
    'display': 'grid',
    'gridTemplateRows': '15% 75%',
    'background': 'white',
    'overflowY': 'scroll',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'black' }],
    'borderRadius': '5px'
  },
  'modal-title': {
    'background': '#dedede',
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 1.5 }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'em', 'value': 1.5 }],
    'color': 'black',
    'fontWeight': 'bold'
  }
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#popover': {
    'position': 'fixed',
    'right': [{ 'unit': 'em', 'value': 6 }],
    'bottom': [{ 'unit': 'em', 'value': 4 }],
    'zIndex': '10'
  },
  '#popover li': {
    'display': 'block',
    'listStyle': 'none',
    'background': 'black',
    'margin': [{ 'unit': 'em', 'value': 2.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2.5 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '3px',
    'color': 'white',
    'padding': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }],
    'textAlign': 'center',
    'letterSpacing': [{ 'unit': 'px', 'value': 2 }],
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'width': [{ 'unit': 'em', 'value': 7 }],
    'cursor': 'pointer',
    'zIndex': '10'
  },
  '#popover li i': {
    'zIndex': '10'
  },
  'flask-icon': {
    'position': 'absolute',
    'left': [{ 'unit': 'em', 'value': 11.5 }],
    'color': 'white',
    'display': 'inline-block',
    'background': '#f84445',
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '50%',
    'transform': 'scale(1.5)',
    'cursor': 'pointer',
    'zIndex': '20'
  }
});

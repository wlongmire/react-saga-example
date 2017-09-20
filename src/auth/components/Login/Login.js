import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'login-form': {
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center',
    'marginTop': [{ 'unit': 'px', 'value': 100 }]
  },
  'login-form > div:first-of-type': {
    'padding': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }]
  },
  'login-label': {
    'WebkitMarginBefore': '0.25em',
    'WebkitMarginAfter': '0.25em',
    'textAlign': 'center'
  },
  'login-submit-button-container': {
    'display': 'flex',
    'justifyContent': 'center',
    'paddingTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'error-label': {
    'color': 'red',
    'maxWidth': [{ 'unit': 'px', 'value': 260 }],
    'marginTop': [{ 'unit': 'px', 'value': 15 }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  // ================
New Log In Component
================
  '#wrapper-login': {
    'display': 'grid',
    'gridTemplateRows': '80px 20px 1fr',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'width': [{ 'unit': 'vw', 'value': 100 }],
    'overflow': 'hidden'
  },
  'lifeco-label': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'height': [{ 'unit': 'px', 'value': 80 }],
    'width': [{ 'unit': 'px', 'value': 80 }],
    'background': '#F42C3D',
    'position': 'absolute',
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 8 }],
    'textAlign': 'center',
    'verticalAlign': 'middle',
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'fontWeight': 'bold',
    'color': 'white'
  },
  'login-body login-form': {
    'position': 'relative',
    'top': [{ 'unit': '%V', 'value': 0.35 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'login-body login-form form-input[type="text"]': {
    'margin': [{ 'unit': 'em', 'value': 0.8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.8 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'background': '#fff !important'
  },
  'login-body login-form form-input[type="password"]': {
    'margin': [{ 'unit': 'em', 'value': 0.8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.8 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'background': '#fff !important'
  },
  'login-body login-form form-input': {
    'borderRadius': '5px',
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'fontWeight': '100',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#9b9b9b' }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }]
  },
  'login-body login-form form-input:focus': {
    'outline': 'none'
  },
  // .login-body .login-form .form-input:visited{
    background: #fff;
}
  'login-body login-form form-input::placeholder': {
    'fontWeight': 'medium',
    'color': '#BFBFBF'
  },
  'login-body login-form form-input[type="submit"]': {
    'background': '#F42C3D',
    'color': 'white',
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': 'medium'
  },
  'intro': {
    'display': 'block',
    'color': '#F42C3D',
    'textAlign': 'center',
    'margin': [{ 'unit': 'em', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 3 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.7 }],
    'fontWeight': '500'
  },
  'forgot-password': {
    'position': 'relative',
    'textAlign': 'center',
    'color': '#BFBFBF',
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }]
  },
  'slashIcon': {
    'position': 'absolute',
    'display': 'inline-block',
    'left': [{ 'unit': '%H', 'value': 0.85 }],
    'top': [{ 'unit': '%V', 'value': 0.38 }],
    'opacity': '.4',
    'transform': 'scale(1.2)'
  }
});

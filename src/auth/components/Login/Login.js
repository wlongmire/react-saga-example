import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}
  // .login-form > div:first-of-type {
    padding: 25px;
}

.login-label {
    -webkit-margin-before: 0.25em;
    -webkit-margin-after: 0.25em;
    text-align: center;
}

.login-submit-button-container {
    display: flex;
    justify-content: center;
    padding-top: 15px;
}

.error-label {
    color: red;
    max-width: 260px;
    margin-top: 15px;
    font-size: 13px;
}
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
  'login-body': {
    'position': 'relative',
    'top': [{ 'unit': '%V', 'value': 0.3 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'textAlign': 'center'
  },
  'login-email-input': {
    'margin': [{ 'unit': 'em', 'value': 0.8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.8 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'background': '#fff !important'
  },
  'login-password-input': {
    'margin': [{ 'unit': 'em', 'value': 0.8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.8 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'background': '#fff !important'
  },
  'login-email-input': {
    'borderRadius': '5px',
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'fontWeight': '100',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#9b9b9b' }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }]
  },
  'login-password-input': {
    'borderRadius': '5px',
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'fontWeight': '100',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#9b9b9b' }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }]
  },
  'login-email-input:focus': {
    'outline': 'none'
  },
  'login-password-input:focus': {
    'outline': 'none'
  },
  'login-submit-button:focus': {
    'outline': 'none'
  },
  'login-email-input::placeholder': {
    'fontWeight': 'medium',
    'color': '#BFBFBF'
  },
  'login-password-input::placeholder': {
    'fontWeight': 'medium',
    'color': '#BFBFBF'
  },
  'login-submit-button::placeholder': {
    'fontWeight': 'medium',
    'color': '#BFBFBF'
  },
  'login-submit-button': {
    'background': '#F42C3D',
    'color': 'white',
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'borderRadius': '5px',
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': 'medium',
    'cursor': 'pointer',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'transition': 'all.3s ease-in-out'
  },
  'login-submit-button:hover': {
    'background': '#ECEEEE',
    'color': 'black'
  },
  'intro': {
    'display': 'block',
    'color': '#F42C3D',
    'textAlign': 'center',
    'margin': [{ 'unit': 'em', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 3 }, { 'unit': 'px', 'value': 0 }],
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
    'top': [{ 'unit': 'em', 'value': 7 }],
    'opacity': '.2',
    'transform': 'scale(1.2)'
  }
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // ===================
Email Reset Form
===================
  'reset-body': {
    'textAlign': 'center',
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.6 }],
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translate(-50% ,-50%)'
  },
  'update-body': {
    'textAlign': 'center',
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.6 }],
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translate(-50% ,-50%)'
  },
  'reset-body input': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'margin': [{ 'unit': 'em', 'value': 2.5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 2.5 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'text': {
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'lineHeight': [{ 'unit': 'em', 'value': 2 }],
    'fontWeight': '100',
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'text-response': {
    'fontWeight': '100',
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 3 }, { 'unit': 'px', 'value': 0 }]
  },
  'email-reset-input': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#9b9b9b' }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'borderRadius': '5px'
  },
  'email-reset-input:focus': {
    'outline': 'none'
  },
  'email-reset-button:focus': {
    'outline': 'none'
  },
  'email-login-button': {
    'outline': 'none'
  },
  'email-reset-button': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'borderRadius': '5px',
    'color': 'white',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'background': '#F42C3D',
    'transition': 'all .3s ease'
  },
  'email-login-button': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'borderRadius': '5px',
    'color': 'white',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'background': '#F42C3D',
    'transition': 'all .3s ease'
  },
  'reset-password-button': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'borderRadius': '5px',
    'color': 'white',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'background': '#F42C3D',
    'transition': 'all .3s ease'
  },
  'home-redirect-btn': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'borderRadius': '5px',
    'color': 'white',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'background': '#F42C3D',
    'transition': 'all .3s ease'
  },
  'email-reset-button:hover': {
    'background': '#9b9b9b'
  },
  'email-login-button:hover': {
    'background': '#9b9b9b'
  },
  'reset-password-button:hover': {
    'background': '#9b9b9b'
  },
  'home-redirect-btn:hover': {
    'background': '#9b9b9b'
  },
  'email-reset-input::placeholder': {
    'textAlign': 'left'
  },
  // ===================
Thank You Message
===================
  'thank-you-section': {
    'textAlign': 'center',
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translate(-50% ,-50%)'
  },
  'success': {
    'textAlign': 'center',
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translate(-50% ,-50%)'
  },
  'thank-you-message': {
    'fontWeight': 'medium'
  },
  'email-login-button': {
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'home-redirect-btn': {
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  // ===================
Update Password Form
===================
  'reset-password-input': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'margin': [{ 'unit': 'em', 'value': 2.5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 2.5 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'repeat-password-input': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'margin': [{ 'unit': 'em', 'value': 2.5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 2.5 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'reset-password-button': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'margin': [{ 'unit': 'em', 'value': 2.5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 2.5 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'reset-password-button:focus': {
    'outline': 'none'
  },
  'reset-password-input': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#9b9b9b' }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'borderRadius': '5px'
  },
  'repeat-password-input': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#9b9b9b' }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'borderRadius': '5px'
  },
  'reset-password-input:focus': {
    'outline': '2px solid #F42C3D',
    'borderRadius': '5px'
  },
  'repeat-password-input:focus': {
    'outline': '2px solid #F42C3D',
    'borderRadius': '5px'
  },
  'reset-password-input::placeholder': {
    'opacity': '.6'
  },
  'repeat-password-input::placeholder': {
    'opacity': '.6'
  }
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'add-user-section': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'margin': [{ 'unit': 'em', 'value': 5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 5 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': '%H', 'value': 0.9 }]
  },
  'add-user-form': {
    'width': [{ 'unit': '%H', 'value': 0.9 }]
  },
  'avatar-section': {
    'display': 'grid',
    'gridTemplateRows': '1fr 1fr 1fr 1fr',
    'height': [{ 'unit': 'px', 'value': 100 }],
    'padding': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 4 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 4 }]
  },
  'add-user-btn': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': '#f84445',
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 0.7 }, { 'unit': 'em', 'value': 6.5 }, { 'unit': 'em', 'value': 0.7 }, { 'unit': 'em', 'value': 6.5 }],
    'color': 'white',
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'borderRadius': '3px'
  },
  'replace-avatar-btn': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': '#f84445',
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }],
    'color': 'white',
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'borderRadius': '3px'
  },
  'user-create-avatar': {
    'display': 'block',
    'borderRadius': '50%',
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 100 }]
  },
  'title': {
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'color': 'black',
    'opacity': '.6',
    'marginBottom': [{ 'unit': 'em', 'value': 1 }]
  },
  'delete-title': {
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'textDecoration': 'underline',
    'cursor': 'pointer'
  },
  'add-user-title': {
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'position': 'relative',
    'top': [{ 'unit': 'em', 'value': 2 }],
    'left': [{ 'unit': 'em', 'value': 5 }],
    'display': 'block',
    'fontWeight': 'bold'
  },
  '#confirm-modal': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'background': 'rgba(0,0,0,.5)',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'zIndex': '5'
  },
  'modal-body': {
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'margin': [{ 'unit': '%V', 'value': 0.2 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': '%V', 'value': 0.2 }, { 'unit': 'string', 'value': 'auto' }],
    'background': 'white',
    'textAlign': 'center',
    'borderRadius': '3px',
    'padding': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }]
  },
  'confirm': {
    'display': 'inline-block',
    'background': '#f84445',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'borderRadius': '3px',
    'color': 'white'
  },
  'cancel': {
    'display': 'inline-block',
    'background': '#f84445',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'borderRadius': '3px',
    'color': 'white'
  }
});

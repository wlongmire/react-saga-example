import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'patients-list-wrapper': {
    'maxWidth': [{ 'unit': 'px', 'value': 1000 }],
    'margin': [{ 'unit': 'em', 'value': 5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 5 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'patients-row': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dedede' }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dedede' }],
    'padding': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }],
    'cursor': 'pointer',
    'transition': 'background .3s ease-in-out'
  },
  'patients-row:hover': {
    'background': 'rgba(0,0,0,.05)'
  },
  'patients-title': {
    'fontWeight': '800',
    'color': 'gray',
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
    'fontWeight': '100'
  },
  'patients-list-title': {
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'chat-count': {
    'color': '#f84445'
  },
  'table': {
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 1 }, { 'unit': 'string', 'value': 'auto' }],
    'borderCollapse': 'collapse',
    'width': [{ 'unit': 'px', 'value': 1000 }]
  },
  'td': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 20 }]
  },
  'new-message-alert': {
    'background': '#f84445',
    'display': 'inline-block',
    'color': 'white',
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'borderRadius': '50%',
    'width': [{ 'unit': 'px', 'value': 25 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer',
    'transition': 'all .4s ease-in-out',
    'marginRight': [{ 'unit': 'em', 'value': 1.5 }],
    'textAlign': 'center',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': '#f84445' }]
  },
  'new-message-alert:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': '#f84445' }]
  },
  'message-count': {
    'display': 'inline-block'
  },
  'message-text': {
    'display': 'inline-block'
  },
  'message-text': {
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'color': 'gray',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'avatar': {
    'textAlign': 'left'
  },
  'avatar-img': {
    'borderRadius': '50%',
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }]
  },
  'message-indicator': {
    'textAlign': 'right',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  }
});

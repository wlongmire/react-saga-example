import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'patients-list-wrapper': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'em', 'value': 8 }, { 'unit': 'em', 'value': 4 }, { 'unit': 'em', 'value': 8 }, { 'unit': 'em', 'value': 4 }]
  },
  'patients-row': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dedede' }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dedede' }],
    'padding': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }]
  },
  'patients-title': {
    'fontWeight': '800',
    'color': 'gray',
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
    'fontWeight': '100'
  },
  'chat-count': {
    'color': '#f84445'
  },
  'table': {
    'marginTop': [{ 'unit': 'em', 'value': 1 }],
    'borderCollapse': 'collapse',
    'width': [{ 'unit': '%H', 'value': 0.8 }]
  },
  'td': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }]
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
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': '#f84445' }]
  },
  'new-message-alert:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '#f84445' }]
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
  }
});

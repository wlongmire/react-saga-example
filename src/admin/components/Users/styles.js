import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'users-table': {
    'margin': [{ 'unit': 'em', 'value': 4 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 4 }, { 'unit': 'string', 'value': 'auto' }],
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'borderCollapse': 'collapse',
    'borderSpacing': '0',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'thead': {
    'color': 'gray',
    'fontWeight': 'bold'
  },
  'tbody': {
    'fontWeight': 'medium'
  },
  'tr': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dedede' }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'user-avatar': {
    'borderRadius': '50%',
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 4 }]
  },
  'td': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'action-bar': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'users-title': {
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 5 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'fontWeight': 'bold'
  },
  'main-section': {
    'marginTop': [{ 'unit': 'em', 'value': 5 }]
  },
  'create-new': {
    'textAlign': 'right'
  },
  'new-user': {
    'background': '#f84445',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 2 }],
    'position': 'relative',
    'right': [{ 'unit': 'em', 'value': 8 }],
    'borderRadius': '3px',
    'cursor': 'pointer'
  }
});

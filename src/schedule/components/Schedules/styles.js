import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'schedule-item': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 40px',
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0.5 }, { 'unit': 'px', 'value': 0.5 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.1)' }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 4 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 4 }],
    'borderRadius': '3px',
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 2 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'dropDown': {
    'display': 'grid',
    'gridTemplateRows': '1fr 1fr',
    'margin': [{ 'unit': 'em', 'value': 4 }, { 'unit': 'em', 'value': 8 }, { 'unit': 'em', 'value': 4 }, { 'unit': 'em', 'value': 8 }],
    'width': [{ 'unit': '%H', 'value': 0.4 }]
  },
  'dd-title': {
    'fontSize': [{ 'unit': 'em', 'value': 1.8 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'fontWeight': 'bold'
  },
  'input': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'gray' }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 4 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 4 }]
  },
  'schedule-date': {
    'padding': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 6 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 6 }],
    'fontWeight': 'bold'
  },
  'schedule-details': {
    'display': 'grid',
    'gridTemplateRows': '1fr 1fr'
  },
  'schedule-time': {
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }]
  },
  'schedule-details': {
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }]
  },
  'schedule-time': {
    'fontWeight': 'bold'
  },
  'patient-avatar': {
    'borderRadius': '50%'
  },
  'schedule-dropdown': {
    'display': 'none'
  },
  'schedule-dropdown': {
    'color': '#dedede'
  },
  'floating-btn-rotate': {
    'transition': 'transform .3s ease'
  },
  'floating-btn': {
    'transition': 'transform .3s ease',
    'transform': 'rotate(45deg)'
  },
  '#add-event-btn': {
    'background': '#f84445',
    'width': [{ 'unit': 'em', 'value': 3.5 }],
    'height': [{ 'unit': 'em', 'value': 3.5 }],
    'borderRadius': '50%',
    'textAlign': 'center',
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 53 }],
    'bottom': [{ 'unit': 'px', 'value': 20 }],
    'color': 'white',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '#f84445' }]
  },
  // ================
Add Visit  Modal

===============
  '#add-visit-modal': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'background': 'rgba(0,0,0,0.4)',
    'zIndex': '11'
  },
  'visit-content': {
    'background': 'white',
    'display': 'grid',
    'gridTemplateRows': '3em 1fr',
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'margin': [{ 'unit': '%V', 'value': 0.08 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': '%V', 'value': 0.08 }, { 'unit': 'string', 'value': 'auto' }],
    'boxShadow': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.1)' }],
    'borderRadius': '3px'
  },
  'visit-modal-header': {
    'background': '#dedede',
    'display': 'grid',
    'gridTemplateColumns': '1fr 10px',
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'fontWeight': 'bold'
  },
  'close': {
    'color': '#f84445',
    'cursor': 'pointer'
  },
  'visits-body': {
    'overflowY': 'scroll',
    'height': [{ 'unit': 'vh', 'value': 60 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  '#schedule-drawer': {
    'marginLeft': [{ 'unit': 'em', 'value': 3 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  // ================
End Add Visit  Modal

===============
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'im patient-view': {
    'display': 'grid',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'gridTemplateRows': '10% 20% 1fr'
  },
  'patient-details': {
    'display': 'block',
    'padding': [{ 'unit': 'em', 'value': 2.5 }, { 'unit': 'em', 'value': 2.5 }, { 'unit': 'em', 'value': 2.5 }, { 'unit': 'em', 'value': 2.5 }],
    'width': [{ 'unit': '%H', 'value': 0.4 }],
    'lineHeight': [{ 'unit': 'px', 'value': 5 }]
  },
  'patient-details div': {
    'display': 'inline-block'
  },
  'patient-avatar': {
    'marginRight': [{ 'unit': 'em', 'value': 1 }],
    'borderRadius': '50%'
  },
  'patient-name-details': {
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'em', 'value': 1.7 }]
  },
  '#add-event-btn': {
    'position': 'fixed',
    'right': [{ 'unit': '%H', 'value': 0.05 }],
    'bottom': [{ 'unit': '%V', 'value': 0.05 }],
    'height': [{ 'unit': 'px', 'value': 56 }],
    'width': [{ 'unit': 'px', 'value': 56 }],
    'borderRadius': '50%',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': '#f84445' }]
  },
  '#main-section': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dedede' }],
    'display': 'grid',
    'gridTemplateColumns': '30% 1fr'
  },
  'chat-title': {
    'textAlign': 'center',
    'display': 'block',
    'marginTop': [{ 'unit': 'em', 'value': 1 }],
    'textTransform': 'uppercase',
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  }
});

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
  // #main-section{
    border-top: 1px solid #dedede;
    display: grid;
    grid-template-columns: 30% 1fr;
}
  'chat-title': {
    'textAlign': 'center',
    'display': 'block',
    'marginTop': [{ 'unit': 'em', 'value': 1 }],
    'textTransform': 'uppercase',
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'floating-btn-rotate': {
    'transition': 'transform .3s ease'
  },
  'floating-btn': {
    'transition': 'transform .3s ease',
    'transform': 'rotate(45deg)'
  }
});

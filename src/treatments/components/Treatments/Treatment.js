import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'treatment-item': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0.5 }, { 'unit': 'px', 'value': 0.5 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.1)' }],
    'padding': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 3 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 3 }],
    'lineHeight': [{ 'unit': 'em', 'value': 2.5 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'borderRadius': '3px',
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 2 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'treatment-type': {
    'fontSize': [{ 'unit': 'string', 'value': 'large' }],
    'fontWeight': 'bold'
  },
  'treatment-detail': {
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }]
  },
  'treatment-title-card': {
    'fontWeight': 'bold',
    'textAlign': 'left',
    'display': 'block',
    'marginLeft': [{ 'unit': 'em', 'value': 1 }],
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'color': 'gray'
  },
  'treatment-details': {
    'lineHeight': [{ 'unit': 'px', 'value': 5 }]
  },
  'treatment-date': {
    'color': 'gray',
    'opacity': '.5'
  },
  'treatment-description': {
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }]
  }
});

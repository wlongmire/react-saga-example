import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'visit-item': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0.5 }, { 'unit': 'px', 'value': 0.5 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.1)' }],
    'padding': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 4 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 4 }],
    'lineHeight': [{ 'unit': 'em', 'value': 2.5 }],
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 2 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'visit-type': {
    'fontSize': [{ 'unit': 'string', 'value': 'large' }],
    'fontWeight': 'bold'
  },
  'visit-location': {
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }]
  },
  'visit-date-location': {
    'lineHeight': [{ 'unit': 'px', 'value': 5 }]
  },
  'visit-date': {
    'color': 'gray',
    'opacity': '.5'
  },
  'visit-description': {
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }]
  }
});

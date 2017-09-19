import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'visit-item': {
    'display': 'grid',
    'gridTemplateColumns': '100px 1fr 1fr',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d8e7e5' }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 1 }, { 'unit': 'string', 'value': 'auto' }],
    'zIndex': '5'
  },
  'visit-date': {
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'borderRadius': '50%',
    'position': 'relative',
    'right': [{ 'unit': 'em', 'value': 3.8 }],
    'transform': 'scale(.8)',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d8e7e5' }],
    'background': 'white',
    'zIndex': '4'
  },
  'visit-date p': {
    'background': '#67B2A6',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 8 }],
    'borderRadius': '50%',
    'textAlign': 'center',
    'color': 'white',
    'width': [{ 'unit': 'px', 'value': 80 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'visit-date p span': {
    'position': 'relative',
    'top': [{ 'unit': 'em', 'value': 0.8 }],
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'visit-details': {
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }]
  },
  'visit-detail': {
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'color': 'rgba(0,0,0,.3)'
  },
  'visit-type': {
    'fontSize': [{ 'unit': 'string', 'value': 'large' }],
    'fontWeight': 'bold'
  },
  'visit-date': {
    'color': 'gray',
    'opacity': '.5'
  },
  'visit-description': {
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }]
  }
});

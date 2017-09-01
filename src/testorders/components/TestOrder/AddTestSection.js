import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#test-section': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'textAlign': 'center',
    'margin': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'string', 'value': 'auto' }],
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.1)' }],
    'borderRadius': '3px'
  },
  'priority-type-section': {
    'width': [{ 'unit': '%H', 'value': 0.7 }],
    'margin': [{ 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr'
  },
  'priority_type': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'textAlign': 'left',
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 1 }]
  },
  'checkbox-title': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'textAlign': 'left',
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 2 }],
    'marginTop': [{ 'unit': 'em', 'value': 2 }],
    'fontWeight': 'bold',
    'color': 'gray'
  },
  'inputClass': {
    'zIndex': '-1',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'textAlign': 'left',
    'position': 'relative',
    'right': [{ 'unit': 'vw', 'value': 20 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'gray' }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }],
    'cursor': 'pointer'
  },
  'test-add-new': {
    'display': 'block',
    'textAlign': 'left',
    'marginLeft': [{ 'unit': 'em', 'value': 1.5 }],
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'fontWeight': 'bold',
    'color': 'gray',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  }
});

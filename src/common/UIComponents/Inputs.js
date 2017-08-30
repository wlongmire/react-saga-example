import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'data-header': {
    'display': 'grid',
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'gridTemplateColumns': '1fr 10px',
    'fontWeight': 'bold',
    'background': '#dedede',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }],
    'margin': [{ 'unit': 'em', 'value': 1.2 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 1.2 }, { 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'data-body': {
    'display': 'grid',
    'gridTemplateRows': '1fr 2fr',
    'gridRowGap': '1rem',
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'top-section': {
    'display': 'grid',
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'gridTemplateColumns': '1fr 3fr'
  },
  'bottom-section': {
    'display': 'grid',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'dropdown-label': {
    'display': 'none'
  },
  'top-section-items': {
    'height': [{ 'unit': 'px', 'value': 50 }]
  },
  'data-body-maintenance': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 2fr',
    'gridRowGap': '1rem',
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'data-body-immunizations': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 2fr',
    'gridRowGap': '1rem',
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 1.5 }]
  }
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'dropdown-label': {
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'fontWeight': 'bold',
    'color': 'gray',
    'display': 'inline-block',
    'textAlign': 'left',
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 0.9 }]
  },
  'dropdown-value': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'display': 'inline-block',
    'textAlign': 'left',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dedede' }],
    'borderRadius': '3px',
    'position': 'relative',
    'right': [{ 'unit': 'em', 'value': 0.2 }],
    'height': [{ 'unit': 'em', 'value': 3.2 }]
  },
  'dropdown-component': {
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }]
  },
  'custom-dropdown-component': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'black' }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'custom-dropdown-label': {
    'color': 'gray',
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'position': 'relative',
    'top': [{ 'unit': 'em', 'value': 2.5 }]
  },
  'custom-dropdown-value': {
    'textAlign': 'left',
    'position': 'relative',
    'right': [{ 'unit': 'em', 'value': 1.2 }],
    'top': [{ 'unit': 'em', 'value': 1 }]
  }
});

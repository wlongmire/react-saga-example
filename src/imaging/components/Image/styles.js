import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#image-section': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'textAlign': 'center',
    'margin': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'string', 'value': 'auto' }],
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.1)' }],
    'borderRadius': '3px'
  },
  'priority-type-section': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'marginLeft': [{ 'unit': 'em', 'value': 1 }]
  },
  'priority_type': {
    'display': 'grid',
    'gridTemplateColumns': '50px 1fr'
  },
  'priority_type label': {
    'textAlign': 'left',
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'width': [{ 'unit': 'px', 'value': 100 }]
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
    'right': [{ 'unit': 'rem', 'value': 17 }],
    'background': '#C6D3D1',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }],
    'height': [{ 'unit': 'rem', 'value': 2.5 }],
    'borderRadius': '3px',
    'cursor': 'pointer',
    'width': [{ 'unit': 'rem', 'value': 10 }]
  },
  'image-add-new': {
    'display': 'block',
    'textAlign': 'left',
    'marginLeft': [{ 'unit': 'em', 'value': 1.5 }],
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'fontWeight': 'bold',
    'color': 'gray',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  },
  'scheduled-time': {
    'display': 'grid',
    'position': 'relative',
    'gridTemplateColumns': '1fr 1fr 1fr',
    'width': [{ 'unit': 'vw', 'value': 56 }],
    'gridColumnGap': '2em'
  },
  'scheduled-time-section': {
    'marginBottom': [{ 'unit': 'em', 'value': 1 }]
  },
  // ==============================
File Input Section Attachment
==============================
  'file-input-section': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 20px'
  },
  'att-icon': {
    'display': 'inline-block',
    'position': 'relative',
    'right': [{ 'unit': 'em', 'value': 32 }]
  }
});

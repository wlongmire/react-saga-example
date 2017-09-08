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
    'right': [{ 'unit': 'vw', 'value': 11 }],
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
  },
  'calendar-icon': {
    'color': '#f84445',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 20 }],
    'transform': 'scale(1.4)'
  },
  'date-section-title': {
    'display': 'block',
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'textAlign': 'left',
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 2.5 }],
    'color': 'gray',
    'marginBottom': [{ 'unit': 'em', 'value': 1 }]
  },
  'scheduled-title': {
    'display': 'block',
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'textAlign': 'left',
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 2.5 }],
    'color': 'gray',
    'marginBottom': [{ 'unit': 'em', 'value': 1 }]
  },
  'priority-type-section': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'marginLeft': [{ 'unit': 'em', 'value': 1 }],
    'marginBottom': [{ 'unit': 'em', 'value': 1.5 }]
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
  'date-picker-section': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#C6D3D1' }],
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'marginLeft': [{ 'unit': 'em', 'value': 1.5 }],
    'height': [{ 'unit': 'em', 'value': 2.8 }],
    'borderRadius': '3px'
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
    'right': [{ 'unit': 'rem', 'value': 20 }],
    'top': [{ 'unit': 'rem', 'value': 2.5 }],
    'transform': 'scale(1.4)'
  }
});

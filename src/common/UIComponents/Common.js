import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'dropdown-label': {
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
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
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#C6D3D1' }],
    'borderRadius': '4px',
    'position': 'relative',
    'right': [{ 'unit': 'em', 'value': 0.2 }],
    'height': [{ 'unit': 'em', 'value': 2.8 }],
    'top': [{ 'unit': 'em', 'value': 0.5 }]
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
  },
  'schedule-dropdown-component': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'black' }],
    'width': [{ 'unit': '%H', 'value': 0.4 }],
    'height': [{ 'unit': 'em', 'value': 3.5 }],
    'color': '#dedede',
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'fontWeight': 'bold'
  },
  // ==========================
Custom Tab Component
==========================
  '#wrapper': {
    'display': 'grid',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'gridTemplateColumns': '30% 70%',
    'gridTemplateRows': '1fr',
    'height': [{ 'unit': 'vh', 'value': 70 }]
  },
  'chat-section': {
    // border-right: 1px solid #c6d3d1;
  },
  'right-section': {
    // border-right: 1px solid #c6d3d1;
  },
  'right-section': {
    'gridTemplateRows': '20px 1fr'
  },
  'tabs': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr 1fr',
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'tab-header': {
    // border-top: 1px solid #c6d3d1;
    border-right: 1px solid #c6d3d1;
    border-left: 1px solid #c6d3d1;
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'cursor': 'pointer'
  },
  'tab-header-clicked': {
    // border-top: 1px solid #c6d3d1;
    border-right: 1px solid #c6d3d1;
    border-left: 1px solid #c6d3d1;
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'cursor': 'pointer'
  },
  'tab-header': {
    'background': '#f7f9f8',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 3 }]
  },
  'tab-header-clicked': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c6d3d1' }],
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c6d3d1' }],
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c6d3d1' }],
    'background': 'white',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 1 }],
    'zIndex': '2'
  },
  'tab-content': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(198, 211, 209, 1)' }],
    'zIndex': '1'
  }
});

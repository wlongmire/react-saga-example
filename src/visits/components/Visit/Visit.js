import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#visit-drawer': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'textAlign': 'center',
    'paddingTop': [{ 'unit': 'em', 'value': 1 }],
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 1 }, { 'unit': 'string', 'value': 'auto' }],
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.1)' }]
  },
  'header': {
    'minHeight': [{ 'unit': '%V', 'value': 0.1 }],
    'background': '#f84445'
  },
  'header p': {
    'color': 'white',
    'fontWeight': '900',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }]
  },
  'maintenance-section': {
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'padding': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }]
  },
  'table-element': {
    'width': [{ 'unit': '%H', 'value': 0.8 }]
  },
  'visit-type-section': {
    'width': [{ 'unit': '%H', 'value': 0.7 }],
    'margin': [{ 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr'
  },
  'maintenance-type-section': {
    'width': [{ 'unit': '%H', 'value': 0.7 }],
    'margin': [{ 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr'
  },
  'label': {
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'string', 'value': 'small' }]
  },
  'checkbox-value': {
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'string', 'value': 'small' }]
  },
  'location-title': {
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'fontWeight': 'bold',
    'color': 'gray'
  },
  'scheduled-title': {
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'fontWeight': 'bold',
    'color': 'gray',
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 2 }],
    'textAlign': 'left'
  },
  'visit_type': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'textAlign': 'left',
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 1 }]
  },
  'maintenance_type': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'textAlign': 'left',
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 1 }]
  },
  'doctor_type': {
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
  'doctor-type-section': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr 1fr'
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
  }
});

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
  '#visit-drawer header': {
    'minHeight': [{ 'unit': '%V', 'value': 0.1 }],
    'background': '#f84445'
  },
  '#visit-drawerheader p': {
    'color': 'white',
    'fontWeight': '900',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }]
  },
  '#visit-drawer maintenance-section': {
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'padding': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }]
  },
  '#visit-drawer table-element': {
    'width': [{ 'unit': '%H', 'value': 0.8 }]
  },
  '#visit-drawer visit-type-section': {
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
  '#visit-drawerlabel': {
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'string', 'value': 'small' }]
  },
  '#visit-drawer checkbox-value': {
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'string', 'value': 'small' }]
  },
  '#visit-drawerlocation-title': {
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'fontWeight': 'bold',
    'color': 'gray'
  },
  '#visit-drawerscheduled-title': {
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'fontWeight': 'bold',
    'color': 'gray',
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 2 }],
    'textAlign': 'left'
  },
  '#visit-drawervisit_type': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'textAlign': 'left',
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 1 }]
  },
  '#visit-drawermaintenance_type': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'textAlign': 'left',
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 1 }]
  },
  '#visit-drawerdoctor_type': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'textAlign': 'left',
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 1 }]
  },
  '#visit-drawercheckbox-title': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'textAlign': 'left',
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 2 }],
    'marginTop': [{ 'unit': 'em', 'value': 2 }],
    'fontWeight': 'bold',
    'color': 'gray'
  },
  '#visit-drawerdoctor-type-section': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr 1fr'
  },
  '#visit-drawerscheduled-time': {
    'display': 'grid',
    'position': 'relative',
    'gridTemplateColumns': '1fr 1fr 1fr',
    'width': [{ 'unit': 'vw', 'value': 56 }],
    'gridColumnGap': '2em'
  },
  '#visit-drawerscheduled-time-section': {
    'marginBottom': [{ 'unit': 'em', 'value': 1 }]
  }
});

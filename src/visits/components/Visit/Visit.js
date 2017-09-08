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
  '#visit-drawermaintenance-type-section': {
    'width': [{ 'unit': '%H', 'value': 0.7 }],
    'margin': [{ 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr'
  },
  '#visit-drawerlabel': {
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'borderRadius': '50%'
  },
  '#visit-drawer checkbox-value': {
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'borderRadius': '50%'
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
  '#visit-drawercheckbox-title': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'textAlign': 'left',
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 2 }],
    'marginTop': [{ 'unit': 'em', 'value': 2 }],
    'fontWeight': 'bold',
    'color': 'gray'
  },
  '#visit-drawerscheduled-time-section': {
    'marginBottom': [{ 'unit': 'em', 'value': 1 }]
  },
  'date-picker-section': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 20%'
  },
  'calendar-icon': {
    'color': '#f84445',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 20 }],
    'transform': 'scale(1.4)'
  },
  'calendar-icon-schedule': {
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
  'visit-type-section': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'marginLeft': [{ 'unit': 'em', 'value': 1 }]
  },
  'maintenance-type-section': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'marginLeft': [{ 'unit': 'em', 'value': 1 }]
  },
  'doctor-type-section': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr 1fr'
  },
  'visit_type': {
    'display': 'grid',
    'gridTemplateColumns': '50px 1fr'
  },
  'maintenance_type': {
    'display': 'grid',
    'gridTemplateColumns': '50px 1fr'
  },
  'doctor_type': {
    'display': 'grid',
    'gridTemplateColumns': '50px 1fr'
  },
  'visit_type label': {
    'textAlign': 'left',
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'width': [{ 'unit': 'px', 'value': 100 }]
  },
  'maintenance_type label': {
    'textAlign': 'left',
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'width': [{ 'unit': 'px', 'value': 100 }]
  },
  'doctor_type label': {
    'textAlign': 'left',
    'fontSize': [{ 'unit': 'string', 'value': 'medium' }],
    'width': [{ 'unit': 'px', 'value': 100 }]
  },
  'doctor-type-section': {
    'marginLeft': [{ 'unit': 'em', 'value': 1 }]
  },
  // ====================================
Actual Time for the schedule section
====================================
  'scheduled-time': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr 1fr',
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 60 }],
    'bottom': [{ 'unit': 'em', 'value': 3 }]
  },
  'scheduled-date-box': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'position': 'relative',
    'top': [{ 'unit': 'em', 'value': 3.8 }],
    'left': [{ 'unit': 'em', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 9 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#C6D3D1' }],
    'height': [{ 'unit': 'em', 'value': 2.8 }],
    'borderRadius': '3px'
  },
  'calendar-icon-schedule': {
    'top': [{ 'unit': 'em', 'value': 0.8 }]
  }
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'patient-list': {
    'display': 'grid',
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'margin': [{ 'unit': 'em', 'value': 2.5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 2.5 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'patient-list subheader h4': {
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'patient-list subheader span': {
    'color': '#f84445',
    'fontWeight': 'bold'
  },
  'patient-list subheader span': {
    'fontSize': [{ 'unit': 'em', 'value': 1.1 }]
  },
  'patient-list subheader p': {
    'fontSize': [{ 'unit': 'em', 'value': 1.1 }]
  },
  'patient-list subheader list-title': {
    'color': '#686868',
    'fontSize': [{ 'unit': 'em', 'value': 0.9 }]
  }
});

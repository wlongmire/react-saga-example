import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'top-navigation': {
    'listStyle': 'none',
    'position': 'relative'
  },
  'top-navigation li': {
    'listStyle': 'none',
    'position': 'relative',
    'display': 'inline-block',
    'cursor': 'pointer',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }],
    'transition': 'color .3s ease-in-out',
    'fontWeight': 'bold'
  },
  'top-navigation li:hover': {
    'color': '#f84445'
  },
  'lifeco--home': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'fixed',
    'color': '#f84445',
    'fontWeight': 'bold',
    'marginRight': [{ 'unit': '%H', 'value': 0.4 }]
  },
  'hr': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dedede' }]
  },
  'li > a:hover': {
    'color': '#f84445'
  }
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'top-navigation': {
    'listStyle': 'none',
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'top-navigation li': {
    'listStyle': 'none',
    'display': 'inline-block',
    'cursor': 'pointer',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 3 }],
    'transition': 'color .3s ease-in-out'
  },
  'top-navigation li:hover': {
    'color': '#f84445'
  },
  'lifeco--home': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'fixed',
    'color': '#f84445',
    'fontWeight': 'bold'
  },
  'hr': {
    'top': [{ 'unit': 'em', 'value': 3.5 }],
    'position': 'relative',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dedede' }],
    'opacity': '.5'
  }
});

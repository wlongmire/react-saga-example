import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'navlc-nav': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#ffffff',
    'zIndex': '2'
  },
  'nav lc-nav-wrapper': {
    'paddingLeft': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'nav alc-brand-logo': {
    'position': 'absolute',
    'color': '#f84445',
    'display': 'inline-block',
    'fontWeight': 'bold'
  },
  'nav alc-brand-logo:link': {
    'position': 'absolute',
    'color': '#f84445',
    'display': 'inline-block',
    'fontWeight': 'bold'
  },
  'nav alc-brand-logo': {
    'WebkitMarginBefore': '1em',
    'WebkitMarginAfter': '1em',
    'WebkitMarginStart': '0px',
    'WebkitMarginEnd': '0px',
    'WebkitPaddingStart': '40px',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1.5 }]
  },
  'nav lc-nav-top li': {
    'listStyle': 'none',
    'position': 'relative',
    'display': 'inline-block',
    'cursor': 'pointer',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1.5 }],
    'transition': 'color .3s ease-in-out',
    'fontWeight': 'bold'
  },
  'nav lc-nav-top li a': {
    'color': '#333333'
  },
  'nav lc-nav-top li a:hover': {
    'color': '#f84445'
  },
  'nav lc-nav-action-menu': {
    'WebkitMarginBefore': '0.5em',
    'WebkitMarginAfter': '0px',
    'WebkitMarginStart': '0px',
    'WebkitMarginEnd': '0px',
    'WebkitPaddingStart': '40px',
    'WebkitPaddingEnd': '40px',
    'cursor': 'pointer'
  },
  'hr': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dedede' }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  }
});

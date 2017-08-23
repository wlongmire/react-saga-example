import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // default version
  'fontFace': {
    'fontFamily': ''Apercu'',
    'src': 'url('./apercu_regular_pro.otf')',
    'src': 'local('Apercu'),
		local('Apercu'),
		url('./apercu_regular_pro.otf') 
		format('opentype')'
  },
  'fontFace': {
    'fontFamily': ''Apercu'',
    'src': 'url('./apercu_bold_pro.otf')',
    'src': 'local('Apercu Font Bold'),
		local('Apercu Font Bolds'),
		url('./apercu_bold_pro.otf') 
        format('opentype')',
    'fontWeight': 'bold'
  },
  'fontFace': {
    'fontFamily': ''Apercu'',
    'src': 'url('./apercu_medium_pro.otf')',
    'src': 'local('Apercu Font Medium'),
		local('Apercu Font Medium'),
		url('./apercu_medium_pro.otf') 
        format('opentype')',
    'fontWeight': '500'
  }
});

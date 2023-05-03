import { StyleSheet } from 'react-native';
import { THEMES } from 'utils/constants';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: THEMES.WHITE,
	},
	logo: {
		width: 110,
		height: 110,
	},
});

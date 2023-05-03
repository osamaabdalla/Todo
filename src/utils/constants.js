import { Dimensions } from 'react-native';
const device = Dimensions.get('window');
export const DEVICE_WIDTH = device.width;
export const DEVICE_HEIGHT = device.height;

export const ORDER_OPTIONS = [
	{
		name: 'Alphabetically A-Z',
		icon: 'sort-desc',
		desc: false,
		key: 'title',
	},
	{
		name: 'Alphabetically Z-A',
		icon: 'sort-asc',
		desc: true,
		key: 'title',
	},
	{
		name: 'Creattion date ASC',
		icon: 'sort-desc',
		desc: false,
		key: 'created_at',
	},
	{
		name: 'Creattion date DESC',
		icon: 'sort-asc',
		desc: true,
		key: 'created_at',
	},
	{
		name: 'Update date ASC',
		icon: 'sort-desc',
		desc: false,
		key: 'updated_at',
	},
	{
		name: 'Update date DESC',
		icon: 'sort-asc',
		desc: true,
		key: 'updated_at',
	}
];

export const DEFAULT = {
	WHITE: '#FFFFFF',
	BLACK: '#060101',
	GREY: '#C3C3C3',
	RED: '#B22A0D',
	DARK_GRAY: '#666666',
	TERTIARY_COLOR: '#979797',
	SECONDARY_COLOR: '#FBFAFF',
	BG_PRIMARY_COLOR: '#3283CC',
	PRIMARY_COLOR: '#3283CC',
	PAGE_BACKGROUND: '#E8F6FF',
	ITEM_BACKGROUND: '#FFFFFF',
	HEADER_BACKGROUND: '#FFFFFF',
	TAB_BAR_BACKGROUND: '#FFFFFF',
	SWITCH: '#90d2f7',
	UniWHITE: '#FFFFFF',
};

export const DARK = {
	WHITE: '#060101',
	BLACK: '#FFFFFF',
	GREY: '#919191',
	RED: '#941b00',
	DARK_GRAY: '#999999',
	TERTIARY_COLOR: '#545454',
	SECONDARY_COLOR: '#bfbfbf',
	BG_PRIMARY_COLOR: '#135fab',
	PRIMARY_COLOR: '#d4d4d4',
	PAGE_BACKGROUND: '#000000',
	ITEM_BACKGROUND: '#222222',
	HEADER_BACKGROUND: '#222222',
	TAB_BAR_BACKGROUND: '#222222',
	SWITCH: '#FFC55C',
	UniWHITE: '#FFFFFF',
};

export const THEMES = {
	DARK,
	DEFAULT,
	SPLASH_BACKGROUND: '#DFEEFC',
};

const theme = DEFAULT;

export const SHADOW = {
	shadowColor: theme.GREY,
	shadowOpacity: 0.4,
	shadowRadius: 4,
	elevation: 4,
};

export default theme;

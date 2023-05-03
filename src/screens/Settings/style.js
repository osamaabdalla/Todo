import { StyleSheet } from 'react-native';
import { THEMES } from 'utils/constants';

export default function style(theme = THEMES.DEFAULT) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.PAGE_BACKGROUND,
        },
        settingWrap: {
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: theme.ITEM_BACKGROUND,
            alignItems: 'center',
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 10,
        },
        settingTitle: {
            fontSize: 15,
            color: theme.BLACK,
        },
    });
}

import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH, SHADOW, THEMES } from 'utils/constants';

export default function style(theme = THEMES.DEFAULT) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.PAGE_BACKGROUND,
            justifyContent: 'flex-start',
            flexDirection: 'column',
            alignItems: 'center',
        },
        pageName: {
            fontSize: 15,
            color: theme.BLACK,
            width: DEVICE_WIDTH,
            textAlign: 'left',
            paddingVertical: 20,
            paddingHorizontal: 25,
        },
        orderButton: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: theme.BG_PRIMARY_COLOR,
            width: DEVICE_WIDTH - 40,
            alignSelf: 'center',
            marginBottom: 10,
            borderRadius: 25,
            height: 50,
            ...SHADOW,
        },
        optionText: {
            color: theme.UniWHITE,
            marginHorizontal: 10,
        },
    });
}

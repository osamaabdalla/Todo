import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH, SHADOW, THEMES } from 'utils/constants';

export default function style(theme = THEMES.DEFAULT) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.PAGE_BACKGROUND,
        },
        emptyWrap: {
            marginTop: 120,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        emptyImage: {
            width: 220,
            height: 220,
            borderRadius: 110,
            opacity: 0.8,
            marginBottom: 20,
        },
        emptyMessage: {
            textAlign: 'center',
            color: theme.BLACK,
        },
        todosListWrap: {
            padding: 20,
        },
        addButton: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: theme.BG_PRIMARY_COLOR,
            width: DEVICE_WIDTH / 2,
            borderRadius: 25,
            bottom: 40,
            height: 50,
            ...SHADOW,
        },
        addButtonText: {
            fontSize: 15,
            color: theme.UniWHITE,
            marginHorizontal: 10,
        },
    });
}

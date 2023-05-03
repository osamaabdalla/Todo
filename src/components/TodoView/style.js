import { StyleSheet } from 'react-native';
import { THEMES, SHADOW } from 'utils/constants';

export default function style(theme = THEMES.DEFAULT) {
    return StyleSheet.create({
        todoWrap: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
            ...SHADOW,
        },
        todoInfo: {
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: theme.ITEM_BACKGROUND,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            width: '70%',
        },
        todoTitle: {
            fontSize: 16,
            color: theme.BLACK,
            textAlign: 'left',
            marginBottom: 10,
        },
        todoDate: {
            fontSize: 13,
            color: theme.DARK_GRAY,
            textAlign: 'left',
        },
        actionsWrap: {
            height: '100%',
            width: '30%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        viewButton: {
            height: '100%',
            width: '50%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: theme.ITEM_BACKGROUND,
            borderLeftWidth: 0.5,
            borderRightWidth: 0.5,
            borderColor: theme.GREY,
        },
        deleteButton: {
            height: '100%',
            width: '50%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: theme.ITEM_BACKGROUND,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
        },
    });
}

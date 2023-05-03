import { StyleSheet } from 'react-native';
import { THEMES } from 'utils/constants';

export default function style(theme = THEMES.DEFAULT) {
    return StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 25,
            backgroundColor: theme.PAGE_BACKGROUND,
        },
        titleWrap: {
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: theme.ITEM_BACKGROUND,
            alignItems: 'center',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomColor: theme.GREY,
            borderBottomWidth: 0.5,
            padding: 20,
        },
        todoDate: {
            marginTop: 10,
            fontSize: 13,
            color: theme.DARK_GRAY,
            textAlign: 'left',
        },
        updateDate: {
            marginTop: 10,
            fontSize: 13,
            color: theme.DARK_GRAY,
            textAlign: 'left',
            marginLeft: 30,
        },
        todoWrap: {
            marginHorizontal: 20,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: theme.ITEM_BACKGROUND,
            alignItems: 'flex-start',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            padding: 20,
        },
        title: {
            fontSize: 15,
            fontWeight: '600',
            color: theme.BLACK,
        },
        todoDescription: {
            fontSize: 15,
            color: theme.BLACK,
        },
    });
}

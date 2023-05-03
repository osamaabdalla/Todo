import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH, THEMES } from 'utils/constants';

export default function style(theme = THEMES.DEFAULT) {
    return StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: theme.PAGE_BACKGROUND,
        },
        formContainer: {
            width: '100%',
            paddingTop: 30,
            paddingHorizontal: 20,
        },
        titleWrap: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: theme.WHITE,
            alignItems: 'flex-start',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomColor: theme.GREY,
            borderBottomWidth: 0.5,
            position: 'relative',
        },
        descriptionWrap: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: theme.WHITE,
            alignItems: 'flex-start',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            position: 'relative',
            paddingTop: 20,
        },
        description: {
            width: '100%',
            minHeight: 250,
            padding: 20,
            color: theme.BLACK,
        },
        title: {
            fontSize: 15,
            fontWeight: '600',
            width: '100%',
            padding: 20,
            color: theme.BLACK,
        },
        errorText: {
            color: theme.RED,
            position: 'absolute',
            top: 22,
            right: 15,
        },
        saveButton: {
            marginTop: 50,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: theme.BG_PRIMARY_COLOR,
            width: DEVICE_WIDTH / 2,
            borderRadius: 25,
            height: 50,
        },
        saveButtonText: {
            fontSize: 15,
            color: theme.WHITE,
            marginHorizontal: 10,
        },
    });
}

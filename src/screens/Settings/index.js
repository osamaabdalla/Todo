import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from 'store/reducers/global';
import { AppContext } from 'providers';
import getStyle from './style';

export default function Settings() {
    const dispatch = useDispatch();
    const { theme } = useContext(AppContext);
    const [style, setStyle] = useState(getStyle(theme));
    const darkMode = useSelector(state => state?.global?.darkMode || false);

    useEffect(() => {
        setStyle(getStyle(theme));
    }, [theme]);

    const toggle = () => {
        dispatch(toggleMode(!darkMode));
    };

    const iconName = darkMode ? "toggle-off" : "toggle-on";

    return (
        <View style={style.container}>
            <View style={style.settingWrap}>
                <Text style={style.settingTitle}>Dark Mode</Text>
                <TouchableOpacity
                    testID={'DarkModeButton'}
                    onPress={toggle}>
                    <Fontisto
                        size={42}
                        name={iconName}
                        color={theme.SWITCH}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

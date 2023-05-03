import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { changeAppTheme } from 'store/reducers/global';
import { useDispatch, useSelector } from 'react-redux';
import { THEMES } from 'utils/constants';
import { MainStack } from 'navigations';
import { AppContext } from 'providers';

const Stack = createStackNavigator();

export default function App() {
    const dispatch = useDispatch();
    const theme = useSelector(state => state?.global?.theme || {});
    const darkMode = useSelector(state => state?.global?.darkMode);

    const NavigationContainerTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: theme.PAGE_BACKGROUND,
        },
    };

    useEffect(() => {
        if (darkMode) {
            dispatch(changeAppTheme(THEMES.DARK));
            StatusBar.setBarStyle('light-content');
        } else {
            dispatch(changeAppTheme(THEMES.DEFAULT));
            StatusBar.setBarStyle('dark-content');
        }
    }, [darkMode]);

    const hideSplash = SplashScreen.hide();

    const screenOptions = { headerShown: false };
    
    return (
        <AppContext.Provider value={{ theme }}>
            <NavigationContainer theme={NavigationContainerTheme} onReady={hideSplash}>
                <Stack.Navigator>
                    <Stack.Screen name="Main" component={MainStack} options={screenOptions} />
                </Stack.Navigator>
            </NavigationContainer>
        </AppContext.Provider>
    );
}

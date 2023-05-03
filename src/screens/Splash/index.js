import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import style from './style';

const Splash = () => {
    return (
        <View style={style.container}>
            <FastImage
                source={require('assets/images/png/todos.png')}
                style={style.logo}
            />
        </View>
    );
};

export default Splash;

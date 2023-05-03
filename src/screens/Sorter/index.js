import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import { updateSorter } from 'store/reducers/global';
import { ORDER_OPTIONS } from 'utils/constants';
import { useDispatch } from 'react-redux';
import { AppContext } from 'providers';
import getStyle from './style';

export default function Filters() {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const { theme } = useContext(AppContext);
	const [style, setStyle] = useState(getStyle(theme));

	useEffect(() => {
		setStyle(getStyle(theme));
	}, [theme]);

	const updateSortType = (option) => {
		dispatch(updateSorter(option));
		navigation.goBack();
	}

	const renderOptions = ORDER_OPTIONS.map((option, index) => (
		<TouchableOpacity
			key={index.toString()}
			style={style.orderButton}
			onPress={() => updateSortType(option)}>
			<Octicons name={option.icon} size={25} color={theme.UniWHITE} />
			<Text style={style.optionText}>{option.name}</Text>
		</TouchableOpacity>
	));

	return (
		<View style={style.container}>
			<Text style={style.pageName}>{'Sort by :'}</Text>
			{renderOptions}
		</View>
	);
}

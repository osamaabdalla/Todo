import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Markdown from 'react-native-markdown-display';
import { formatDate } from 'utils/helpers';
import { AppContext } from 'providers';
import getStyle from './style';

export default function ViewTodo() {
	const { params = {} } = useRoute();
	const navigation = useNavigation();
	const { theme } = useContext(AppContext);
	const [style, setStyle] = useState(getStyle(theme));
	const {
		todo = {},
	} = params;

	useEffect(() => {
		setStyle(getStyle(theme));
	}, [theme]);

	const editTodo = () => navigation.replace('Update', params);

	return (
		<ScrollView contentContainerStyle={style.container} bounces={false}>
			<View style={style.titleWrap}>
				<Text style={style.title}>{todo.title}</Text>
				<TouchableOpacity
					testID={'EditPageButton'}
					onPress={editTodo}>
					<Feather name="edit" size={22} color={theme.DARK_GRAY} />
				</TouchableOpacity>
			</View>
			<View style={style.todoWrap}>
				<Markdown style={{ description: style.todoDescription }}>{todo.description}</Markdown>
			</View>

			<Text style={style.updateDate}>
				Created at: {formatDate(todo.created_at)}
			</Text>
			<Text style={style.updateDate}>
				Last Update: {formatDate(todo.updated_at)}
			</Text>
		</ScrollView>
	);
}

import React, { useEffect, useState, useContext } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import Animated, {SlideInDown, SlideOutDown} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';
import TodoView from 'components/TodoView';
import { todosSorter } from 'utils/helpers';
import { useSelector } from 'react-redux';
import { AppContext } from 'providers';
import getStyle from './style';

export default function Home() {
	const { theme } = useContext(AppContext);
	const navigation = useNavigation();
	const [style, setStyle] = useState(getStyle(theme));
	const sorter = useSelector(state => state?.global?.sorter || null);
	var todos = useSelector(state => state?.global?.todos || []);

	if(sorter){
		todos = todosSorter(todos, sorter.key, sorter.desc);
	}

	useEffect(() => {
		setStyle(getStyle(theme));
	}, [theme]);

	const renderTodoItem = ({ item, index }) => {
		return <TodoView key={index} todoData={{ item, index }} todos={todos} />;
	};

	const emptyTodosListMessage = () => {
		return (
			<View style={style.emptyWrap}>
				<FastImage
					source={require('assets/images/gif/emptyTodos.gif')}
					style={style.emptyImage}
				/>
				<Text style={style.emptyMessage}>{'Add your first Todo'}</Text>
			</View>
		);
	};

	return (
		<View style={style.container}>
			<FlatList
				data={todos}
				extraData={todos}
				renderItem={renderTodoItem}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={emptyTodosListMessage}
				keyExtractor={item => item.id.toString()}
				contentContainerStyle={style.todosListWrap}
				bounces={true}
			/>
			<Animated.View
				entering={SlideInDown.duration(600)}
				exiting={SlideOutDown.duration(300)}
			>
				<TouchableOpacity
					style={style.addButton}
					testID={'HomeAddNewTodo'}
					onPress={() => navigation.navigate('AddNew')}>
					<Feather name="file-plus" size={25} color={theme.UniWHITE} />
					<Text style={style.addButtonText}>{'Add New'}</Text>
				</TouchableOpacity>
			</Animated.View>
		</View>
	);
}

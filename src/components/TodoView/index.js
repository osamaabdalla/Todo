import React, { useContext, useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { formatDate, deleteTodo } from 'utils/helpers';
import { todosUpdate } from 'store/reducers/global';
import { useDispatch } from 'react-redux';
import { AppContext } from 'providers';
import getStyle from './style';

export default function TodoView({ todoData, todos }) {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { theme } = useContext(AppContext);
    const [style, setStyle] = useState(getStyle(theme));
    const { item = {}, index = null } = todoData;

    useEffect(() => {
        setStyle(getStyle(theme));
    }, [theme]);

    const viewTodo = () => {
        navigation.navigate('View', { todo: item, index });
    };

    const deleteItem = () => {
        dispatch(todosUpdate(deleteTodo(todos, item)))
    };

    return (
        <TouchableOpacity
            style={style.todoWrap}
            onPress={viewTodo}>
            <View style={style.todoInfo}>
                <Text style={style.todoTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={style.todoDate}>{formatDate(item.created_at)}</Text>
            </View>
            <View style={style.actionsWrap}>
                <TouchableOpacity
                    testID={'ViewTodoButton'}
                    style={style.viewButton}
                    onPress={viewTodo}>
                    <AntDesign name="eyeo" size={22} color={theme.DARK_GRAY} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.deleteButton}
                    testID={'TodoDeleteButton'}
                    onPress={deleteItem}>
                    <AntDesign name="delete" size={20} color={theme.RED} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

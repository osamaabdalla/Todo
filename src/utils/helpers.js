import moment from 'moment';
import _ from 'lodash';

const formatDate = date => {
	if (!date) return;
	const formatedDate = moment.unix(date).format('DD, MMM YYYY, h:mm A');
	return formatedDate;
};

const updateTodo = (todos, values, index) => {
	const updateTime = moment().unix();
	var newTodos = Array.from(todos);
	newTodos[index] = {
		...newTodos[index],
		...values,
		updated_at: updateTime,
	};
	return newTodos;
};

const deleteTodo = (todos, values) => {
	var newTodos = Array.from(todos);
	const todoWithIdIndex = newTodos.findIndex(todo => todo.id === values.id);
	if (todoWithIdIndex > -1) {
		newTodos.splice(todoWithIdIndex, 1);
	}
	return newTodos;
};

const todosSorter = (todos, sorter, desc) => {
	var newTodos = Array.from(todos);
	newTodos = _.sortBy(newTodos, sorter);
	if (desc) {
		newTodos.reverse();
	}
	return newTodos;
};

const addNewTodo = (todos, values) => {
	const updateTime = moment().unix();
	var todosList = Array.from(todos);
	const newTodo = {
		id: todosList.length + 1,
		...values,
		created_at: updateTime,
		updated_at: updateTime,
		user: null,
	};
	todosList.unshift(newTodo);
	return todosList;
};

export {
	formatDate,
	deleteTodo,
	todosSorter,
	updateTodo,
	addNewTodo,
};

import { cleanup } from '@testing-library/react-native';
import {toggleMode} from 'store/reducers/global';
import {store} from 'store';
import moment from 'moment';
afterEach(cleanup);

import {
  formatDate,
  updateTodo,
  addNewTodo,
} from 'utils/helpers';

jest.useFakeTimers();
jest.mock('react-native-keyboard-aware-scroll-view', () => {
  return {
    KeyboardAwareScrollView: jest.fn().mockImplementation(({children}) => children)
  }
});
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((_config, reducers) => reducers),
  };
});

test('#1 => if it format dates', async () => {
  const tempDate = moment.unix();
  const expectedDate = moment.unix(tempDate).format('DD/MM/YYYY, h:mm a');
  const actualDate = formatDate(tempDate);
  const nullDate = formatDate(null);

  expect(actualDate).toEqual(expectedDate);
  expect(nullDate).toBeUndefined();
});

test('#2 => if it able to update todo', async () => {
  const tempTodos = [{title: 'Hi', description: 'There'}];
  const todoChanges = {title: 'New', description: 'Description'};
  const todoIndex = 0;
  const returnedTodos = updateTodo(tempTodos, todoChanges, todoIndex);
  const {title, description} = returnedTodos[todoIndex];
  expect(title).toBe('New');
  expect(description).toBe('Description');
});

test('#3 => if it able to add new todo', async () => {
  const oldTodosList = [{title: 'Hi', description: 'There'}];
  const newTodo = {title: 'New', description: 'Description'};
  const returnedTodos = addNewTodo(oldTodosList, newTodo);
  const newTodosListlength = returnedTodos.length;
  expect(newTodosListlength).toEqual(2);
});

it('#4 => Should toggle and store darkMode', async () => {
  store.dispatch(toggleMode(true));
  const {darkMode} = store.getState().global;
  expect(darkMode).toBe(true);
});

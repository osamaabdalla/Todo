import React, { useContext } from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { AppContext } from 'providers';
import Settings from 'screens/Settings';
import Update from 'screens/Update';
import Sorter from 'screens/Sorter';
import AddNew from 'screens/AddNew';
import View from 'screens/View';
import Home from 'screens/Home';

const Stack = createStackNavigator();

export const MainStack = () => {
	const { theme } = useContext(AppContext);
	const navigation = useNavigation();
	const main = {
		headerLeft: () => (
			<TouchableOpacity
				testID={'SortTodos'}
				onPress={() => navigation.navigate('Sorter')}
				style={{ marginLeft: 25 }}>
				<Octicons name="sort-desc" size={25} color={theme.DARK_GRAY} />
			</TouchableOpacity>
		),
		headerRight: () => (
			<TouchableOpacity
				testID={'ViewSettingsPage'}
				onPress={() => navigation.navigate('Settings')}
				style={{ marginRight: 25 }}>
				<Feather name="settings" size={22} color={theme.DARK_GRAY} />
			</TouchableOpacity>
		),
		headerStyle: { backgroundColor: theme.HEADER_BACKGROUND },
		headerTitleStyle: { color: theme.BLACK },
	};

	const options = {
		headerShown: true,
		headerStyle: { backgroundColor: theme.HEADER_BACKGROUND },
		headerTitleStyle: { color: theme.BLACK },
	};

	return (
		<Stack.Navigator>
			<Stack.Screen name="Todos" component={Home} options={main} />
			<Stack.Screen name="View" component={View} options={options} />
			<Stack.Screen name="Update" component={Update} options={options} />
			<Stack.Screen name="AddNew" component={AddNew} options={options} />
			<Stack.Screen name="Settings" component={Settings} options={options} />
			<Stack.Screen name="Sorter" component={Sorter} options={options} />
		</Stack.Navigator>
	);
};

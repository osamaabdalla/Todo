import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';
import SplashScreen from 'screens/Splash';
import { name as appName } from './app.json';
import App from 'screens/App';

const Root = () => (
	<Provider store={store}>
		<PersistGate loading={<SplashScreen />} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);

AppRegistry.registerComponent(appName, () => Root);

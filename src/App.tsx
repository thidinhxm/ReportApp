import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import './translations';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store';
import Login from './screens/Login';
import i18n from 'i18next';
import ApplicationNavigator from './navigators/Application';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
import Masuk from './screens/Masuk';
import DaftarAkun from './screens/DaftarAkun';
import ResetPassword from './screens/ResetPassword';
import Beranda from './screens/Beranda';

const Stack = createNativeStackNavigator();

const customTextProps = {
  style: {
    fontFamily: 'Inter-Regular',
  },
};

const customTextInputProps = {
  style: {
    fontFamily: 'Inter-Regular',
  },
};

const App = () => {
  React.useEffect(() => {
    setCustomText(customTextProps);
    setCustomTextInput(customTextInputProps);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Masuk" component={Masuk} />
        <Stack.Screen name="DaftarAkun" component={DaftarAkun} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Beranda" component={Beranda} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

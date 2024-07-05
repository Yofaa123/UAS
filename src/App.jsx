import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Masuk from './screens/Masuk';
import DaftarAkun from './screens/DaftarAkun';
import ResetPassword from './screens/ResetPassword';
import Beranda from './screens/Beranda';
import Favorit from './screens/Favorit';
import Pesanan from './screens/Pesanan';
import Pengaturan from './screens/Pengaturan';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

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

const MenuTab = () => {
  return (
    <Tabs.Navigator screenOptions={{tabBarActiveTintColor: 'blue'}}>
      <Tabs.Screen
        name="Beranda"
        component={Beranda}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorit"
        component={Favorit}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Pesanan"
        component={Pesanan}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons
              name="clipboard-list"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Pengaturan"
        component={Pengaturan}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const App = () => {
  React.useEffect(() => {
    setCustomText(customTextProps);
    setCustomTextInput(customTextInputProps);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Masuk">
        <Stack.Screen
          name="Masuk"
          component={Masuk}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DaftarAkun"
          component={DaftarAkun}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenuTab"
          component={MenuTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

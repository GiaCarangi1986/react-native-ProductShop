import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Basket from './components/Basket'
import Home from './components/Home';
import Products from './components/Products';
import Caterogies from './components/Caterogies';
import { TITLE_FOR_SCREEN } from './const';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: TITLE_FOR_SCREEN.home.title }}
        />
        <Stack.Screen name="Basket" component={Basket} options={{ title: TITLE_FOR_SCREEN.basket.title }} />
        <Stack.Screen name="Products" component={Products} options={{ title: TITLE_FOR_SCREEN.products.title }} />
        <Stack.Screen name="Caterogies" component={Caterogies} options={{ title: TITLE_FOR_SCREEN.caterogies.title }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

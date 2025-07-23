import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import Ingredients from './src/screens/Ingredients';
import Recipes from './src/screens/Recipes';
import RecipeDetail from './src/screens/RecipeDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Ingredients" component={Ingredients} options={{headerShown:false}} />
        <Stack.Screen name="Recipes" component={Recipes} options={{headerShown:false}} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Students from './screens/Students';
import Companies from './screens/Companies';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();
 
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false }}>
        <Stack.Screen 
          name="Login"
          component={Login} 
        />
        <Stack.Screen 
          name="Home"
          component={Home}
        /> 
        <Stack.Screen 
          name="Students"
          component={Students}
        />
        <Stack.Screen 
          name="Companies"
          component={Companies}
        />
        <Stack.Screen 
          name="Profile"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
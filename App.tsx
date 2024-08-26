// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import GoogleSignIn from './app/Google/GoogleSignIn';
// import HomeScreen from './app/Screens/HomeScreen1';
// import SyncScreen from './app/Screens/Sync';
// import SettingsScreen from './app/Screens/Settings';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import TabNavigator from '@/components/TabNavigator';
// import { RootStackParamList } from './assets/types';

// const Stack = createStackNavigator<RootStackParamList>();

// interface Props {}

// const App: React.FC<Props> = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState<any | null>(null);

//   useEffect(() => {
//     const checkUser = async () => {
//       const userData = await AsyncStorage.getItem('user');
//       if (userData) {
//         setUser(JSON.parse(userData));
//         setIsLoggedIn(true);
//       }
//     };
//     checkUser();
//   }, []);

//   const handleSignIn = (userData: any) => {
//     setUser(userData);
//     setIsLoggedIn(true);
//     AsyncStorage.setItem('user', JSON.stringify(userData));
//   };

//   const handleSignOut = async () => {
//     setUser(null);
//     setIsLoggedIn(false);
//     await AsyncStorage.removeItem('user');
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen 
//          name="Login">
//           {(props) => <GoogleSignIn {...props} onSignIn={handleSignIn} />}
//         </Stack.Screen>
//         <Stack.Screen
//         name="HomeScreen"
//         component={TabNavigator}
//         options={({ route }) => ({
//           title: `Bine ai venit ${route.params?.user || 'User'}`,
//         })}
//         />
//         {/* <Stack.Screen name="Home" component={HomeScreen} initialParams={{ user }} /> */}
//         {/* <Stack.Screen name="Sync" component={SyncScreen} initialParams={{ user }} /> */}
//         {/* Uncomment the Settings screen if needed */}
//         {/* <Stack.Screen name="Settings">
//           {(props) => <SettingsScreen {...props} onSignOut={handleSignOut} />}
//         </Stack.Screen> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
// // import React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import LoginScreen from './app/Screens/LoginScreen';
// // import TabNavigator from '@/components/TabNavigator';
// // import { RootStackParamList } from './assets/types';
// // import GoogleSignIn from './app/Google/GoogleSignIn';


// // const Stack = createStackNavigator<RootStackParamList>();


// // const App: React.FC<Props> = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [user, setUser] = useState<any | null>(null);

// //   useEffect(() => {
// //     const checkUser = async () => {
// //       const userData = await AsyncStorage.getItem('user');
// //       if (userData) {
// //         setUser(JSON.parse(userData));
// //         setIsLoggedIn(true);
// //       }
// //     };
// //     checkUser();
// //   }, []);

// //   const handleSignIn = (userData: any) => {
// //     setUser(userData);
// //     setIsLoggedIn(true);
// //     AsyncStorage.setItem('user', JSON.stringify(userData));
// //   };

// // const App = () => (
// //   <NavigationContainer>
// //     <Stack.Navigator>
// //        <Stack.Screen name="GoogleSignIn">
// //           {(props) => <GoogleSignIn {...props} onSignIn={handleSignIn} />}
// //          </Stack.Screen>
// //       <Stack.Screen
// //         name="Home"
// //         component={TabNavigator}
// //         options={({ route }) => ({
// //           title: `Bine ai venit ${route.params?.user || 'User'}`,
// //         })}
// //       />
// //     </Stack.Navigator>
// //   </NavigationContainer>
// // );

// // export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/Screens/HomeScreen';
import SyncScreen from './app/Screens/SyncScreen';
import SettingsScreen from './app/Screens/SettingsScreen';
import LoginScreen from './app/Screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SyncScreen" component={SyncScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

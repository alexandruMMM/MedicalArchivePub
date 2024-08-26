import React from 'react';
import { View, StyleSheet, Platform, Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { makeRedirectUri } from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Client_ID from '../constants/const_google';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../assets/types';

type GoogleSignInNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

const LoginScreen: React.FC<{ navigation: GoogleSignInNavigationProp }> = ({ navigation }) => {
  const redirectUri = makeRedirectUri({
    native: Platform.OS === 'android'
      ? 'com.anonymous.armed.package:/Screens/HomeScreen'
      : 'com.anonymous.armed.package:/Screens/HomeScreen',
  });

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: Client_ID.ANDROID_CLIENT_ID,
    redirectUri,
  });

  React.useEffect(() => {
    console.log('Auth request created:', request);
    console.log('Auth response:', response);
    if (response?.type === 'success' && response.authentication?.accessToken) {
      fetchUserInfo(response.authentication?.accessToken);
    }
  }, [response]);

  const fetchUserInfo = async (token: string) => {
    try {
      const userResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = await userResponse.json();
      console.log('Fetched user:', user);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      navigation.navigate('HomeScreen', { user });
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  return (
    <View style={styles.centeredContainer}>
      <Button
        disabled={!request}
        title="Login with Google"
        onPress={() => promptAsync()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;


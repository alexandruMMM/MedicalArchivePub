import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppBar from '../../AppBar'; 

interface Props {
  route?: {
    params?: {
      user?: {
        name: string;
      };
    };
  };
}

const HomeScreen: React.FC<Props> = ({ route }) => {
  const user = route?.params?.user;
 console.log(user);
  return (
    <View style={styles.container}>
      <AppBar user={user?.name || 'User'} />
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bine ai venit {user?.name || 'User'}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

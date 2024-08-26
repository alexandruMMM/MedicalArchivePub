import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './assets/types';

type NavigationProp = StackNavigationProp<RootStackParamList>;

interface AppBarProps {
  user: any;
}

const AppBar: React.FC<AppBarProps> = ({ user }) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.appBar}>
      <Text style={styles.welcomeText}>Bine ai venit {user}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen', {user})} style={styles.leftButton}>
          <Text style={styles.buttonText}>🏠Acasa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SyncScreen')} style={styles.centerButton}>
          <Text style={styles.buttonText}>🔄Sincronizare</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')} style={styles.rightButton}>
          <Text style={styles.buttonText}>⚙️Setari</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: 'black',
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftButton: {
    alignItems: 'flex-start',
  },
  centerButton: {
    flex: 1,
    alignItems: 'center',
  },
  rightButton: {
    alignItems: 'flex-end',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AppBar;

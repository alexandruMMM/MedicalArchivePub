// import React from 'react';
// import { View, Text, Button, Alert } from 'react-native';

// interface Props {
//   onSignOut: () => void;
// }

// const SettingsScreen: React.FC<Props> = ({ onSignOut }) => {
//   const showAbout = () => {
//     Alert.alert('About', 'This is a Google Sheets integration app.');
//   };

//   return (
//     <View>
//       <Button title="Logout" onPress={onSignOut} />
//       <Button title="About" onPress={showAbout} />
//     </View>
//   );
// };

// export default SettingsScreen;
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AppBar from '../../AppBar'; 

interface SettingsScreenProps {
  route?: {
    params?: {
      user?: {
        name: string;
      };
    };
  };
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ route }) => {
  const user = route?.params?.user;
  return (
    <View style={styles.container}>
      <AppBar user={user?.name || 'User'} />
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bine ai venit {user?.name || 'User'}</Text>
        {/* <Button title="Sign Out" onPress={onSignOut} /> */}
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

export default SettingsScreen;

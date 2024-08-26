// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import axios from 'axios';

// interface SheetDataItem {
//   Name: string;
//   UOM: string;
//   // Definiți alte proprietăți aici în funcție de structura datelor din Google Sheets
// }

// const SyncScreen: React.FC = () => {
//   const [sheetData, setSheetData] = useState<SheetDataItem[]>([]);
//   const [selectedName, setSelectedName] = useState<string>('');
//   const [newName, setNewName] = useState<string>('');
//   const [uom, setUom] = useState<string>('');
//   const [value, setValue] = useState<string>('');
//   const [date, setDate] = useState<string>('');

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     try {
//       // Accesare Google Sheets API și obținerea datelor
//       const response = await axios.get<SheetDataItem[]>('<YOUR_GOOGLE_SHEET_API_URL>');
//       setSheetData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     if (selectedName) {
//       const item = sheetData.find(item => item.Name === selectedName);
//       if (item) {
//         setUom(item.UOM);
//       }
//     }
//   }, [selectedName, sheetData]);

//   const handleSync = async () => {
//     const name = newName || selectedName;
//     try {
//       // Adaugarea datelor noi în Google Sheets
//       await axios.post('<YOUR_GOOGLE_SHEET_API_URL>', {
//         Name: name,
//         Date: date,
//         UOM: uom,
//         Value: value,
//       });
//       loadData();
//     } catch (error) {
//       console.error('Error syncing data:', error);
//     }
//   };

//   return (
//     <View>
//       <Picker
//         selectedValue={selectedName}
//         onValueChange={(itemValue: string) => setSelectedName(itemValue)}
//       >
//         {sheetData.map(item => (
//           <Picker.Item key={item.Name} label={item.Name} value={item.Name} />
//         ))}
//       </Picker>
//       <TextInput
//         placeholder="New Name"
//         value={newName}
//         onChangeText={(text: string) => setNewName(text)}
//       />
//       <TextInput
//         placeholder="UOM"
//         value={uom}
//         onChangeText={(text: string) => setUom(text)}
//         editable={!selectedName}
//       />
//       <TextInput
//         placeholder="Value"
//         value={value}
//         onChangeText={(text: string) => setValue(text)}
//       />
//       <TextInput
//         placeholder="Date"
//         value={date}
//         onChangeText={(text: string) => setDate(text)}
//       />
//       <Button title="Sync" onPress={handleSync} />
//     </View>
//   );
// };

// export default SyncScreen;
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AppBar from '../../AppBar'; 

interface SyncScreenProps {
    route?: {
    params?: {
      user?: {
        name: string;
      };
    };
  };
}

const SyncScreen: React.FC<SyncScreenProps> = ({ route }) => {
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

export default SyncScreen;

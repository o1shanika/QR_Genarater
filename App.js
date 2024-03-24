
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import QRCode from 'react-native-qrcode-svg';

function App() {

  const [text, setText] = useState('');
  const [qrCodeValue, setQRCodeValue] = useState('');

  const generateQRCode = () => {
    setQRCodeValue(text);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Header */}
      <View style={{ backgroundColor: '#00008b', padding: 10, flexDirection: 'row',height:60}}>
        <Icon name="arrow-left" size={18} color="#ffff"  />
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20,marginLeft:60,marginTop:10}}>Generate QR codes</Text>
        
      </View>

      {/* Content */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginBottom:200 }}>
        <TextInput
          style={{ height: 40, borderColor: '#00008b', borderWidth: 2, margin: 10, padding: 5, width: 230, borderRadius: 10 }}
          onChangeText={setText}
          placeholder="Enter text for QR Code"
        />

        <TouchableOpacity onPress={generateQRCode} style={{ backgroundColor: '#00008b', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Generate</Text>
        </TouchableOpacity>

        {qrCodeValue !== '' && (
          <View style={{ marginTop: 40 }}>
            <QRCode value={qrCodeValue} size={230} color='#00008b' />
          </View>
        )}
      </View>
    </View>
  );
}

export default App;





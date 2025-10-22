
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import api from './src/services/api';
import { useEffect, useState } from 'react';
import { styles } from './src/styles/app.module';


export default function App() {

  const [cep, setCep] = useState('');

  useEffect(
    ()=>{

    }
  )

  return (

    <View style={styles.container}>
      
      <View style={styles.viewTitle}>

        <Text style={styles.title}>CEP</Text>
        <Image 
          source={require('./assets/terra.gif')}
          style={styles.logoTitle}
        />
        <Text style={styles.title}>ꟼƎƆ</Text>

      </View>

      <View style={styles.viewInput}>
        
        <Text style={styles.titleInput}>BUSQUE O CEP DESEJADO</Text>

        <TextInput 
          placeholder='Aqui você digita o cep...'
          style={styles.input}
          value={cep}
          onChangeText={(e)=>setCep(e)}
          keyboardType='numeric'
        />

      </View>

      <View style={styles.viewButton}>

        <TouchableOpacity style={styles.buttons}>

          <Text style={styles.textButton}>Buscar</Text>

        </TouchableOpacity>

      </View>

    
    </View>
  );
}


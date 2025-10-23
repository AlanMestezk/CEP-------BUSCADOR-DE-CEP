
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal } from 'react-native';
import api from './src/services/api';
import { useEffect, useState } from 'react';
import { styles } from './src/styles/app.module';
import { Address } from './src/modal';


export default function App() {

  const [cep, setCep] = useState('');
  const [showInfos, setShowInfos] = useState<boolean>(false);


  const showAddress= async ()=>{


    if(cep === ''){

      alert('Digite um cep valido')
      setCep('')
      return

    }

    try {

        const response = await api.get(`/${cep}/json`);
        
        console.log(response.data);
        
        setShowInfos(!showInfos)

        setCep('')
      
    } catch (error) {

      console.log(`Erro ao buscar o cep: ${error}`);

    }


  }

  useEffect(
    ()=>{

    }
  )

  return (

    <View style={styles.container}>
      
      <View style={styles.viewTitle}>

        <Text style={styles.title}>CEP</Text>
        <Image 
          source={require('./assets/iconCEP.png')}
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

        <TouchableOpacity style={styles.buttons} onPress={showAddress}>

          <Text style={styles.textButton}>Buscar</Text>

        </TouchableOpacity>

      </View>

      <Modal
        animationType='slide'
        transparent = {true}
        visible={showInfos}
        
      >
        
        <View style={styles.viewModal}>

          { 
            <Address
              buttonClose={showAddress}
            />
          }
          

        </View>

      </Modal>

    
    </View>
  );
}


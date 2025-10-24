
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal, Keyboard } from 'react-native';
import api from './src/services/api';
import { useEffect, useState } from 'react';
import { styles } from './src/styles/app.module';
import { Address } from './src/modal';

interface CepProps{
  cep   : string
  logradouro   : string
  bairro: string
  localidade: string
  estado: string
}

export default function App() {

  const [cep, setCep] = useState('');
  const [showInfos, setShowInfos] = useState<boolean>(false);
  const [cepUser, setCepUser] = useState<CepProps | null>(null);


  const showAddress= async ()=>{


    if(cep === ''){

      alert('Digite um cep valido')
      setCep('')
      return

    }

    try {

        const response = await api.get(`/${cep}/json`);
        setShowInfos(!showInfos);

        setCepUser(response.data);//todo o objeto com as infos do cep

        console.log(response.data);

        Keyboard.dismiss(); //teclado fechado automaticamente

        
      
      
    } catch (error) {

      console.log(`Erro ao buscar o cep: ${error}`);

    }


  }

  const handleCloseModal= ()=>{

    setShowInfos(!showInfos);
    setCep('')
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

          { cepUser &&
            <Address
              buttonClose={handleCloseModal}
              bairro={cepUser.bairro}
              cep={cepUser.cep}
              cidade={cepUser.localidade}
              estado={cepUser.estado}
              rua={cepUser.logradouro}
            />
          }

        </View>

      </Modal>

    
    </View>
  );
}


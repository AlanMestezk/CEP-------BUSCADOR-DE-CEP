import { useEffect, useState } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "../styles/modal.module";

interface AddressProps{

    cep        : string
    rua        : string
    bairro     : string
    cidade     : string
    estado     : string
    buttonClose: ()=>void

}

export const Address = ({buttonClose,cep, rua, bairro, cidade, estado }:AddressProps)=>{

    const [showEarth, setShowEarth] = useState<boolean>(true);

    useEffect(
        ()=>{

            const timer = setTimeout(
                ()=>{
                   
                    setShowEarth(false)

                }, 5000
            )

            return ()=>clearTimeout(timer)

        }
    )

    return(

        <View style={styles.container}>
            
            <View>
                
                {
                    showEarth ?
                    (

                    <Image 
                        source={require('../../assets/terra.gif')}
                        style={styles.image}
                    />

                    ):(
                        <View style={styles.viewAdress}>

                            <View style={styles.viewImageTitle}>

                                <Text style={styles.viewTextAdress}>CEP Localizado</Text>

                                <Image 
                                    source={require('../../assets/pin.png')} 
                                    style={styles.imageAdress}
                                />


                            </View>
                            
                            <Text style={styles.textAdress} >CEP: {cep}</Text>
                            <Text style={styles.textAdress} >Rua: {rua}</Text>
                            <Text style={styles.textAdress} >Bairro: {bairro}</Text>
                            <Text style={styles.textAdress} >Cidade: {cidade}</Text>
                            <Text style={styles.textAdress} >Estado: {estado}</Text>
                            
                            
                        </View>
                    )
                }

            </View>

            <View>

                <TouchableOpacity style={styles.button} onPress={buttonClose}>

                    <Text style={styles.textButton}>Fechar</Text>

                </TouchableOpacity>

            </View>

            

        </View>

    )
} 
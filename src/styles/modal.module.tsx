import { StyleSheet } from "react-native"


export const styles = StyleSheet.create(
    {
        container:{
           backgroundColor: 'white',
           borderWidth: 5,
           borderColor: 'darkturquoise',
           marginTop: 150,
           width: '90%',
           height: 400,
           borderRadius: 30,
           paddingTop: 15,
           justifyContent: 'center',
           alignItems: 'center'
        },
        image:{
           width: 250,
           height: 250
        },
        button:{
            height: 50,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            borderRadius: 50,
            backgroundColor: 'black',
            marginTop: 20
        },
        textButton:{
            color: 'aliceblue',
            fontWeight: 'bold',
            fontSize: 16
        },
        viewAdress:{
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
            flexWrap: 'wrap',

        },
        textAdress:{
            fontSize: 20,
            fontFamily: 'Roboto', // Substitua 'Roboto' pela fonte desejada
            color: 'black',
            marginBottom: 5,
            fontWeight: 'bold'
        },
        viewImageTitle:{
            marginBottom: 10,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        },
        imageAdress:{
            width: 40,
            height: 40
        },
        viewTextAdress:{
            textAlign: 'center',
            fontSize: 35,
            fontFamily: 'Roboto',
        }
    }
)
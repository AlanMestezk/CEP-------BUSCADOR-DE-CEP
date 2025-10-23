import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTitle:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  title:{
    fontSize: 40,
    fontWeight: 'light'
  },
  logoTitle:{
    width: 90,
    height: 90,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  viewInput:{
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleInput:{
    fontSize: 18,
    fontWeight: 'light'
  },
  input:{
    marginTop: 8,
    width: 250,
    backgroundColor: '#f4f0f0',
    borderWidth: 3,
    borderColor: 'darkturquoise',
    textAlign: 'center',
    borderRadius: 20,
    fontSize: 15
  }, 
  viewButton:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-around',
    width: '60%'
  },
  buttons:{
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 50,
    backgroundColor: 'black',
    
  },
  textButton:{
    color: 'aliceblue',
    fontWeight: 'bold',
    fontSize: 16
  },
  modal:{
    borderWidth: 2,
    borderColor: 'darkturquoise',
    width: '80%',
    height: '30%',
    justifyContent: 'center',
  },
  viewModal:{
    justifyContent: 'center',
    alignItems: 'center'
  }
});
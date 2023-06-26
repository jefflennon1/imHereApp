import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName: {
      color: '#FDFCFE',
      fontWeight: 'bold',
      fontSize: 24,
      marginTop:48
    }, 
    eventDate:{
      fontSize:16, 
      color: '#6B6B6B'
    },
    input:{
      backgroundColor: '#1F1E25',
      height: 56,
      borderRadius: 5,
      color: '#FDFCFB',
      padding: 16,
      fontSize: 16,
      flex: 1,
      marginRight: 15
    },
    buttonText:{
      fontSize: 24,
      color: '#FFFF'
    },
    button:{
      width: 56,
      height: 56,
      borderRadius : 5,
      backgroundColor: '#31CF67',
      alignItems:'center',
      justifyContent: 'center'
    },
    form:{
      flex:1,
      flexDirection:'row',
      width: '100%',
      marginTop: 20,
      marginBottom:20
    }

  })
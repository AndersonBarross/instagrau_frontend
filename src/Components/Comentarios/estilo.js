import {Dimensions, StyleSheet} from 'react-native';

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    naMesmaLinha:{
        flexDirection:"row",
        alignItems:"center"
    },
   imgSend: {
       width:30,
       height:30,
       marginRight:5
   } 
})

export default estilo;
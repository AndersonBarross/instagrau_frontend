import React, { Fragment, useState } from 'react';
import {
    FlatList,
   Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import estilo from './estilo';



const Comentarios = ( {comentarios} ) => {
    const [estComentarios, setComentarios] = useState(comentarios)
    
    
    const adicionarComentario = () => {
        //console.warn(conteudoDoCampoInput);
        campoInput.clear( );
        const novoComentario = {
             date: Date.now(),
             text: conteudoDoCampoInput,
             userName: "Anderson"
        }

        setComentarios([ ...estComentarios, novoComentario]);
    }

    let conteudoDoCampoInput = "";
    let campoInput;
    return(
        <>
        <FlatList
        data={estComentarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
        <View style={estilo.naMesmaLinha}>
            <Text>{item.userName}</Text>
            <Text>  {item.text}</Text>
        </View>
        }
        
        />
        <View style={estilo.naMesmaLinha}>
        <TextInput
        ref={textInput => campoInput = textInput}
        onChangeText={texto => conteudoDoCampoInput = texto}
        placeholder={"Deixe seu comentário"}
        style={{flex:1}} //essa linha significa que tentaea pegar o maximo de espaco possivel
        />
        <TouchableOpacity onPress={adicionarComentario}>
        <Image source={require("../../../res/img/send.png")}
        style={estilo.imgSend} />
        </TouchableOpacity>
        </View>
        </>
    );

}

export default Comentarios;
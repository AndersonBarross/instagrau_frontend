/* eslint-disable prettier/prettier */
import React, {Fragment, useEffect, useState} from 'react';
import {ScrollView, FlatList} from 'react-native';
import lerFotos from './src/api/feed';
import {Cabecalho} from './src/Components/Cabecalho';
import { Comentarios } from './src/Components/Comentarios';
import {Foto} from './src/Components/Foto';

const App = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho
              nomeUsuario={item.userName}
              urlImage={item.userURL} />
            <Foto
              urlFoto={item.url}
              descricao={item.description}
              qntLikes={item.likes}
            />
            <Comentarios comentarios={item.comentarios} />
          </Fragment>}
      />
    </ScrollView>
  );
};
export default App;

/*
const App = () => {
  return (
    <ScrollView>
      {informacoes.map(foto => (
        <Fragment>
          <Text>{foto.usuario}</Text>
          <Image source={require('./res/img/alura.jpg')} style={estilo.Image} />
        </Fragment>
      ))}
    </ScrollView>
  );
};
*/

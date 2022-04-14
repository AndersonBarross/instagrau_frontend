import React, { Fragment, useState } from 'react';
import {
   Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {imgLike, curtirFoto} from '../../api/curtidas';
import estilo from './estilo';

const fotosRandom = [
    require("../../api/img/foto_1.jpg"),
    require("../../api/img/foto_2.jpg"),
    require("../../api/img/foto_3.jpg"),
    require("../../api/img/foto_4.jpg"),
];
const Foto = ({ urlFoto, descricao, qntLikes }) => {
    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLikes] = useState(qntLikes);

const trocaImg = fotosRandom[
    Math.floor(Math.random() * fotosRandom.length)
]

    const clicouCurtir = () => {
        const [novoEstCurtiu, qnt] =curtirFoto(curtiu, likes)
        setLikes(qnt);
        setCurtiu(novoEstCurtiu);
    }
    return (
        <Fragment>

            <Image
                //source={{ uri: urlFoto }} substitui para trocar as imagens
                style={estilo.imagem}
                source={trocaImg}  //{{ uri: urlFoto }} substitui para trocar as imagens
                style={estilo.imagem}
            />
            <Text>{descricao}</Text>
            <View style={estilo.viewLike}>
                <TouchableOpacity onPress={clicouCurtir}>
                    <Image
                        source={imgLike(curtiu)}
                        style={estilo.like}
                    />
                </TouchableOpacity>
                <Text>curtidas {likes}</Text>
            </View>
        </Fragment>
    );
};


export default Foto;


const lerFotos = async callback => {
  const fotosHTTP = await fetch('http://10.0.2.2:3030/feed');
  // eslint-disable-next-line prettier/prettier
  const fotosJson = await fotosHTTP.json();
  callback(fotosJson); // conseguimos colocar no estado chamado setFotos
};

export default lerFotos;

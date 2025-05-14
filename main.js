//En js tenemos las funciones de tipo flecha//
//Utilizaremos fetch es un metodo para consumir API//

//funcion flecha//
const consumirApi=()=> {
fetch("https://jsonplaceholder.typicode.com/users") 
//convertimos la respuesta a tipo JSON//
.then ((responde) =>responde.json())
// los datos los vamos a mandar a la consola//
.then((laDataDeJsonPlaceHolder) =>console.log (laDataDeJsonPlaceHolder))
//Descubrir que hacer en caso de que no me responda//
.catch ((error)=> console.log(error));
};

consumirApi();
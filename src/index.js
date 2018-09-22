import React from 'react';              //Importa react, permite crear interfaces
import ReactDOM from 'react-dom';       //Importa reac enfocado al navegador, web

import './index.css';                   //Importa los estilos en la misma carpeta
import App from './App';                //Importa el app a ejecutar, que es js
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));//Ayuda a React a renderizar la interfaz en pantalla div root
registerServiceWorker();                //Empezamos a utilizar

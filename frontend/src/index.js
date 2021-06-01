import React, {useEffect}from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
/*import './index.css';*/
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/footer.css';


import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';



ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);




window.onscroll = function(){
  var top =	 window.pageYOffset || document.documentElement.scrollTop;
  if (top > 50) {
    document.getElementById('mynav').classList.remove("sticky-header");
    document.getElementById('mynav').classList.add("sticky-headerscroll");

    //document.getElementById('margen').classList.remove("d-none");

    //document.getElementById('mynav').style.background = "blue";
  } else {
    document.getElementById('mynav').classList.add("sticky-header");
    document.getElementById('mynav').classList.remove("sticky-headerscroll");

    //document.getElementById('margen').classList.add("d-none");

    //document.getElementById('mynav').style.background = "yellow";
  }
  };



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

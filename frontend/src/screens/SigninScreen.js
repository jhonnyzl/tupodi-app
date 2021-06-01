import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

/*Estilos*/
import '../fondo-start.css';
import '../css/SigninScreen.css';

export default function SigninScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (

<section className="py-5">
  <div class="star-bg">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
  </div>

  <div className="container px-5 padding6">
      <div className="rounded-3 py-5 px-4 px-md-5 mb-5">
          <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
              <h1 className="fw-bolder text-light">Inicia Sesión!</h1>
              <p className="lead fw-normal text-light mb-0">Opten un trato VIP iniciando con tu cuenta</p>
          </div>
          <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <form className="form text-light" onSubmit={submitHandler}>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                  <div className="form-floating mb-3">
                    <label htmlFor="email">Direccion de Correo</label>
                    <input 
                      className="form-control" 
                      type="email"
                      id="email"
                      placeholder="Ingresa el correo"
                      required
                      onChange={(e) => setEmail(e.target.value)}>  
                    </input>
                  </div>
                  <div className="form-floating mb-3">
                      <label for="inputEmail">Contraseña</label>
                      <input
                        className="form-control"
                        type="password"
                        id="password"
                        placeholder="Contraseña..."
                        required
                        onChange={(e) => setPassword(e.target.value)}>
                      </input>
                  </div>
                  <div className="form-floating mb-3">
                    <button className="form-control btn btn-primary" type="submit">
                      Iniciar sesión
                    </button>
                  </div>
                </form>
                <div className="form-control text-center">
                  ¿Nuevo cliente? <Link to={`/register?redirect=${redirect}`}>Crea tu cuenta</Link>
                </div>
              </div>
          </div>
      </div>


  </div>
  
  {/*

  <div className="lgformjc">
      <form className="form" onSubmit={submitHandler}>
        <div>
          <center>
          <h1>Iniciar sesión</h1>
          <h2>Hola de nuevo</h2>
          </center>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa el correo"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Contraseña..."
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary signinvl" type="submit">
          Iniciar sesión
          </button>
        </div>
        <div>
          <label />
          <div>
          ¿Nuevo cliente? <Link to={`/register?redirect=${redirect}`}>Crea tu cuenta</Link>
          </div>
        </div>
      </form>
    </div>
    */}
</section>



  );
}




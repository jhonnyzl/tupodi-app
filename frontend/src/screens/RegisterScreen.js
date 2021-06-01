import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import '../css/RegisterScreen.css';
import '../fondo-start.css';

export default function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('La contraseña y la contraseña de confirmación no coinciden');
    } else {
      dispatch(register(name, email, password));
    }
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
              <h1 className="fw-bolder text-light">Crear una cuenta</h1>
              <p className="lead fw-normal text-light mb-0">Opten un trato VIP iniciando con tu cuenta</p>
          </div>
          <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <form className="form text-light" onSubmit={submitHandler}>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}

                <div div className="form-floating mb-3">
                  <label htmlFor="name">Nombre</label>
                    <input
                    className="form-control" 
                    type="text"
                    id="name"
                    placeholder="Ingresa el nombre"
                    required
                    onChange={(e) => setName(e.target.value)}>
                    </input>
                  </div>
                  <div className="form-floating mb-3">
                    <label htmlFor="email">Dirección de Correo</label>
                    <input
                    className="form-control" 
                    type="email"
                    id="email"
                    placeholder="Ingresa el correo"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                  <div className="form-floating mb-3">
                  <label htmlFor="password">Contraseña</label>
                    <input
                    className="form-control" 
                    type="password"
                    id="password"
                    placeholder="Contraseña..."
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                  <div className="form-floating mb-3">
                  <label htmlFor="confirmPassword">Confirmar contraseña</label>
                    <input
                    className="form-control" 
                    type="password"
                    id="confirmPassword"
                    placeholder="Repetir contraseña"
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                  </div>
                  <div className="form-floating mb-3">
                    <button className="form-control btn btn-primary" type="submit">
                      Registrar
                    </button>
                  </div>
                </form>
                <div className="form-control text-center">
                ¿Ya posees una cuenta?{' '} <Link to={`/signin?redirect=${redirect}`}>Inicia sesión</Link>
                </div>
              </div>
          </div>
      </div>


  </div>
  
</section>
  );
}
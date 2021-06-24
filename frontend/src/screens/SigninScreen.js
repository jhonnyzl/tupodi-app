import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';



/*Estilos*/


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



    





<div>




<div className="breadcrumb_section bg_gray page-title-mini">
    <div className="container">
        <div className="row align-items-center">
        	<div className="col-md-6">
                <div className="page-title">
            		<h1></h1>
                </div>
            </div>
            <div className="col-md-6">
                <ol className="breadcrumb justify-content-md-end">
                    <li className="breadcrumb-item"><a href="#"></a></li>
                    <li className="breadcrumb-item"><a href="#"></a></li>
                    <li className="breadcrumb-item active"></li>
                </ol>
            </div>
        </div>
    </div>
</div>




<div className="main_content">


<div className="login_register_wrap section">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-6 col-md-10">
                <div className="login_wrap">
            		<div className="padding_eight_all bg-white">
                        <div className="heading_s1">
                            <h3>Inicia Sesión</h3>
                            <p className="lead fw-normal mb-0">Opten un trato VIP iniciando con tu cuenta</p>
                        </div>
                        <form  onSubmit={submitHandler}>
                          {loading && <LoadingBox></LoadingBox>}
                          {error && <MessageBox variant="danger">{error}</MessageBox>}
                            <div className="form-group">
                                <input className="form-control" 
                                name="email"
                                type="email"
                                id="email"
                                placeholder="Ingresa el correo"
                                required
                                onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control"
                                name="password"
                                type="password"
                                id="password"
                                placeholder="Contraseña..."
                                required
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="login_footer form-group">
                                <div className="chek-form">
                                    <div className="custome-checkbox">
                                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value=""/>
                                        <label className="form-check-label" for="exampleCheckbox1"><span>Recuérdame</span></label>
                                    </div>
                                </div>
                                <a href="#">¿Olvidaste tu contraseña?</a>
                            </div>
                            <div className="form-group">
                                <button type="submit" class="btn btn-fill-out btn-block" name="login">Iniciar sesión</button>
                            </div>
                        </form>
                        <div className="different_login">
                            <span> ó</span>
                        </div>
                        <ul className="btn-login list_none text-center">
                            <li><a href="#" class="btn btn-facebook"><i class="ion-social-facebook"></i>Facebook</a></li>
                            <li><a href="#" class="btn btn-google"><i class="ion-social-googleplus"></i>Google</a></li>
                        </ul>
                        <div className="form-note text-center">¿Nuevo cliente? <Link to={`/register?redirect=${redirect}`}>Crea tu cuenta</Link></div>
                    </div>
                </div>
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
</div>






  );
}




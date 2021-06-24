import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';






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
                            <h3>Crear una cuenta</h3>
                            <p className="lead fw-normal mb-0">Opten un trato VIP iniciando con tu cuenta</p>
                        </div>
                        <form  onSubmit={submitHandler}>
                          {loading && <LoadingBox></LoadingBox>}
                          {error && <MessageBox variant="danger">{error}</MessageBox>}
                            <div className="form-group">
                                <input className="form-control" 
                                type="text"
                                id="name"
                                placeholder="Ingresa el Nombre"
                                required
                                onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" 
                                type="email"
                                id="email"
                                placeholder="Ingresa el Correo"
                                required
                                onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" 
                                type="password"
                                id="password"
                                placeholder="Contraseña..."
                                required
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" 
                                type="password"
                                id="confirmPassword"
                                placeholder="Repetir contraseña"
                                required
                                onChange={(e) => setConfirmPassword(e.target.value)}/>
                            </div>
                            <div className="login_footer form-group">
                                <div className="chek-form">
                                    <div className="custome-checkbox">
                                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" required/>
                                        <label className="form-check-label" for="exampleCheckbox1"><span>Estoy de acuerdo con los términos y políticas.</span></label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" class="btn btn-fill-out btn-block" name="login">Registrar</button>
                            </div>
                        </form>
                        <div className="different_login">
                            <span> ó</span>
                        </div>
                        <ul className="btn-login list_none text-center">
                            <li><a href="#" class="btn btn-facebook"><i class="ion-social-facebook"></i>Facebook</a></li>
                            <li><a href="#" class="btn btn-google"><i class="ion-social-googleplus"></i>Google</a></li>
                        </ul>
                         
                        <div className="form-note text-center">¿Ya posees una cuenta?{' '} <Link to={`/signin?redirect=${redirect}`}>Inicia sesión</Link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  
</div>
  );
}
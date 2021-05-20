import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!userInfo) {
    props.history.push('/signin');
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push('/payment');
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Dirección de Envío</h1>
        </div>
        <div>
          <label htmlFor="fullName">Nombre completo</label>
          <input
            type="text"
            id="fullName"
            placeholder="Ingresa el nombre completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            id="address"
            placeholder="Ingresa la dirección"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">Ciudad</label>
          <input
            type="text"
            id="city"
            placeholder="Ingresa la ciudad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">Código postal</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Ingresa el código postal"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="country">País</label>
          <input
            type="text"
            id="country"
            placeholder="Ingresa el País"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}
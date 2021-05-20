import Axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
import { useDispatch, useSelector } from 'react-redux';

const PaypalButton = ({order}) => {
    const { data } = await Axios.get('/api/config/paypal');
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;
    const paypalConf = {
        env: 'sandbox',
        currency: 'USD',
        client:{
            sandbox:data,
            production: 'id'
        },
        style:{
            label:'pay',
            size:'medium',
            shape:'rect',
            color:'gold'
        }
    };
    const PaypalButton = paypal.Button.driver('react', {React,ReactDOM})

    const payment = (data, actions) => {
        const payment = {
            transactions: [
                {
                    amount:{
                        total:order.total,
                        currency: paypalConf.currency,
                    },
                    description: 'Compra en Test App',
                    custom: order.customer || '',
                    item_list:{

                    }
                }
            ]
        }
    };
};
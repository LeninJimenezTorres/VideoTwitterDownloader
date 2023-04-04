import React from 'react'
//import ReactDOM from "react-dom"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
//import { loadScript } from "@paypal/paypal-js";

import '../styles/Donations.css'

//const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

//import PaypalButton from '../components/atoms/PaypalButton';

function Donations() {
    const clientID = 'AUrMGC3ZJK2J_B7LvinmGFxDYvi24FfU9tgsLhXDI8jX3k7AGDIG9kRcb5OPM8V6iG8CUqKoY8E8Ec63';
    const accessToken = 'access_token$sandbox$x8v6pctcjc4y63r7$2e86a4374e01864e5098aaf033c9e57c';
    const sandboxAccount = 'sb-bmlnu25130161@business.example.com';
    
    const initialOptions = {
        "client-id": clientID,
        currency: "USD",
        intent: "capture",
        "data-client-token": accessToken,
    };
    const paypalContainerStyle ={
        width: 55,
    }
    const paypalStyle ={
        layout: 'vertical',
        color:  'gold',
        shape:  'rect',
        label:  'paypal',
        height:   55,
    }
    
    return (
        <div className='donations-container'>
            <div className='donations-filter'></div>
            <div className='donations-in'>
                <div className='header-donations'>
                    <h5>Help us to support this project</h5>
                    <p>We thank you from the bottom of our hearts for your help.</p>
                </div>
                <div className='body-donations'>
                    <label className="paypal">
                        <PayPalScriptProvider options={{"client-id": clientID}} >
                            <PayPalButtons 
                                style={paypalStyle} 
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    value: "2.99",
                                                },
                                            },
                                        ],
                                    });
                                }}
                                onApprove={(data, actions) => {
                                    return actions.order.capture().then((details) => {
                                        const name = details.payer.name.given_name;
                                        alert(`Transaction completed by ${name}`);
                                    });
                                }}
                            />
                        </PayPalScriptProvider>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Donations

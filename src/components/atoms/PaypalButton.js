import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { loadScript } from "@paypal/paypal-js";

function PaypalButton() {
    
    function renderPaypalButton (){
        paypal
        .Buttons({
            createOrder:function(data,actions) {
                return actions.order.create({
                    purchase_units:[
                        {
                            amont:{
                                value:"0.5",
                            },
                        },
                    ],
               });
            },
        }).render("#paypal-button-container")
    }
    
    return (
        <div>
            <div id="paypal-button-container">
                
            </div>
        </div>
    )
}

export default PaypalButton
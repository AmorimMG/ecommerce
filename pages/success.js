import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runConfetti } from '../lib/utils';

const Success = () => {
   const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

   useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runConfetti();
   },[]);

    return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Obrigado pela compra!</h2>
            <p className='email-msg'>Verifique seu e-mail para ver o recibo.</p>
            <p className='description'>
                Se você tem alguma pergunta, por favor envie para o e-mail
                <a className='email' href='mailto:gabriel._amorim@hotmail.com'>
                    gabriel._amorim@hotmail.com
                </a>
            </p>
            <Link href="/">
                <button type='button' width='300px' className='btn'>
                    Continuar Comprando
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success
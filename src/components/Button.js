import React from 'react';

const Button =({vieillir})=> { // vieillir ici est un props
   return(
    <button onClick={vieillir}>
        Vieillir de 3 ans
    </button>
   ) 
}

export default Button
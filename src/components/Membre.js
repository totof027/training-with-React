import React, {Fragment}  from "react";
import Button from './Button'
const Membre = ({ nom, age, children, HideNom, handleChange, handleClick })=>{ // la const prend en paramètre (props) ou ({le nom direct du props}).
    // console.log(handleChange,'toto')
    return(
        <Fragment>

            <h3 style={{ backgroundColor: age < 5 ? 'green': 'blue', 
                        color:'white' }}> 
                 {nom.toUpperCase()} {age ? <strong> { age}</strong> : <Fragment />}
             </h3>
            {children ? <p>{children}</p> : <Fragment />} 
            {age ? <button onClick={HideNom}>X</button> : <Fragment />}

            {age ? <input type="text" value={nom} onChange={handleChange} />: <Fragment />}
            {age ? <Button vieillir={handleClick}/> : <Fragment />}
           
        </Fragment>
        // Ici, une condition ternaire.
    )
}

export default Membre

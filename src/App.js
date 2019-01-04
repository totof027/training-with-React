import React, { Component } from 'react';

import './App.css';
import Membre from './components/Membre'
import Todo from './components/Todo-list'
import Test from './components/Test'


const famille = {
    membre1:{
      nom:'Carter',
      age: 4
    },
     membre2:{
      nom:'junior',
      age: 5
    },
     membre3:{
      nom:'mada',
      age: 3
    }
}
class App extends Component {
  state= {
    famille,
    isShow: false
  }

  handleClick=(id,num)=>{ // fonction pour changer l'age au click
   
    const famille = {...this.state.famille}
    famille[id].age += num
    this.setState({famille})
    // console.dir([famille[id].age])
  }
  handleChange = (event,id )=> { //  fonction pour changer le nom du membre 
    // console.log(event.target.value)
    const famille = { ...this.state.famille } // 1- on copie le state, 2 on fait les modification, 3 on met a jour!!!
    const name = event.target.value

    console.log(name)
    famille[id].nom = name
     this.setState({famille })
  }

  HideNom = id => { //  
    // console.log(event.target.value)
    const famille = { ...this.state.famille }
    famille[id].nom = 'fonction OK'
    this.setState({ famille })
  }

  handleShowDescription = ()=>{ //  fonction pour afficher ou cacher un texte
    const isShow = !this.state.isShow
    this.setState({isShow})
  }
  render() {
    const {titre} = this.props
    const {famille,isShow} = this.state
    
    let description = null

    if(isShow){
      description = <strong>fait dodo!!!</strong>
    }

    const liste = Object.keys(famille) // pur javascript // map pour boucler un certain nombre de données d'un tableau.
    .map(membre =>(
      <Membre 
        key={membre}
        handleChange={event=>this.handleChange(event, membre)}
        HideNom={()=>this.HideNom(membre)}
        handleClick={() => this.handleClick(membre, 3)}
     
        age={famille[membre].age}
        nom={famille[membre].nom}
      />
    ))
    // console.log(liste)
    return (
      <div className="App">
        <h1 align="center" style={{ margin: '40px' }} >{titre}</h1>
        
        {/* exercice av les props  */}
          <div className="solid">
            <Membre nom="totof"> (children) </Membre>
            <Membre nom="tony">
                {description}
              <button onClick={this.handleShowDescription}>
                  { isShow ? 'Cacher' : 'Montrer'}
              </button>
            </Membre>
          
                {liste}
                <br/><br />
          
          {/* exercice av les states */}
          {/* <Membre nom={famille.membre2.nom} age={famille.membre2.age}/>
        
              <Membre nom={famille.membre3.nom} age={famille.membre3.age}/>
              
              <Membre nom={famille.membre1.nom} age={famille.membre1.age}/> */}

             {/* <Button vieillir={() => this.handleClick(3)} /> */}
            
          </div>
       
     
        <Test name="apprendre tous les jours"/>

        <h3 style={{ color: 'blue'}}>Appliquer une couleur.</h3>

        <Todo first="Ma première todo"/>
      </div>
    );
  }
}

export default App;

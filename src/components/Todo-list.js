import React, {Component} from 'react';

class Todo extends Component{
    constructor() {
        super()
        this.state={
            champs : '',
            tabs : []
        } 
    }

    change(event){
    // console.log(event.target.value)
    this.setState({
            champs: event.target.value
        });
    }

    addOne(event){
        event.preventDefault()
        // console.log('toto')
        
        this.setState({
            champs: '',
            tabs: [...this.state.tabs, this.state.champs]
        },()=>console.log(this.state))    
    }

    voirTab(){
        return this.state.tabs.map((tab)=>{
            return(
                <div key={tab}>
                    {tab } - <button onClick={()=>this.deleteTabs(this,tab)}>supprimer</button>
                </div>
            )
        })
    }

    deleteTabs(tab) {
        const array = this.state.tabs;
        const index = array.indexOf(tab);
        array.splice(index, 1);
        this.setState({
            tabs : array
        })
    }
    render(){
        return(
            <div>
                <h2>{this.props.first}<span style={{ color: 'red' }}>***</span></h2>
                <form action="">
                    <input value={this.state.champs} type="text" placeholder="Ajouter une tâche" onChange={this.change.bind(this)}/>
                    <button onClick={this.addOne.bind(this)}>Ajouter</button>
                </form>
                <div className="list-group">
                    {this.voirTab()}
                </div>
            </div>
        )
    }
}

export default Todo
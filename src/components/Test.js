import React,{Component} from 'react';

class Test extends Component{
 
      state = {
            count: 10
        }
    

    addOne(){
        this.setState({
           count : this.state.count + 1
        })
    }

    removeOne(){
        this.setState({
            count: this.state.count - 1
        })
    }
    render(){
        return(
            <div>
                <h2>Je dois {this.props.name}</h2>
                <h3>compteur : {this.state.count}</h3>
                <button onClick={()=>this.addOne()}>Ajouter 1</button> 
                <button onClick={this.removeOne.bind(this)}>Enlever 1</button>
            </div>// preferer la méthode avec la fonction anonymes.
        )
    }
   
}

export default Test
import React,{Component} from 'react';

export default class Login extends Component{
    state = {
        username : ''
    }

    

    handleLogin = event =>{
        event.preventDefault();
        this.setState({[event.target.name] : event.target.value});
    }

    render(){
        return(
            <div>
                <form>
                    <input 
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleLogin}/>
                    <button type='submit'>Entrar</button>
                </form>
            </div>
        )
    }
}
import React, { Component } from "react";



const formLogin = [
  {
    name:"email",
    type:"text",
    label:"Email",
    //pattern:"" NÃO ESQUECER DE POR PATTERN MILENE E GABI
    title:"Digite seu email"
  },
  {
    name:"senha",
    type:"password",
    label:"Senha",
    //pattern:"" NÃO ESQUECER DE POR PATTERN MILENE E GABI
    title:"Digite sua senha"
  },

]

class LoginPage extends Component {
  state ={
    form: {

    }
  }

  handleSubmitForm=(event)=>{
    event.preventDefault();

    this.setState({form:{}})
    console.log(this.state.form)

  }

  handleInputChange = (event)=> {
    const {name, value } = event.target;

    this.setState({ form: {...this.state.form, [name]: value}})
  }

  render() {
    
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          {formLogin.map(input => {

            return (
              <div key ={input.name}>
                <label htmlFor={input.name}>
                  {input.label}
                </label>
                <input 
                  onChange={this.handleInputChange }
                  required
                  name={input.name}
                  type={input.type}
                  title={input.title}
                  />
              </div>
            )
          })}
         
        <button 
        type="submit"
        >Entrar
        </button>

    
        </form> 
        <button 
        type="submit"
        >Cadastrar
        </button>
        
      </div>
    );
  }
}

export default LoginPage;

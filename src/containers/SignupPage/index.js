import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as todoActions from "../../actions/todoPosts"
import { WrapperSignup } from "./styled"



class SignupPage extends Component {

    state = {

    userName:"",
    email: "",
    password: ""
  
    }
  
    handleFieldChange = (event) => {
  
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
  
    handleSignUp = (event) => {
      event.preventDefault();
  
      this.props.signup(this.state.userName, this.state.email, this.state.password);
      }
  
  
  
    render() {
      const { email, password, userName } = this.state;
  
      return (

        <WrapperSignup>
          <form onSubmit={this.handleSignUp}>
              
              <label>Nome: </label>
              <input 
              onChange={this.handleFieldChange}
              name="userName"
              type="text"
              label="Nome"
              value={userName}
              required
              placeholder="Insira seu nome"

              />

            <label>E-mail: </label>
            <input
              onChange={this.handleFieldChange}
              name="email"
              type="email"
              label="E-mail"
              value={email}
              required
              placeholder="Insira seu email"
            />

            <label>Senha: </label>
            <input
              onChange={this.handleFieldChange}
              name="password"
              type="password"
              label="Password"
              value={password}
              placeholder="Insira sua senha"
              required
            />
            
                <button
                  type="submit"
                >Cadastrar
                </button>
        
                </form>
        </WrapperSignup>

      )}
    }



const mapDispatchToProps = dispatch =>
bindActionCreators(todoActions, dispatch)
  
export default connect(null, mapDispatchToProps) (SignupPage)
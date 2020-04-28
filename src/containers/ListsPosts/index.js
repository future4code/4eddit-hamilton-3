import React, { Component } from "react";
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as todoActions from "../../actions/todoPosts"



class ListsPosts extends Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
            inputPostValue: ""


        }

    }


    componentDidMount() {
   
    this.props.getPosts(localStorage.getItem("token"))
    

    }

    handleInputChange = (event) => {
        this.setState({ inputPostValue: event.target.value })
        // console.log(this.state.inputPostValue)
    }

    handleSubmitButton = (event) => {
        event.preventDefault()
        this.props.addPosts(this.state.inputPostValue)
        this.setState({ inputPostValue: "" })
        

    }

    render() {
        console.log(this.props.posts)
        return (

            <div><h1>Página de Feed</h1>
            <form
             onSubmit={this.handleSubmitButton }
            
            >
                <input
                    required
                    onChange={this.handleInputChange}
                    type="text"
                    value={this.inputPostValue}

                />
                <button
                 
                
                    type="submit">
                    Criar Post
                 </button>
                 </form>
                <ul>
                    {this.props.posts && this.props.posts.map(post => {
                        return (
                    
                        <li  key={post.id}>

                        <strong>{post.username}</strong>
                        <br/>
                        <em>{post.title}</em>

                        <p>{post.text}</p>
                        

                        
                        </li>)
                    })}
                  
                </ul>

            </div>
        )
    }

}
const mapStateToProps = state => ({
    posts: state.todo.posts

})

const mapDispatchToProps = dispatch =>
    bindActionCreators(todoActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(ListsPosts)
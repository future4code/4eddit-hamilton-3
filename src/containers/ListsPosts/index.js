import React, { Component } from "react";
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as todoActions from "../../actions/todoPosts"
import { WrapperPosts } from "./styled";



class ListsPosts extends Component {
    constructor(props) {
        // console.log(props)
        super(props)
        this.state = {
            inputPostValue: "",
            inputTitleValue:""
        }

    }


    componentDidMount() {
   
    this.props.getPosts()
    // this.props.getPostDetails(this.props.postId, localStorage.getItem("token"))
    

    }

    handleInputChange = (event) => {
        const {value, name}=event.target
        this.setState({ [name]:value })
        // console.log(this.state.inputPostValue)
    }

    handleSubmitForm = (event) => {

        event.preventDefault()
        this.props.addPost(this.state.inputTitleValue, this.state.inputPostValue)
        this.setState({ inputPostValue: "", inputTitleValue:"" })
       
        console.log(this.state.inputPostValue)
        console.log(this.state.inputTitleValue)

     
        

    }
    handleSubmitId =(id)=> {
       
        this.props.getPostDetails(id, localStorage.getItem("token"))
    }

    render() {
       
        return (

        <WrapperPosts>

                <h1>Página de Feed</h1>
        
            <form onSubmit={this.handleSubmitForm}>
                
                <input
                required
                onChange={this.handleInputChange}
                type="text"
                name="inputPostValue"
                value={this.inputPostValue}
                placeholder="O que você está pensando?"
                />

                <input
                required
                onChange={this.handleInputChange}
                name="inputTitleValue"
                type="text"
                value={this.inputTitleValue}
                placeholder="titulo do post"
                 />

                <button
                type="submit">
                   Publicar
                 </button>

            </form>

                <ul>
                    {this.props.posts && this.props.posts.map(post => {
                        return (
                    
                        <li  key={post.id}
                        onClick={()=>this.handleSubmitId(post.id)}>
                        <strong>{post.username}</strong>
                        <br/>
                        <em>{post.title}</em>
                        <p>{post.text}</p>

                     <div>

                        <p> ↑{post.votesCount}↓ </p>
                        <p>{post.commentsCount} comentários</p> 

                    </div>   
                        
                        {/* <button onClick={()=>this.handleSubmitId(post.id)}>Clicar</button> */}

                        </li>)
                    })}
                  
                </ul>

        </WrapperPosts>
        
        )
    }

}
const mapStateToProps = state => ({
    posts: state.todo.posts,
    postId: state.todo.postInfo
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(todoActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(ListsPosts)
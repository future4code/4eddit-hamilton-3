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
            inputTitleValue:"",
            thumbs:false

        }

    }

    componentDidMount() {
   
    this.props.getPosts()
    
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
       

    }

    handleSubmitId =(id)=> {
       
        this.props.getPostDetails(id, localStorage.getItem("token"))
    }


    handleLike = (id, direction)=> {

        if (direction === 0 || direction === -1) {
            this.props.votePost(1, id)
        } else {
            this.props.votePost(0, id)
        }
    }

    handleDislike = (id, direction)=> {

        if (direction === 0 || direction === 1) {
            this.props.votePost(-1, id)
        } else {
            this.props.votePost(0, id)
        }
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
                placeholder="Título do post"
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

                            <div>
                                  <button onClick={()=>this.handleDislike(post.id, post.userVoteDirection)} ><i class="fas fa-long-arrow-alt-down"></i></button>

                                    <p> 
                                        {post.votesCount}
                                    </p>

                                    <button onClick={()=>this.handleLike(post.id, post.userVoteDirection)}  ><i class="fas fa-long-arrow-alt-up"></i></button>
                            </div>
                            
                            <p>{post.commentsCount} comentários</p> 

                        </div>   

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
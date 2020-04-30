import React,  {Component} from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as todoActions from "../../actions/todoPosts"
import {WrapperDetails} from "./styled"



class FeedDetails extends Component{

    state = {

        inputCommentValue:""
    }


    onChangeInputComment =(event)=>{

        this.setState({inputCommentValue:event.target.value})
    }

    onClickButton =(id)=> {
        this.props.createComment(id, this.state.inputCommentValue)
    }

    handleLike = (direction, postId, commentId)=> {

        if (direction === 0 || direction === -1) {
            this.props.voteComment(1,postId, commentId)
        } else {
            this.props.voteComment(0,postId, commentId)
        }
    }

    handleDislike = (direction, postId, commentId)=> {

        if (direction === 0 || direction === 1) {
            this.props.voteComment(-1, postId,commentId)
        } else {
            this.props.voteComment(0, postId, commentId)
        }
       
    }

    render (){
      
    return( 

        <WrapperDetails>
            
            <div>

                <strong>{this.props.postInfo.username}</strong>

                <p>{this.props.postInfo.title}</p>
                <p>{this.props.postInfo.text}</p>

                <div>

                    <div>
                            <button 
                       
                            ><i class="fas fa-long-arrow-alt-down"></i></button>
                            <p> 
                            {this.props.postInfo.votesCount}
                            </p>
                            <button ><i class="fas fa-long-arrow-alt-up"></i></button>
                    </div>

                    <p>{this.props.postInfo.commentsCount} comentarios </p>
                </div>

            </div>

            <section>

                <input onChange={this.onChangeInputComment}  
                value={this.state.inputCommentValue} 
                
                placeholder="seu comentario"/>
                <button
                >Comentar
                </button>

            </section>
          

           {this.props.postInfo.comments && this.props.postInfo.comments.map(comment=>{
               return (
                  
                  <main key={comment.id}>

                       <strong>{comment.username}</strong>
                       <p>{comment.text}</p>
                       
                        <div>
                            <div>
                            <button
                                onClick={()=>this.handleDislike(this.props.postInfo.userVoteDirection, this.props.postInfo.id, comment.id)}
                            ><i class="fas fa-long-arrow-alt-down"></i></button>
                            <p> 
                                {comment.votesCount}
                            </p>
                            <button 
                              onClick={()=>this.handleLike(this.props.postInfo.userVoteDirection, this.props.postInfo.id, comment.id)}
                            
                            ><i class="fas fa-long-arrow-alt-up"></i></button>
                            </div>

                         </div>
                   </main>

                )
            }
            )}

        </WrapperDetails>
        
        )
    }

}

const mapStateToProps = state => ({
    posts: state.todo.posts,
    postInfo: state.todo.postInfo
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(todoActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(FeedDetails)

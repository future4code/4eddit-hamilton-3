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

    render (){
      
        return( 

        <WrapperDetails>
            
            <div>

                <strong>{this.props.postInfo.username}</strong>

                <p>{this.props.postInfo.title}</p>
                <p>{this.props.postInfo.text}</p>

                <div>

                    <div>
                            <button><i class="fas fa-long-arrow-alt-down"></i></button>
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
                onClick={()=>this.onClickButton(this.props.postInfo.id)}
                >Comentar
                </button>

            </section>
          

           {this.props.postInfo.comments && this.props.postInfo.comments.map(comment=>{
               return (
                  
                  <main key={comment.id}>

                       <p>{comment.username}</p>
                       <p>{comment.text}</p>
                       
                        <div>
                            <div>
                            <button><i class="fas fa-long-arrow-alt-down"></i></button>
                            <p> 
                                {comment.votesCount}
                            </p>
                            <button  ><i class="fas fa-long-arrow-alt-up"></i></button>
                            </div>
                            <p>comentários</p>
                            

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

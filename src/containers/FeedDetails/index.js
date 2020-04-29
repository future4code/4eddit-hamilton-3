import React,  {Component} from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as todoActions from "../../actions/todoPosts"



class FeedDetails extends Component{


    componentDidMount() {
      
        this.props.getPostDetails(this.props.postInfo, localStorage.getItem('token'))
      }
     
      
    render (){
        return( 
        <div>
          
           <input placeholder="seu comentario"/>
           <button>Comentar</button>

           {this.props.comments && this.props.comments.map(comment=>{
               return (
                   <div key={comment.id}>
                       <p>{comment.username}</p>
                       
                       <p>{comment.text}</p>
                     
                       <p>{comment.votesCount}</p>
                       <hr/>
                   </div>

               )
           }
            
            )}
        </div>
        
        )
    }

}

const mapStateToProps = state => ({
    posts: state.todo.posts,
    comments: state.todo.postInfo
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(todoActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(FeedDetails)

import React, {Component} from 'react';

class Posts extends Component{
    state = {
        posts : [],
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>{
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'vaibhi'
                    }
                })
                this.setState({posts: updatedPosts});
            })
            .catch(error =>{
                this.setState({error: true});
            })
    }

    postSelectedHandler = (id) =>{   
        this.setState({selectedPostId: id});
    }
    
    render(){
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post =>(
                <Post 
                key={post.id} 
                title={post.title} 
                author={post.author} 
                clicked={() => this.postSelectedHandler(post.id)}/>
            ))
        }
        
  
        return (
            <section className="Posts">

            </section>
        );
    }
}

export default Posts;
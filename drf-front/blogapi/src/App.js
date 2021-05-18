import './App.css';
import Posts from './components/Posts'
import PostLoadingComponent from './components/PostLoading'
import React,{useEffect, useState} from 'react'

function App(){
  const PostLoading = PostLoadingComponent(Posts);
  const [appState,setAppState] = useState({
    loading: false,
    posts: null
  });

  useEffect(()=>{
    setAppState({ loading: true });
    const apiUrl = 'http://localhost:8000/api/';
    fetch(apiUrl)
      .then((response)=>response.json())
      .then((posts)=>{
        console.log(posts)
        setAppState({ loading:false, posts:posts })
    })
  },[setAppState]);
  
  return (
    <div className="App">
      <h1>Latest Posts</h1>
      <PostLoading isLoading={appState.loading} posts={appState.posts}/>
    </div>
  )
  }


export default App;

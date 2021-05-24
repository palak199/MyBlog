import React from 'react'
import {useEffect, useState} from 'react'
import Posts from './components/Posts'
import PostLoadingComponent from './components/PostLoading';

function App(){
  const PostLoading = PostLoadingComponent(Posts);
  const [appState, setAppState] = useState({
    posts: null,
    loading: false,
  });
  useEffect(() => {
    setAppState({loading: true})
    const apiUrl = 'http://localhost:8000/api/'
    fetch(apiUrl)
    .then((data) => data.json())
    .then((posts) => {
      setAppState({ loading: false, posts: posts });
    })
    .catch((error) => console.log(error))
  }, [setAppState])
  
    return(
      <div className="App">
        <h1>Recently Brewed Blogs</h1>
        <PostLoading isLoading={appState.loading} posts={appState.posts} />
        </div>
    )
  
}

export default App;
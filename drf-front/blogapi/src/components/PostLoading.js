import React from 'react';

function PostLoading(Component){
    return function PostLoadingComponent({ isLoading, ...props}){
        if(!isLoading) return <Component { ...props}/>;
        return (
            <p style={{  fontsize: '25px' }}>
                Blogs pouring in soon..........
            </p>
        )
    }
}

export default PostLoading
import React from "react";
import Article from "./Article";

function ArticleList ({ posts }){
    const postArticles = posts.map((post) => {
        return <Article title={post.title} date={post.date} preview={post.preview} />
    })
    return <div>
        
        </div>;
};

export default ArticleList;

// const articles  = posts.map((post) => {
    //     return <Article title={post.title} date={post.date} preview={post.preview} />
    // })
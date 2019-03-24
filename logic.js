const Tweeter = function(){
let idPost = 0;
let idComm = 0;
const _posts = [
    // {
    //     text: "First post!",
    //     id: "p1",
    //     comments: [
    //         { id: "c1", text: "First comment on first post!" },
    //         { id: "c2", text: "Second comment on first post!!" },
    //         { id: "c3", text: "Third comment on first post!!!" }
    //     ]
    // },
    // {
    //     text: "Aw man, I wanted to be first",
    //     id: "p2",
    //     comments: [
    //         { id: "c4", text: "Don't wory second poster, you'll be first one day." },
    //         { id: "c5", text: "Yeah, believe in yourself!" },
    //         { id: "c6", text: "Haha second place what a joke." }
    //     ]
    // }
]

const getPosts =() => _posts
   
const addPost = function(txt){
    return _posts.push({
        text : txt,
        id: "p" + idPost++,
        comments: []

    })
}
const removePost = function(postId){
    const postIndex = findPID(postId)
            return _posts.splice(postIndex , 1)
}
const addComment = function(postId, txt){
    const postCom = findPID(postId)
    return _posts[postCom].comments.push({
        id : "c" + idComm++,
        text : txt
    })
}
const removeComment = function(postId, commId){
    let postIndex = findPID(postId)
     for(let i in _posts[postIndex].comments){
                 if(_posts[postIndex].comments[i].id === commId){
                     
                   return  _posts[postIndex].comments.splice(i, 1)
                 }
         }
}
 const findPID = function(postId){
    for( let i in _posts){
        if(_posts[i].id == postId){
            return i 
        }
    }
}
return{
    getPosts,
    addPost,
    removePost,
    findPID,
    addComment,
    removeComment,
  
}
}



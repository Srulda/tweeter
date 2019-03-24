const Renderer  = function(){
    const renderPosts = function(_posts){
        $("#posts").empty()
        for(let i in _posts){
           $("#posts").append(`<div class="post" id="${_posts[i].id}"><div class= "post-text">${_posts[i].text}</div></div>`)
            for (let comm in _posts[i].comments){
                $(`#${_posts[i].id}`).append(`<p id ="${_posts[i].comments[comm].id}" class="comments"><span class = "delete-comment">X </span> ${_posts[i].comments[comm].text}</p>`)
            }
            $(`#${_posts[i].id}`).append(`<div><input data-id ="${_posts[i].id}" type="text" placeholder="Got Somthing to say?"><button class = "commentButton">Comment</button></div>`)
            $(`#${_posts[i].id}`).append(`<div><button class = "delete">Delete post</button></div>`)
           }
    }
    return{
        renderPosts,
}
}


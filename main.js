const tweeter = Tweeter()
const renderer = Renderer()
const render = () => renderer.renderPosts(tweeter.getPosts())
//twit!
const post = function(){
    // if(!Text) {return}
tweeter.addPost($("#input").val()) 
    render()
}
//delete post
$("body").on("click",".delete" ,function(){
    tweeter.removePost($(this).closest(".post").attr("id"))
    render()
})
//add +submit comment
$("body").on("click", ".commentButton", function(){
let postID = $(this).closest(".post").attr("id")
let txt = $(this).siblings("input").val()
    tweeter.addComment(postID, txt)
    render()
})
//delete comment
$("body").on("click", ".delete-comment", function(){
let postID = $(this).closest("#posts").find(".post").attr("id")
let commID = $(this).closest("p").attr("id")
    tweeter.removeComment(postID, commID)
    render()
})
//when i load my page i want to see what is already there
render()
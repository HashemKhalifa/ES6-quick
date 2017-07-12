var posts = [
    { id: 1, title: 'New post' },
    { id: 2, title: 'Old post' }
];

var comment = {
    postId: 1,
    content: 'Great post'
};

function postForComment(posts, comment) {
    return posts.find(function(post) {
        return post.id === comment.postId;
    });
}

console.log(postForComment(posts, comment));
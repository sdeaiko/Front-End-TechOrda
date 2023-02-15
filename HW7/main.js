const axios = window.axios;

// Get the posts and order them by ID
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(postsResponse => {
    const posts = postsResponse.data.sort((a, b) => a.id - b.id);
    
    // Get the comments and group them by postID
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(commentsResponse => {
        const comments = commentsResponse.data;
        const commentsByPost = {};
        comments.forEach(comment => {
          const postID = comment.postId;
          if (!commentsByPost[postID]) {
            commentsByPost[postID] = [];
          }
          commentsByPost[postID].push(comment);
        });
        
        // Output the posts and their comments
        const postList = document.getElementById('postList');
        posts.forEach(post => {
          const postItem = document.createElement('div');
          postItem.classList.add('post');
          postItem.innerHTML = `<div class='postTitle'><h2>Post ${post.id}: ${post.title}</h2><div>`;
          if (commentsByPost[post.id]) {
            const commentList = document.createElement('div');
            commentList.classList.add('comment');
            commentList.innerHTML = '<h2>Comments: </h2>'
            commentsByPost[post.id].forEach(comment => {
              const commentItem = document.createElement('p');
              commentItem.innerHTML = `<strong>${comment.name}:</strong> ${comment.body}`;
              commentList.appendChild(commentItem);
            });
            postItem.appendChild(commentList);
          }
          postList.appendChild(postItem);
        });
      })
      .catch(error => {
        console.error(`Failed to get comments: ${error}`);
      });
  })
  .catch(error => {
    console.error(`Failed to get posts: ${error}`);
});
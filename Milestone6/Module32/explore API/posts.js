function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data=>displayPost(data))
}
function displayPost(data) {
    // console.log(data)
    const postContainer = document.getElementById('posts-container')
    for (const post of data) {
        console.log(post)
        const article = document.createElement('article');
        article.classList.add('post')
        article.innerHTML = `
        <h4>User ${post.userId}</h4>
                <h5>Title : ${post.title}</h5>
                <p>Post Description : ${post.body}</p>
        `
        postContainer.appendChild(article);
    }
}

loadPosts();
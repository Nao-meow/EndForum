document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('post-form');

    postForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const postTitle = document.getElementById('post-title').value;
        const postAuthor = document.getElementById('post-author').value;
        const postContent = document.getElementById('post-content').value;
        const postCode = document.getElementById('post-code').value;
        const codeLang = document.getElementById('code-lang').value;

        const post = {
            title: postTitle,
            author: postAuthor,
            content: postContent,
            code: postCode,
            lang: codeLang
        };

        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));

        window.location.href = 'index.html';
    });
});

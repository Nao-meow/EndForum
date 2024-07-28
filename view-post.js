document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postIndex = urlParams.get('index');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (posts[postIndex]) {
        const post = posts[postIndex];
        document.getElementById('post-title').textContent = post.title;
        document.getElementById('post-author').textContent = `Author: ${post.author}`;
        document.getElementById('post-content').textContent = post.content;

        if (post.code) {
            const codeElement = document.getElementById('post-code');
            codeElement.textContent = post.code;
            codeElement.className = post.lang; // Assuming you have styles for code languages
        }
    }
});

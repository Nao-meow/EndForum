document.addEventListener('DOMContentLoaded', function() {
    const createPostButton = document.getElementById('create-post-button');
    const postsContainer = document.getElementById('posts-container');

    createPostButton.addEventListener('click', function() {
        window.location.href = 'create-post.html';
    });

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.className = 'post-z1';
        postElement.dataset.index = index;

        const postImage = document.createElement('img');
        postImage.src = 'images/new_post.png';
        postImage.alt = 'Описание изображения';
        postImage.id = 'new-post-image';

        const postParagraph = document.createElement('p');
        postParagraph.id = 'text-post';
        postParagraph.textContent = `${post.title} | author: ${post.author}`;

        postElement.appendChild(postImage);
        postElement.appendChild(postParagraph);
        postElement.addEventListener('click', function() {
            window.location.href = `post.html?index=${index}`;
        });

        postsContainer.appendChild(postElement);
    });
});

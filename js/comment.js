function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((data) => displayComments(data));
}
loadComment();

function displayComments(comments) {
    const commentContainer = document.getElementById('comments');
    for (const comment of comments) {
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.style.border = '2px solid red';
        p.innerText = comment.body;
        commentContainer.appendChild(p);
    }
}
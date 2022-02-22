function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
        .then((data) => displayComments(data));
}
loadComment();

function displayComments(comments) {
    const albumContainer = document.getElementById('comments');
    for (const comment of comments) {
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.innerText = comment.body;
        albumContainer.appendChild(p);
    }
}
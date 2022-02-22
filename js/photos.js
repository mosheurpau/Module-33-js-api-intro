function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((data) => displayAlbums(data));
}
loadAlbum();

function displayAlbums(photos) {
    const photoContainer = document.getElementById('photos');
    for (const photo of photos) {
        const img = document.createElement('img');
        img.style.border = '2px solid red';
        img.src = photo.url;
        photoContainer.appendChild(img);
    }
}
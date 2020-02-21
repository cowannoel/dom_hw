document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const artistAndArtItem = createArtistAndArtItem(event.target);
  const artistAndArt = document.querySelector('#artist-and-art');
  artistAndArt.appendChild(artistAndArtItem);

  event.target.reset();
}

const createArtistAndArtItem = function (form) {
  const artistAndArtItem = document.createElement('li');
  artistAndArtItem.classList.add('artist-and-art-item');

  const artist = document.createElement('h2');
  artist.textContent = form.artist.value;
  artistAndArtItem.appendChild(artist);

  const artwork = document.createElement('h3');
  artwork.textContent = form.artwork.value;
  artistAndArtItem.appendChild(artwork);

  const medium = document.createElement('p');
  medium.textContent = form.medium.value;
  artistAndArtItem.appendChild(medium);

  return artistAndArtItem;
}

const handleDeleteAllClick = function (event) {
  const artistAndArt = document.querySelector('#artist-and-art');
  artistAndArt.innerHTML = '';
}

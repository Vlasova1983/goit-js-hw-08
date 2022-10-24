// Add imports above this line
import { galleryItems } from './gallery-items';
console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const imagePalette = document.querySelector(".gallery");
const makeImage = ({preview, original, description}) => {  
    return `
      <div class="gallery__item">
        <a class="gallery__link"  href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
    `
  }

const makeImagas = galleryItems
  .map(makeImage)
  .join('');

imagePalette.insertAdjacentHTML('beforeend', makeImagas);

imagePalette.addEventListener('click', onGalleryClick);
function onGalleryClick(evt) {
      evt.preventDefault();
  }

  const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
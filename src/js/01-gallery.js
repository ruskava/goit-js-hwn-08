
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const makeGalleryItemMarkup = (arr) => {
    return arr
        .map(({ description, preview, original }) => {
            return `<a class="gallery__item" href="${original}">
			<img class="gallery__image" src="${preview}" alt="" title="${description}" />
		  </a>`;
        })
        .join('');
};

const galleryContainerRef = document.querySelector('.gallery');
galleryContainerRef.innerHTML = makeGalleryItemMarkup(galleryItems);

const lightboxSlider = new SimpleLightbox('.gallery a ', {
    sourceAttr: 'href',
    captions: true,
    captionsData: 'title',
    captionPosition: 'bottom',
    captionDelay: 250,
    loop: true,
});
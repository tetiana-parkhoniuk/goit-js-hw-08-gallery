import galleryItems from "./gallery-items.js";

// 1) Gallery Markup //

const galleryList = document.querySelector('.js-gallery');

const makeGalleryItemMarkup = (item) => {
  const { preview, original, description } = item;
  return `
    <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  `;
};

const makeGalleryMarkup = galleryItems
  .map(makeGalleryItemMarkup)
  .join('');

galleryList.insertAdjacentHTML('beforeend', makeGalleryMarkup);

// 2) Delegation //

galleryList.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick({ target }) {
    
    if (target.nodeName !== "IMG") {
        return;
    }

    console.log(target.nodeName);
};
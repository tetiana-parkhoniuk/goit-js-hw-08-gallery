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
        loading="lazy";
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

// 2) Delegation and Get big IMG url 3) Open Modal Window 4) src change //

const lightboxEl = document.querySelector('.js-lightbox');
const lightboxImageEL = document.querySelector('.lightbox__image');
let currentBigImageUrl = '';

galleryList.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(evt) {
    evt.preventDefault();
    const { target } = evt;
    if (target.nodeName !== "IMG") {
        return;
    }

    setBigImageSrc(target.dataset.source);
    // currentBigImageUrl = target.dataset.source;
    // lightboxImageEL.src = currentBigImageUrl;
    openModalWindow(); 
};

function setBigImageSrc(link) {
    currentBigImageUrl = link;
    lightboxImageEL.src = currentBigImageUrl;
};

function openModalWindow() {
    lightboxEl.classList.add('is-open');
    window.addEventListener("keydown", onEscBtnPress);
};

// 5) Close Modal Window //

const closeModalWindowBtn = document.querySelector('button[data-action="close-lightbox"]');

closeModalWindowBtn.addEventListener("click", onCloseModalWindow);

function onCloseModalWindow(evt) {
    closeModalWindow();
  clearBigImgSrc();
  window.removeEventListener("keydown", onEscBtnPress);

};

function closeModalWindow() {
    lightboxEl.classList.remove('is-open');
};

function clearBigImgSrc() {
    lightboxImageEL.src = '';
};

// 6) Close Modal Window (overlay) //

const lightboxOverlayEl = document.querySelector('div.lightbox__overlay');

lightboxOverlayEl.addEventListener("click", onCloseModalWindow);

// function onLightboxOverlayClick(evt) {
//     closeModalWindow();
//     clearBigImgSrc();
// };

// 6) Close Modal Window (ESC button) //

// window.addEventListener("keydown", onEscBtnPress);

function onEscBtnPress(evt) {
    if (evt.code !== 'Escape') {
        return;
    }
    closeModalWindow();
    clearBigImgSrc();
};

// 7) Left/Right Image Scrolling  //

// let currentIndex = 0;

// window.addEventListener("keydown", onArrowsClick);

// function onArrowsClick(evt) {
//     if (evt.code !== 'ArrowLeft' || evt.code !== 'ArrowRight' || currentIndex < 0 || currentIndex > Array.length ) {
//         return;
//     }
//     else if (evt.code == 'ArrowLeft') {
//         currentIndex -= 1;
//     } else if (evt.code == 'ArrowRight') {
//         currentIndex += 1;
//     }

//     setModaleImage(currentIndex);
// };

// function setModaleImage(index) {
//     console.log(galleryItems[index]);
// };


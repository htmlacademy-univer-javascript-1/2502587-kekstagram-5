import {allPhoto} from './data.js';

const showPicturesTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const showAllPictures = allPhoto();

const similarListFragment = document.createDocumentFragment();

showAllPictures.forEach(({url, description, likes, comments}) => {
  const showPictures = showPicturesTemplate.cloneNode(true);
  showPictures.querySelector('.picture__img').src = url;
  showPictures.querySelector('.picture__img').alt = description;
  showPictures.querySelector('.picture__likes').textContent = likes;
  showPictures.querySelector('.picture__comments').textContent = comments.length;
  similarListFragment.append(showPictures);
});

document.querySelector('.pictures').append(similarListFragment);

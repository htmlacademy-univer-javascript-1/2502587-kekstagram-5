const NAMES = [
  'София',
  'Артём',
  'Ева',
  'Виктория',
  'Аиша',
  'Алия',
  'Анна',
  'Дарина',
  'Екатерина',
  'Марьям',
  'Милана',
  'Хадиджа',
  'Ханифа'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION = [
  'Вся красота мира в одной картинке',
  'Моменты, которые запечатлены навсегда',
  'Счастье в каждом кадре',
  'Когда слова не нужны, достаточно фотографии',
  'История, рассказанная через объектив',
  'Остановить время в одном кадре',
  'Фотография — это способ улыбнуться в будущем',
  'Сегодня — самый лучший день',
  'Я не доверяю словам. Я доверяю фотографиям',
  'Фотографии — это свидетельство о том, что мы жили',
  'Момент, когда небо и земля сливаются воедино',
  'В объектив всегда видна правда — это как детектор лжи',
  'Сделано объективом и любовью',
  'Счастье никогда не выходит из моды',
  'Лишь тот, кто странствует, открывает новые пути',
  'Зарядитесь нашим теплом',
  'Жизнь лучше, когда ты смеешься'
];

const ALL_PHOTO_COUNT = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomIdFromRangeGenerator (min, max) {
  let previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      return;
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generatePhotoAvatar = getRandomInteger;
const generatePhotoURL = createRandomIdFromRangeGenerator(1, 25);
const generatePhotoLikes = getRandomInteger;
const generatePhotoComments = getRandomInteger;

const createPhotoDescription = () => {
  return {
    id: generatePhotoId(),
    avatar: `img/avatar-${generatePhotoAvatar(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
    url: `photos/${generatePhotoURL()}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: generatePhotoLikes(15, 200),
    comments: generatePhotoComments(0, 30),
  };
};

const allPhoto = Array.from({length: ALL_PHOTO_COUNT}, createPhotoDescription);


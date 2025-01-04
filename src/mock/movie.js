import { getRandomFloat, getRandomInteger } from "../utils/getRandomNumber";
import { getRandomDate } from "../utils/formatDate";
import { DESCRIPTIONS, GENRES, POSTERS, TITLES } from "../const";
import dayjs from 'dayjs';

const DESCRIPTION_LENGTH = 139;

const getRandomIndex = array => {
  return getRandomInteger(0, array.length - 1);
};

const getDescription = () => {
  const quantity = getRandomInteger(1, 5);
  let descriptionArr = [];

  for(let i = 0; i < quantity; i++) {
    const item = DESCRIPTIONS[getRandomIndex(DESCRIPTIONS)];
    descriptionArr.push(item);
  }

  return descriptionArr.join(' ');
};

const getShortDescription = description => {
  return description.slice(0, DESCRIPTION_LENGTH).trim() + '…';
};

export const generateMovie = () => {
  const poster = POSTERS[getRandomIndex(POSTERS)] || 'made-for-each-other.png';
  const title = TITLES[getRandomIndex(TITLES)] || '';
  const rating = getRandomFloat(2, 10).toFixed(1);

  const date = getRandomDate(new Date(2000, 1, 1), new Date());
  const releaseAt = dayjs(date).format('D MMMM YYYY');
  const releaseYear = date.getFullYear();

  const hours = dayjs(date).format('H');
  const minutes = dayjs(date).format('m');
  const duration = `${+hours ? `${hours}h` : ''}${+minutes ? ` ${minutes}m` : ''}`;

  const genresQuantity = getRandomInteger(1, 3);
  let genres = [];
  let genresList = [...GENRES];

  for (let i = 0; i < genresQuantity; i++) {
    const index = getRandomIndex(genresList);
    genres.push(genresList[index]);
    genresList.splice(index, 1);
  }

  const fullDescription = getDescription() || '';
  const description = fullDescription.length < 140 ? fullDescription : getShortDescription(fullDescription);

  const commentsQuantity = getRandomInteger(0, 5);

  const isOnWatchlist = Boolean(getRandomInteger(0, 1));
  const isOnHistory = Boolean(getRandomInteger(0, 1));
  const isFavorite = Boolean(getRandomInteger(0, 1));

  return {
    poster,
    fullPoster: poster,
    title,
    originalTitle: title,
    rating,
    director: 'Steven Spielberg',
    screenwriters: 'William Goldman, Woody Allen',
    cast: 'Evan Peters, Sarah Paulson, Denis O`Hare, Jessica Lange',
    releaseAt,
    releaseYear,
    duration,
    country: 'Russia',
    genres,
    description,
    fullDescription,
    commentsQuantity,
    ageRating: '18+',
    isOnWatchlist,
    isOnHistory,
    isFavorite,
  }
}
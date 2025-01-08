import { getRandomInteger } from "../utils/getRandomNumber";

const getTextRating = num => {
  if (!num || isNaN(num)) {
    return '';
  }

  if (num <= 10) {
    return 'novice';
  }

  if (num <= 20) {
    return 'fan';
  }

  return 'movie buff';
}

export const generateProfileRating = () => {
  const int = getRandomInteger(0, 30);
  return getTextRating(int);
}
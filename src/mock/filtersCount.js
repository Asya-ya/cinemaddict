import { getRandomInteger } from "../utils/getRandomNumber";

export const generateFiltersCount = () => {
  const watchlistCount = getRandomInteger(0, 100);
  const historyCount = getRandomInteger(0, 100);
  const favoritesCount = getRandomInteger(0, 100);
  return {
    watchlistCount,
    historyCount,
    favoritesCount,
  };
}

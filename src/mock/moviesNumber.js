import { getRandomInteger } from "../utils/getRandomNumber";

export const generateMoviesNumber = () => {
  const int = getRandomInteger(10000, 200000);
  return int.toLocaleString();
}

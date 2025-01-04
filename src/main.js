import { createUserProfileTemplate } from './view/user-profile.js';
import { createMenuTemplate } from './view/menu.js';
import { createSortingTemplate } from './view/sorting.js';
import { createContentContainerTemplate } from './view/content-container.js';
import { createMoviesListTemplate } from './view/movies-list.js';
import { createTopRatedListTemplate } from './view/top-rated-list.js';
import { createMostCommentedListTemplate } from './view/most-commented-list.js';
import { createMovieCardTemplate } from './view/movie-card.js';
import { createShowMoreButtonTemplate } from './view/show-more-button.js';
import { createFooterStatisticsTemplate } from './view/footer-statistics.js';
import { generateMovie } from './mock/movie.js';
import { createMoviePopupTemplate } from './view/movie-popup.js';
import { generateMoviesNumber } from './mock/moviesNumber.js';
import { generateProfileRating } from './mock/profileRating.js';
import { generateFiltersCount } from './mock/filtersCount.js';

const MAIN_TASK_COUNT = 18;
const SHOWN_TASK_COUNT = 5;
const TOP_RATED_TASK_COUNT = 2;
const MOST_COMMENTED_TASK_COUNT = 2;
let offset = 0;

const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const getMovies = count => {
  return new Array(count).fill().map(generateMovie);
};

const renderMovies = (start = 0) => {
  for (let i = start; i < Math.min(SHOWN_TASK_COUNT + start, MAIN_TASK_COUNT); i++) {
    render(filmsListContainerElement, createMovieCardTemplate(movies[i]));
  }

  offset += SHOWN_TASK_COUNT;
};

const renderTopRatedMovies = (start = 0) => {
  for (let i = start; i < TOP_RATED_TASK_COUNT; i++) {
    render(filmsTopRatedListElement, createMovieCardTemplate(topRatedMovies[i]));
  }
};

const renderMostCommentedMovies = (start = 0) => {
  for (let i = start; i < MOST_COMMENTED_TASK_COUNT; i++) {
    render(filmsMostCommentedListElement, createMovieCardTemplate(mostCommentedMovies[i]));
  }
};

const showMoreMovies = () => {
  renderMovies(offset);
}

const movies = getMovies(MAIN_TASK_COUNT);
const topRatedMovies = getMovies(TOP_RATED_TASK_COUNT);
const mostCommentedMovies = getMovies(MOST_COMMENTED_TASK_COUNT);
const moviesNumber = generateMoviesNumber();
const profileRating = generateProfileRating();
const filtersCount = generateFiltersCount(movies);

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');

render(headerElement, createUserProfileTemplate(profileRating));
render(mainElement, createMenuTemplate(filtersCount));
render(mainElement, createSortingTemplate());
render(mainElement, createContentContainerTemplate());

const filmsContainerElement = mainElement.querySelector('.films');

render(filmsContainerElement, createMoviesListTemplate());
render(filmsContainerElement, createTopRatedListTemplate());
render(filmsContainerElement, createMostCommentedListTemplate());

const filmsListElement = filmsContainerElement.querySelector('.films-list');
const filmsListContainerElement = filmsListElement.querySelector('.films-list__container');

const filmsTopRatedElement = filmsContainerElement.querySelector('.films-list--top-rated');
const filmsTopRatedListElement = filmsTopRatedElement.querySelector('.films-list__container');

const filmsMostCommentedElement = filmsContainerElement.querySelector('.films-list--most-commented');
const filmsMostCommentedListElement = filmsMostCommentedElement.querySelector('.films-list__container');

renderMovies(0);
renderTopRatedMovies(0);
renderMostCommentedMovies(0);

render(filmsListElement, createShowMoreButtonTemplate());
const showMoreButton = filmsListElement.querySelector('.show-more');

showMoreButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  showMoreMovies();

  if (offset >= MAIN_TASK_COUNT) {
    showMoreButton.remove();
  }
});

const footer = document.querySelector('.footer');
const footerStatisticsElement = footer.querySelector('.footer__statistics');

render(footerStatisticsElement, createFooterStatisticsTemplate(moviesNumber));

const body = document.querySelector('body');

// render(body, createMoviePopupTemplate(movies[0]));

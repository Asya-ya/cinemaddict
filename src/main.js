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

const MAIN_TASK_COUNT = 5;
const TOP_RATED_TASK_COUNT = 2;
const MOST_COMMENTED_TASK_COUNT = 2;

const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');

render(headerElement, createUserProfileTemplate());
render(mainElement, createMenuTemplate());
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

for (let i = 0; i < MAIN_TASK_COUNT; i++) {
  render(filmsListContainerElement, createMovieCardTemplate());
}

for (let i = 0; i < TOP_RATED_TASK_COUNT; i++) {
  render(filmsTopRatedListElement, createMovieCardTemplate());
}

for (let i = 0; i < MOST_COMMENTED_TASK_COUNT; i++) {
  render(filmsMostCommentedListElement, createMovieCardTemplate());
}

render(filmsListElement, createShowMoreButtonTemplate());

const footer = document.querySelector('.footer');
const footerStatisticsElement = footer.querySelector('.footer__statistics');

render(footerStatisticsElement, createFooterStatisticsTemplate());
import { renderElement } from './utils/render.js';
import { RenderPosition } from './const.js';
import UserProfileView from './view/user-profile.js';
import MenuView from './view/menu.js';
import SortingView from './view/sorting.js';
import ContentContainerView from './view/content-container.js';
import MoviesListView from './view/movies-list.js';
import TopRatedListView from './view/top-rated-list.js';
import MostCommentedListView from './view/most-commented-list.js';
import MovieCardView from './view/movie-card.js';
import ShowMoreButtonView from './view/show-more-button.js';
import FooterStatisticsView from './view/footer-statistics.js';
import { generateMovie } from './mock/movie.js';
import MoviePopupView from './view/movie-popup.js';
import { generateMoviesNumber } from './mock/moviesNumber.js';
import { generateProfileRating } from './mock/profileRating.js';
import { generateFiltersCount } from './mock/filtersCount.js';
import { onEscKeyDown } from './utils/onPressDown.js';

const MAIN_TASK_COUNT = 18;
const SHOWN_TASK_COUNT = 5;
const TOP_RATED_TASK_COUNT = 2;
const MOST_COMMENTED_TASK_COUNT = 2;
let offset = 0;

const getMovies = count => {
  return new Array(count).fill().map(generateMovie);
};

const movies = getMovies(MAIN_TASK_COUNT);
const topRatedMovies = getMovies(TOP_RATED_TASK_COUNT);
const mostCommentedMovies = getMovies(MOST_COMMENTED_TASK_COUNT);
const moviesNumber = generateMoviesNumber();
const profileRating = generateProfileRating();
const filtersCount = generateFiltersCount(movies);

const renderMovie = (filmsListContainer, movie) => {
  const movieCardComponent = new MovieCardView(movie).getElement();
  const moviePopupComponent = new MoviePopupView(movie).getElement();
  const bodyComponent = document.querySelector('body');
  const movieCardTitleElement = movieCardComponent.querySelector('.film-card__title');
  const movieCardPosterElement = movieCardComponent.querySelector('.film-card__poster');
  const movieCardCommentsElement = movieCardComponent.querySelector('.film-card__comments');
  const moviePopupCloseButtonElement = moviePopupComponent.querySelector('.film-details__close-btn');

  const onPressEsc = evt => {
    onEscKeyDown(evt, closePopup);
  };

  const onClick = evt => {
    const isClickOnPopup = evt.composedPath().includes(moviePopupComponent);

    if (!isClickOnPopup) {
      closePopup();
    }
  };

  const onClickEvent = () => {
    document.addEventListener('click', onClick);
  };

  const openPopup = () => {
    bodyComponent.appendChild(moviePopupComponent);
    bodyComponent.classList.add('hide-overflow');
    document.addEventListener('keydown', onPressEsc);
    movieCardTitleElement.removeEventListener('click', openPopup);
    movieCardPosterElement.removeEventListener('click', openPopup);
    movieCardCommentsElement.removeEventListener('click', openPopup);
    setTimeout(onClickEvent, 0);
  }

  const closePopup = () => {
    bodyComponent.removeChild(moviePopupComponent);
    bodyComponent.classList.remove('hide-overflow');
    document.removeEventListener('keydown', onPressEsc);
    document.removeEventListener('click', onClick);
    movieCardTitleElement.addEventListener('click', openPopup);
    movieCardPosterElement.addEventListener('click', openPopup);
    movieCardCommentsElement.addEventListener('click', openPopup);
  }

  movieCardTitleElement.addEventListener('click', openPopup);
  movieCardPosterElement.addEventListener('click', openPopup);
  movieCardCommentsElement.addEventListener('click', openPopup);

  moviePopupCloseButtonElement.addEventListener('click', evt => {
    evt.preventDefault();
    closePopup();
  })

  renderElement(filmsListContainer, movieCardComponent);
};

const renderMovies = (start = 0) => {
  for (let i = start; i < Math.min(SHOWN_TASK_COUNT + start, MAIN_TASK_COUNT); i++) {
    renderMovie(filmsListContainerElement, movies[i]);
  }

  offset += SHOWN_TASK_COUNT;
};

const renderTopRatedMovies = (start = 0) => {
  for (let i = start; i < TOP_RATED_TASK_COUNT; i++) {
    renderMovie(filmsTopRatedListElement, topRatedMovies[i]);
  }
};

const renderMostCommentedMovies = (start = 0) => {
  for (let i = start; i < MOST_COMMENTED_TASK_COUNT; i++) {
    renderMovie(filmsMostCommentedListElement, mostCommentedMovies[i]);
  }
};

const showMoreMovies = () => {
  renderMovies(offset);
};

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');

renderElement(headerElement, new UserProfileView(profileRating).getElement());
renderElement(mainElement, new MenuView(filtersCount).getElement());
renderElement(mainElement, new SortingView().getElement());
renderElement(mainElement, new ContentContainerView().getElement());

const filmsContainerElement = mainElement.querySelector('.films');

renderElement(filmsContainerElement, new MoviesListView().getElement());
renderElement(filmsContainerElement, new TopRatedListView().getElement());
renderElement(filmsContainerElement, new MostCommentedListView().getElement());

const filmsListElement = filmsContainerElement.querySelector('.films-list');
const filmsListContainerElement = filmsListElement.querySelector('.films-list__container');

const filmsTopRatedElement = filmsContainerElement.querySelector('.films-list--top-rated');
const filmsTopRatedListElement = filmsTopRatedElement.querySelector('.films-list__container');

const filmsMostCommentedElement = filmsContainerElement.querySelector('.films-list--most-commented');
const filmsMostCommentedListElement = filmsMostCommentedElement.querySelector('.films-list__container');

renderMovies(0);
renderTopRatedMovies(0);
renderMostCommentedMovies(0);

renderElement(filmsListElement, new ShowMoreButtonView().getElement());
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

renderElement(footerStatisticsElement, new FooterStatisticsView(moviesNumber).getElement());

import { createElement } from "../utils/render";

const createMovieCardTemplate = movie => {
  return `<article class="film-card">
    <h3 class="film-card__title">${movie.title}</h3>
    <p class="film-card__rating">${movie.rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${movie.releaseYear}</span>
      <span class="film-card__duration">${movie.duration}</span>
      <span class="film-card__genre">${movie.genres[0]}</span>
    </p>
    <img src="./images/posters/${movie.poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${movie.description}</p>
    <a class="film-card__comments">${movie.commentsQuantity} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist film-card__controls-item--active" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
    </div>
  </article>`
}

export default class MovieCard {
  constructor(movie) {
    this._element = null;
    this._movie = movie;
  }

  getTemplate() {
    return createMovieCardTemplate(this._movie);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

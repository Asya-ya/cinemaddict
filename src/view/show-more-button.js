import AbstractView from "./abstract";

const createShowMoreButtonTemplate = () => {
  return `<button class="films-list__show-more show-more">Show more</button>`
}

export default class ShowMoreButton extends AbstractView {
  constructor() {
    super();
    this._clickShowMoreHandler = this._clickShowMoreHandler.bind(this);
  }

  getTemplate() {
    return createShowMoreButtonTemplate();
  }

  _clickShowMoreHandler(evt) {
    evt.preventDefault();
    this._callback.clickShowMore();
  }

  setClickShowMoreHandler(callback) {
    this._callback.clickShowMore = callback;
    this.getElement().addEventListener('click', this._clickShowMoreHandler);
  }
}

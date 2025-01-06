import { createElement } from "../utils/render";

const createFooterStatisticsTemplate = moviesNumber => {
  return `<p>${moviesNumber} movies inside</p>`
}

export default class FooterStatistics {
  constructor(moviesNumber) {
    this._element = null;
    this._moviesNumber = moviesNumber;
  }

  getTemplate() {
    return createFooterStatisticsTemplate(this._moviesNumber);
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

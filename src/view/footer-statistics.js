import AbstractView from "./abstract";

const createFooterStatisticsTemplate = moviesNumber => {
  return `<p>${moviesNumber} movies inside</p>`
}

export default class FooterStatistics extends AbstractView {
  constructor(moviesNumber) {
    super();
    this._moviesNumber = moviesNumber;
  }

  getTemplate() {
    return createFooterStatisticsTemplate(this._moviesNumber);
  }
}

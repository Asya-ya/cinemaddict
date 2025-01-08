import AbstractView from "./abstract";

const createMoviesListEmptyTemplate = () => {
  return `<h2 class="films-list__title">There are no movies in our database</h2>`
}

export default class MoviesListEmpty extends AbstractView {
  getTemplate() {
    return createMoviesListEmptyTemplate();
  }
}

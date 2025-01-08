import AbstractView from "./abstract";

const createMostCommentedListTemplate = () => {
  return `<section class="films-list films-list--extra films-list--most-commented">
  <h2 class="films-list__title">Most commented</h2>

  <div class="films-list__container"></div>
  </section>`
}

export default class MostCommentedList extends AbstractView {
  getTemplate() {
    return createMostCommentedListTemplate();
  }
}

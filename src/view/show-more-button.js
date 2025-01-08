import AbstractView from "./abstract";

const createShowMoreButtonTemplate = () => {
  return `<button class="films-list__show-more show-more">Show more</button>`
}

export default class ShowMoreButton extends AbstractView {
  getTemplate() {
    return createShowMoreButtonTemplate();
  }
}

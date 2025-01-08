import AbstractView from "./abstract";

const createContentContainerTemplate = () => {
  return `<section class="films"></section>`
};

export default class ContentContainer extends AbstractView {
  getTemplate() {
    return createContentContainerTemplate();
  }
}

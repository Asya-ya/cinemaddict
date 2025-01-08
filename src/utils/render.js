import Abstract from "../view/abstract";

import { RenderPosition } from "../const";

export const render = (container, child, place = RenderPosition.BEFOREEND) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }

  if (child instanceof Abstract) {
    child = child.getElement(); 
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
};

export const create = template => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const remove = component => {
  if (!(component instanceof Abstract)) {
    throw new Error('Can remove only components.');
  }

  component.getElement().remove();
  component.removeElement();
};

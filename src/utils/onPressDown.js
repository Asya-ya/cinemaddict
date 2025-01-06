export const onEscKeyDown = (evt, func) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    func();
  }
};

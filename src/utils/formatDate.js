export const getRandomDate = (from, to) => {
  return new Date(
    from.getTime() +
      Math.random() * (to.getTime() - from.getTime()),
  );
}

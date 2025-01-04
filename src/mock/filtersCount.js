export const generateFiltersCount = movies => {
  const watchlistCount = movies.filter(i => i.isOnWatchlist).length;
  const historyCount = movies.filter(i => i.isOnHistory).length;
  const favoritesCount = movies.filter(i => i.isFavorite).length;

  return {
    watchlistCount,
    historyCount,
    favoritesCount,
  };
}

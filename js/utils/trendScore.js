export function calculateTrendScore(repo) {
  const totalStars = repo.stargazers_count || 0;
  const totalForks = repo.forks_count || 0;

  // Log normalization to reduce bias toward very large repositories
  const starsScore = Math.log1p(totalStars);
  const forksScore = Math.log1p(totalForks);

  // Combine stars and forks (growth signals only)
  const trendScore = (0.6 * starsScore) + (0.4 * forksScore);

  return Number(trendScore.toFixed(4));
}


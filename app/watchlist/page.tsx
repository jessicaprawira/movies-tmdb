export const dynamic = "force-dynamic";

export default async function WatchlistPage() {
  let watchlist = [];

  try {
    const res = await fetch("https://your-backend-api.com/api/watchlist", {
      cache: 'no-store',
    });
    watchlist = await res.json();
  } catch (err) {
    console.error("⚠️ Failed to fetch watchlist:", err);
    watchlist = [];
  } 

  return (
    <div>
      <h1>Watchlist</h1>
      {watchlist.length === 0 ? (
        <p>Tidak ada film dalam watchlist.</p>
      ) : (
        <ul>
          {watchlist.map((movie: any) => (
            <li key={movie.id}>
              <img src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : 'https://via.placeholder.com/150x225?text=No+Image'
                }
                alt={movie.title}
                width={150}
              />
              <p>{movie.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
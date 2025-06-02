// app/page.tsx
export default async function HomePage() {
  let movies = [];

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      { cache: 'no-store' }
    );
    const data = await res.json();
    movies = data.results || [];
  } catch (e) {
    console.error("Failed to fetch movies", e);
    movies = []; // fallback
  }

  return (
    <main>
      <h1>Movie List</h1>
      {movies.length === 0 ? (
        <p>Data tidak tersedia.</p>
      ) : (
        <ul>
          {movies.map((movie: any) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
export const dynamic = "force-dynamic";

export default async function HomePage() {
  let movies = [];

  const apiKey = process.env.TMDB_API_KEY;
  console.log("🔍 TMDB_API_KEY is Loaded");

  try {
    if (!apiKey) throw new Error("❌ Missing TMDB_API_KEY");

    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      {
        cache: 'no-store',
      }
    );

    if (!res.ok) throw new Error("TMDB fetch failed");

    const data = await res.json();
    console.log("📦 TMDB RESPONSE:", data); // Tambahkan ini
    movies = data.results || [];
  } catch (error) {
    console.error("⚠️ Failed to fetch movies:", error);
    movies = [];
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
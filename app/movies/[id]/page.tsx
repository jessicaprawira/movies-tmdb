interface PageProps {
  params: { id: string };
}

export default async function MovieDetailPage({ params }: PageProps) {
  const { id } = params;
  let movie: any = null;

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`,
      { cache: 'no-store' }
    );

    if (!res.ok) throw new Error("TMDB fetch failed");

    movie = await res.json();
  } catch (error) {
    console.error("⚠️ Failed to fetch movie detail:", error);
    return <p>Gagal memuat detail film.</p>;
  }

  return (
    <main>
      <h1>{movie.title}</h1>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={300}
        />
      ) : (
        <p>Poster tidak tersedia</p>
      )}
      <p>{movie.overview}</p>
    </main>
  );
}

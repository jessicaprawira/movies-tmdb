// app/movies/[id]/page.tsx
import React from 'react';

type Params = {
  params: {
    id: string;
  };
};

export default async function MovieDetailPage({ params }: Params) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
  const data = await res.json();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.overview}</p>
    </div>
  );
}
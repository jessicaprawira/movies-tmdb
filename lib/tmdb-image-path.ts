type ImageSize =
    | 92
    | 154
    | 185
    | 200
    | 342
    | 500
    | 780
    | 1280
    | 'original'
    | undefined;

export const generateTmdbImagePath = (
    path?: string | null,
    width: ImageSize = 342,
) => {
    if (!path) return '/placeholder.svg';

    const baseUrl =
    width === 'original'
      ? 'https://image.tmdb.org/t/p/original'
      : `https://image.tmdb.org/t/p/w${width}`;

    return `${baseUrl}${path}`;
};

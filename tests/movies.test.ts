import { getMovies } from '@/actions/movies';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
          { id: 1, title: 'Inception' },
          { id: 2, title: 'Interstellar' },
        ],
      }),
  })
) as jest.Mock;

describe('getMovies', () => {
  it('should fetch movies successfully', async () => {
    const movies = await getMovies(1);

    expect(movies).toBeDefined();
    expect(Array.isArray(movies)).toBe(true);
    expect(movies.length).toBe(2);
    expect(movies[0].title).toBe('Inception');
  });
});
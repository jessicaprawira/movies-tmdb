import { getWatchlistProducts } from '@/actions/watchlist';
import MovieCard from '@/components/MovieCard';
import MovieCardWatchlistWrapper from '@/components/MovieCardWatchlistWrapper';

const WatchlistPage = async () => {
    const watchlist = await getWatchlistProducts();

    // ✅ Tambahan debug aman
    console.log("🔍 Watchlist fetched:", Array.isArray(watchlist), "Jumlah:", watchlist.length);

    return (
        <div className="container">
            <h1 className="text-xl font-bold mb-6">Your Watchlist</h1>

            {/* ✅ Tambahan debug visual saat development */}
            {process.env.NODE_ENV === 'development' && (
                <p className="text-xs text-gray-500">Watchlist length: {watchlist.length}</p>
            )}

            {watchlist.length === 0 ? (
                <p>Your watchlist is empty.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
                    {watchlist.map((movie) => (
                        <MovieCardWatchlistWrapper
                            movieId={movie.id}
                            key={movie.id}
                        >
                            <MovieCard movie={movie} />
                        </MovieCardWatchlistWrapper>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WatchlistPage;
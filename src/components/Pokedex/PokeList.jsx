import { Card } from "./Card";
import { usePokemonService } from "../../hooks/usePokemonService";
import { useEffect, useState } from "react";

export const PokeList = () => {
    const { getPokemonList, getPokemonId, getPokemonImgUrl } = usePokemonService();
    const [page, setPage] = useState(1);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const resData = await getPokemonList(page, 20);
                setData(resData);
            } catch (error) {
                console.error("Error cargando datos:", error);
            }
            setLoading(false);
        };
        loadData();
    }, [page]);

    if (loading || !data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-blue-50">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4"></div>
                    <p className="text-gray-600 text-lg">Cargando Pokédex...</p>
                </div>
            </div>
        );
    }

    const totalPages = Math.ceil(data.count / 20);

    return (
        <>
            {/* Grid de Pokemon */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {data.results.map(pokemon => {
                    const id = getPokemonId(pokemon.url);
                    const imgUrl = getPokemonImgUrl(id);
                    
                    return (
                        <Card
                            key={id}
                            id={id}
                            name={pokemon.name}
                            defaultImgUri={imgUrl}
                        />
                    );
                })}
            </div>

            {/* Paginación */}
            <div className="flex items-center justify-center gap-4 bg-white rounded-lg shadow-md p-4">
                <button 
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                    Anterior
                </button>
                
                <span className="text-gray-700 font-medium">
                    Página {page} de {totalPages}
                </span>
                
                <button 
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                    Siguiente
                </button>
            </div>
        </>
    );
}
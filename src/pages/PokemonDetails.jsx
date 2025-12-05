import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { usePokemonService } from "../hooks/usePokemonService";
export const PokemonDetails = () => {
    const { id } = useParams();
    const { getPokemonById } = usePokemonService();
    const [ pokeData, setPokeData ] = useState(null);
    const [ loading, setLoading] = useState(false);
    useEffect(
        ()=>{
            const getPokemon = async ()=>{
                setLoading(true);
                const data = await getPokemonById(id);
                setPokeData(data);
                setLoading(false);
            }
            getPokemon();
        }
    , [id, setPokeData]);
    if (loading) {
        return <div>Cargando Datos....</div>
    }
    return (
        <div className="p-6">
            {pokeData && (
                <>
                    <h2 className="font-bold text-sm">Habilidades</h2>
                    <ul className="flex gap-4">
                    {pokeData.abilities.map(ability=>{
                        return <li
                            className="rounded-full px-2 py-1 bg-amber-400"
                            key={ability.slot}>
                                {ability.ability.name}
                            </li>
                    })}
                    </ul>
                    <h2 className="font-bold text-sm mt-4">Formas</h2>
                    <ul className="flex gap-4">
                    {pokeData.forms.map(form=>{
                        return <li
                            className="rounded-full px-2 py-1 bg-amber-400"
                            key={form.name}>
                                {form.name}
                            </li>
                    })}
                    </ul>
                </>
            )
            }
        </div>
    )
}
import { Link } from "react-router";

export const Header = ({ title = "Pokédex 2025" }) => {
    return (
        <header className="bg-blue-600 text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="text-blue-100">Catálogo de Pokémon</p>
                    </div>
                    <nav>
                        <ul className="flex gap-2 items-center">
                            <li>
                                <Link 
                                    to="/" 
                                    className="inline-block px-4 py-2 text-sm font-bold hover:bg-blue-700 rounded-lg transition-colors"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/about" 
                                    className="inline-block px-4 py-2 text-sm font-bold hover:bg-blue-700 rounded-lg transition-colors"
                                >
                                    Acerca de
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
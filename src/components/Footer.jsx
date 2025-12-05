export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-12">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p>Pokédex 2025 - Todos los Derechos Reservados © {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}
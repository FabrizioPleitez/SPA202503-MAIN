import { Button } from "../Button";
import { useNavigate } from "react-router";

// component( props, context) {}
export const Card = ({ id, name, defaultImgUri }) => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 text-center border-2 border-gray-200 hover:border-blue-400">
            <div className="bg-blue-50 rounded-lg p-3 mb-3">
                <img 
                    src={defaultImgUri} 
                    alt={name}
                    className="w-24 h-24 mx-auto"
                />
            </div>
            <p className="text-gray-500 text-sm mb-1">#{String(id).padStart(3, '0')}</p>
            <h2 className="text-lg font-bold text-gray-800 capitalize">{name}</h2>
        </div>
    );
}

/*
export const CardSample = (props) => {
    const {id, name, defaultImgUri} = props;
}
*/
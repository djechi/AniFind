import type {FC} from "react";
import type { AnimeCardProps } from "../types/interfaces.ts";

const AnimeCard: FC<AnimeCardProps> = ({ title, image, genre, rating }) => {
    return(
        <div className = "items-center justify-center text-left h-[40vh] w-[32vh]">
            <img
            src = { image }
            alt = { title }
            className = "h-full w-full object-cover rounded-2xl mt-[0.6vh] hover:shadow-lg shadow-amber-300"
            />

            <p className= "font-ani-default text-ani-white-100 text-[3vh] mt-[2vh]">
                { title }
            </p>

            <p className = "font-ani-default text-ani-grey-100 text-[2vh] mt-[0.6vh]">
                Genre: { genre }
            </p>

            <p className= "font-ani-default text-ani-grey-100 text-[2vh] mt-[0.6vh]">
                Rating: { rating }
            </p>
        </div>
    );
};

export default AnimeCard;
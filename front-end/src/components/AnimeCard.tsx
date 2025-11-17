import type {FC} from "react";
import type { AnimeCardProps } from "../types/interfaces.ts";

const AnimeCard: FC<AnimeCardProps> = ({ title, image, genre, rating, episodes }) => {
    return(
        <div className = "items-center text-left h-[40vh] w-[40vh]">
            <img
            src = { image }
            alt = { title }
            className = "h-full w-full mx-auto rounded-2xl mt-[0.6vh]"
            />

            <p className= "font-ani-default text-ani-white-100 text-[3vh] mt-[0.6vh]">
                { title }
            </p>

            <p className = "font-ani-default text-ani-grey-100 text-[2vh] mt-[0.6vh]">
                Genre: { genre }
            </p>

            <p className= "font-ani-default text-ani-grey-100 text-[2vh] mt-[0.6vh]">
                Rating: { rating }
            </p>

            <p className= "font-ani-default text-ani-grey-100 text-[2vh] mt-[0.6vh]">
                { episodes } Episodes
            </p>

        </div>
    );
};

export default AnimeCard;
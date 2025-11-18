import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
const API_BASE_URL = "http://127.0.0.1:5000";

const AnimeCardDisplay = () => {
    const [trendingAnime, setTrendingAnime] = useState([]);

    useEffect(() => {
    const fetchAPI = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/home`);
            const data = await response.json();
             console.log("API Response:", data); // Show what data is being fetched
            if (data.trending) setTrendingAnime(data.trending.slice(0,12)); // Get data for 12 anime
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    fetchAPI()
    }, []);
        
    return(
        <div className= "ml-[15vw] gap-y-[30vh] grid grid-cols-3">
            {trendingAnime.map(anime => (
                <AnimeCard
                key = {anime.mal_id}
                title = {anime.title}
                image = {anime.images.jpg.image_url}

                // check if anime score exists
                rating = {anime.score ? anime.score.toString() : "N/A"}

                // only return one genre
                genre={anime.genres ? anime.genres[0].name : "N/A"}
                />
            ))}
        </div>
    );
};

export default AnimeCardDisplay;
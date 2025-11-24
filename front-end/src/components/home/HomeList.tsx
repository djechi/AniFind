import { useEffect, useState } from "react";
import AnimeCard from "../AnimeCard";
const API_BASE_URL = "http://127.0.0.1:5000";

const AnimeCardDisplay = () => {
  const [trendingAnime, setTrendingAnime] = useState([]);
  const [ratingAnime, setRatingAnime] = useState([]);

  useEffect(() => {
    const fetchTrendingList = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/home`);
        const data = await response.json();
        console.log("API Response:", data); // Show what data is being fetched
        if (data.trending) setTrendingAnime(data.trending.slice(0, 12)); // Get data for 12 anime
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const fetchRatingList = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/home`);
        const data = await response.json();
        console.log("API Response:", data); // Show what data is being fetched
        if (data.rating) setRatingAnime(data.rating.slice(0, 12)); // Get data for 12 anime
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    fetchTrendingList();
    fetchRatingList();
  }, []);

  return (
    <div className="w-full h-full justify-center items-center ml-[8.4vw]">
      <div className="mt-[10vh]">
        <p className="font-ani-default text-ani-white-100 text-[5vh] mb-[3vh] text-left">
          Trending Anime
        </p>

        <div className="grid grid-cols-3 gap-y-[30vh]">
          {trendingAnime.map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              title={anime.title}
              image={anime.images.jpg.image_url}
              // check if anime score exists
              rating={anime.score ? anime.score.toString() : "N/A"}
              // only return one genre
              genre={anime.genres ? anime.genres[0].name : "N/A"}
            />
          ))}
        </div>
      </div>

      <div className="mt-[36vh]">
        <p className="font-ani-default text-ani-white-100 text-[5vh] mb-[3vh] text-left">
          Highest Rated Anime
        </p>

        <div className="grid grid-cols-3 gap-y-[30vh]">
          {ratingAnime.map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              title={anime.title}
              image={anime.images.jpg.image_url}
              rating={anime.score ? anime.score.toString() : "N/A"}
              genre={anime.genres ? anime.genres[0].name : "N/A"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeCardDisplay;

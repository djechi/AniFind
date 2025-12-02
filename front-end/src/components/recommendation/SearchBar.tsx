import AnimeCard from "../../components/AnimeCard";
import React, { useState, useEffect } from "react";
import SearchButtonImage from "../../../public/recommend/Search.webp";
import SearchTitle from "./SearchTitle";
import LoadingGIF from "../../../public/recommend/loading.webp";

const API_BASE_URL = "http://127.0.0.1:5000";

const SearchBar = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setloading] = useState(false);
  const [showRecommendTitle, setShowRecommendTitle] = useState("");

  useEffect(() => {
    // Gets suggestions for search bar autofill
    const fetchSuggestions = async () => {
      try {
        if (showSuggestions == true && query.length >= 3) {
          const response = await fetch(
            `${API_BASE_URL}/suggestions?query=${query}`,
          );
          const data = await response.json();
          console.log("API Response:", data);
          if (data.data) {
            setSuggestions(data.data.slice(0, 8));
          }
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    fetchSuggestions();
  }, [query, showSuggestions]);

  // Gets recommendation list after pressing button
  const fetchRecommendations = async () => {
    try {
      setloading(true);
      setRecommendations([]);
      const response = await fetch(
        `${API_BASE_URL}/recommendations?anime_id=${selectedAnime.mal_id}`,
      );
      const data = await response.json();
      console.log("API Response:", data);

      if (data.data) {
        const recommendedAnime = data.data
          .map((item) => item.entry)
          .slice(0, 15);
        setRecommendations(recommendedAnime);
      }
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setloading(false); // Loading is stopped no matter if successful or error occurs
      setShowRecommendTitle(selectedAnime?.title);
    }
  };

  // Handles search button click
  const handleAnimeClick = (anime) => {
    setSelectedAnime(anime);
    setQuery(anime.title);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  // Handles clicking suggestion inputs
  const handleInputChange = (e) => {
    setQuery(e.target.value);

    if (e.target.value.length < 3) {
      setSuggestions([]);
      setShowSuggestions(false);
    } else {
      setShowSuggestions(true);
    }
  };

  return (
    <div className="flex flex-col mb-[20vh] items-center justify-center w-full h-full">
      <SearchTitle />

      {loading == true && (
        <div className="fixed z-50 top-[40vh] w-[40vw]">
          <img src={LoadingGIF} alt="Loading Edward" />
        </div>
      )}

      <div className="flex flex-row mx-auto bg-ani-grey-300 rounded-2xl w-[20vw] h-[6vh] py-2 px-3 mt-[3vh] relative">
        <button onClick={fetchRecommendations} className="cursor-pointer">
          <img
            src={SearchButtonImage}
            alt="Search Button Image"
            className="w-[2vw] h-[3vh]"
          />
        </button>

        <input
          className="text-left text-ani-white-100 focus:outline-none ml-[1vw] w-[20vw]"
          type="text"
          placeholder="Search for anime..."
          value={query}
          onChange={handleInputChange}
        />

        {suggestions.length > 0 && showSuggestions == true && (
          <div className="bg-ani-grey-100 mt-[5vh] absolute z-10 left-0 rounded-xl"
          data-testid="suggestions-container">
            {suggestions.map((anime) => (
              <div
                key={anime.mal_id}
                onClick={() => handleAnimeClick(anime)}
                className="cursor-pointer hover:bg-ani-grey-200 rounded-xl px-[5vw] py-[0.6vh] text-[1.6vh]"
              >
                {anime.title}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mx-auto text-center justify-center mt-[40vh]">
        {recommendations.length > 0 && ( // Display anime recommendation title if list is not empty
          <p className="text-ani-white-100 text-[4vh]">
            Recommended anime based on {showRecommendTitle}
          </p>
        )}
      </div>

      <div className="mt-[10vh] grid grid-cols-3 gap-y-[20vh] gap-x-[15vw]">
        {recommendations.map((anime) => (
          <AnimeCard
            key={anime.mal_id}
            title={anime.title}
            image={anime.images.jpg.image_url}
            // check if anime score exists
            rating={anime.score ? anime.score.toString() : null}
            // only return one genre
            genre={anime.genres ? anime.genres[0].name : null}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;

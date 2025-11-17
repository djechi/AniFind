import AnimeCard from "./AnimeCard";

const AnimeCardDisplay = () => {
    return(
        <>
            <AnimeCard 
            title = "Death Note"
            image = "/AnimeCardExample.webp"
            rating = "10"
            genre = "Thriller"
            episodes = "24"
            />
        </>
    );
};

export default AnimeCardDisplay;
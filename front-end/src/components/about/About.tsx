const AboutSection = () => {
  return (
    <div className="mt-[8vh] mb-[8vh] flex flex-col justify-center text-center items-center h-full w-full">
      <div className="max-w-2xl px-4">

        <p className="mt-[5vh] font-ani-default text-ani-white-100 text-[4vh]">
          Our Goal
        </p>

        <p className="mt-[2vh] font-ani-default text-ani-grey-200 text-[3vh] text-left">
          Anime is a diverse medium of animation from Japan that contains many different genres. 
          Due to its sheer volume, it can be difficult for new viewers to discover anime shows and 
          movies they would enjoy watching. This project is interesting to us as it looks to solve 
          this issue. As such, creating a recommendation website dedicated to anime can help others 
          explore this niche and gain insight about different anime that align with their tastes.
        </p>

        <p className = "mt-[5vh] font-ani-default text-ani-white-100 text-[4vh]">
          Contributors
        </p>

        <ul className="mt-[2vh] font-ani-default text-ani-grey-200 text-[3vh] list-none">
          <li> DJ Echipare </li>
          <li> Alvin Truong </li>
          <li> Bryce Lu </li>
          <li> Daniel Kim </li>
        </ul>
        
      </div>
    </div>
  );
};

export default AboutSection;
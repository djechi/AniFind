const AboutSection = () => {
  return (
    <div className="mt-[12vh] mb-[6.5vh] flex flex-col justify-center text-center items-center h-full w-full">
      <div className="w-[60vw] h-[40vh]">
        <p className="font-ani-default text-ani-white-100 text-[4vh]">
          Our Goal
        </p>

        <p className="mt-[2vh] font-ani-default text-ani-grey-200 text-[3vh] text-center">
          Anime is a diverse medium of animation from Japan that contains many
          different genres. Due to its sheer volume, it can be difficult for new
          viewers to discover anime shows and movies they would enjoy watching.
          This project is interesting to us as it looks to solve this issue. As
          such, creating a recommendation website dedicated to anime can help
          others explore this niche and gain insight about different anime that
          align with their tastes.
        </p>
      </div>
      <div className="mt-[4vh] w-[50vw] h-[28vh]">
        <p className="font-ani-default text-ani-white-100 text-[4vh]">
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

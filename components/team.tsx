import * as React from "react";

interface PersonCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="flex gap-2.5">
      <img loading="lazy" src={imageUrl} alt={`${name}'s profile picture`} className="shrink-0 aspect-square w-[50px] h-[50px]" />
      <div className="flex flex-col my-auto">
        <div className="text-base font-medium">{name}</div>
        <div className="text-sm font-semibold">{role}</div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const people = [
    {
      name: "Остащенко Всеволод Игоревич",
      role: "Dev",
      imageUrl: "/team/vsecoder.png",
    },
    {
      name: "Труфанова Анастасия Максимовна",
      role: "HR",
      imageUrl: "/team/enestasy.png",
    },
    {
      name: "Николаев Михаил",
      role: "Designer",
      imageUrl: "/team/norm.png",
    },
  ];

  return (
    <div className="p-5">
        <section className="px-12 pt-4 mt-10 max-w-full bg-blue-600 rounded-[30px] w-[1240px] max-md:px-5 m-auto">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 justify-between text-base font-semibold whitespace-nowrap">
                    <div className="flex gap-2.5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a098b7fae40b63359a06bbd1c997cbf9f3070043a1dc7b4707cf9e264e1e9480?apiKey=d49383280f714f4bbba4cebef6a2a99d&" alt="FrogShop logo" className="shrink-0 aspect-[1.1] w-[33px]" />
                        <div className="my-auto">FrogShop</div>
                    </div>
                    <div className="my-auto text-xl font-bold">//</div>
                    <div className="flex gap-2.5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e1c235b76763d6e5a35080a2f8622349bd97f5e51a528a4a27dd4284169ff6c?apiKey=d49383280f714f4bbba4cebef6a2a99d&" alt="FeedFrog logo" className="shrink-0 aspect-[1.1] w-[33px]" />
                        <div className="my-auto">FeedFrog</div>
                    </div>
                    </div>
                    <h1 className="self-stretch mt-5 text-4xl font-bold max-md:max-w-full">
                    Хакатон по AI
                    </h1>
                    <div className="justify-center px-8 py-2.5 mt-5 text-xl font-bold text-blue-600 bg-white rounded-xl max-md:px-5">
                    Искусственный интеллект в e-com
                    </div>
                    <div className="flex gap-5 justify-between self-stretch mt-6 max-md:flex-wrap">
                    {people.map((person, index) => (
                        <PersonCard key={index} name={person.name} role={person.role} imageUrl={person.imageUrl} />
                    ))}
                    </div>
                </div>
                </div>
                <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                <img loading="lazy" src="/frogbook.png" alt="Hackathon banner" className="grow w-full aspect-[1.37] max-md:mt-8 max-md:max-w-full" />
                </div>
            </div>
        </section>
    </div>
  );
};

export default Team;
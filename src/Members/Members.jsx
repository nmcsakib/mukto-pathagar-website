import { CiCircleChevUp, CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useParams } from "react-router-dom";
import member from '../assets/member.png';

const Members = () => {

  const {members} = useParams();
  console.log(members);
    const cards = [
      {
        id: 1,
        img: member,
        name: "Harly Rayan",
      },
      {
        id: 2,
        img: member,
        name: "Harly Rayan",
      },
      {
        id: 3,
        img: member,
       work:"Marketing Head",
        name: "Kathryn Murphy",
      },
      {
        id: 4,
        img: member,
        name: "Kathryn Murphy",
      },
      {
        id: 5,
        img: member,
       work:"Marketing Head",
        name: "Kathryn Murphy",
      },
      {
        id: 6,
        img: member,
        name: "Kathryn Murphy",
      },
      
    ];
    return (
      <div className=" py-10 font-['Poppins']" id="team">
        <div className="container mx-auto">
          <div className="">
          <SectionTitle title={members}/>
           
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-4  gap-3 py-10 px-5">
            {cards.map((card, i) => (
              <div key={i} className="flex bg-[#DEDEDE] p-3 flex-col items-center  relative rounded-xl shadow-lg">
               <div className="relative">
               <img src={card.img} alt="" className="w-80 h-64 rounded-2xl" />
                
               </div>
                <p className="text-2xl  font-semibold  py-2">
                  {card.name}
                </p>
                <p>{card.work}</p>
                <div className="flex flex-row gap-5 p-3 text-xl">
                <CiFacebook className="text-orange-500"/>
                <CiTwitter/>
                <CiLinkedin/>
                <CiCircleChevUp/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Members;
  
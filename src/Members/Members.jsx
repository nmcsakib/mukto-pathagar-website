import SectionTitle from "../SectionTitle/SectionTitle";
import { useLocation, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaFacebook, FaInstagram, FaLinkedin, } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import { FaXTwitter } from "react-icons/fa6";
import { SwiperNavButtons } from "../components/SwiperNavButtons";
import { useEffect, useState } from "react";

const Members = () => {

 

  const { members } = useParams();
  const [membersData, setMembersData] = useState([]);
  const [MemberData, setMemberData] = useState([]);
  const link = useLocation();
  useEffect(() => {
       fetch(`${import.meta.env.VITE_SERVER}/members`).then(res => res.json()).then(data => {
        
         if(members === "Committee-Members"){
          const mems = data.filter(datum => datum?.type === "Committee")
          setMembersData(mems)
         }
         else if(members === "Adviser-Members"){
          const mems = data.filter(datum => datum?.type === "Adviser")
          setMembersData(mems)
         } 
         else if(members === "Guest-Members"){
          const mems = data.filter(datum => datum?.type === "Guest")
          setMembersData(mems.length < 1 ? data : mems)
         } 
         else if(members === "General-Members"){
          const mems = data.filter(datum => datum?.type === "General")
          setMembersData(mems.length < 1 ? data : mems)
         } 
         else if(members === "Life-time-Members"){
          const mems = data.filter(datum => datum?.type === "Life-time")
          setMembersData(mems.length < 1 ? data : mems)
         } 
         else{
          setMembersData(data)
         }
        console.log('data from server',data)})
   
  }, [members]);
  console.log(membersData, members);

  return (
    <div className=" pb-10 " id="team">
      <div className="container mx-auto">
        <div>
          <SectionTitle pathname={(link.pathname)} title={members} />

        </div>
        {
          members == "Founder" ? <>

            <div className="pb-10 px-5 text-black">
              <div className="flex bg-[#DEDEDE] p-3 flex-col items-center  relative rounded-xl shadow-lg">
                <div className="relative w-50 h-50 rounded-full">
                  <img src="https://i.ibb.co/Cpc1y0Xg/image.png" className="w-full h-full object-cover object-center rounded-full" />

                </div>
                <p className="text-2xl  font-semibold  py-2">
                  AbdullahIbne Sazid Tahmid
                </p>
                <p>Founder</p>
                <div className="flex flex-row gap-5 p-3 text-xl">
                  <a className="hover:text-blue-400" href="https://www.facebook.com/abdullahibne.Sazid"><FaFacebook /></a>
                  <a className="hover:text-blue-400" href="https://google.com">
                    <FaXTwitter />

                  </a>
                  <a className="hover:text-blue-400" href="https://google.com">
                    <FaInstagram />
                  </a>
                  <a className="hover:text-blue-400" href="https://google.com">
                    <FaLinkedin />
                  </a>

                </div>
              </div>
            </div>

          </> : <>

            <div className="py-10 px-5 text-black select-none">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                modules={[Autoplay, Navigation]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                loop={true}
                autoplay={{ delay: 3000 }}
                className="mySwiper"
              >

                {membersData.map((member, i) => (
                  <SwiperSlide keykey={i}>

                    <div className="flex p-3 flex-col items-center  relative rounded-xl  text-base-content">
                      <div className=" rounded-2xl flex flex-col justify-center items-center custom-shadow px-5 py-8 md:min-w-[300px]">
                        <div className="relative w-50 h-50 rounded-full">
                          <img src={member.image} alt="" className="w-full h-full object-cover  rounded-full"  />

                        </div>
                        <p className="md:text-2xl text-xl font-semibold  py-2">
                          {member.name}
                        </p>
                        <p className="w-2/3 text-center">{member.designation}</p>
                        <div className="flex flex-row gap-5 p-3 text-xl">
                          <a href="https://google.com"><FaFacebook /></a>
                          <a href="https://google.com">
                            <FaXTwitter />

                          </a>
                          <a href="https://google.com">
                            <FaInstagram />
                          </a>
                          <a href="https://google.com">
                            <FaLinkedin />
                          </a>

                        </div>
                        <button onClick={() => { 
                          document.getElementById('my_modal_4').showModal() 
                          setMemberData(member)
                          }} className="btn bg-[#37a033] hover:bg-[#73da6f] mt-2 ">Details</button>
                      </div>
                    </div>
                  </SwiperSlide>

                ))}
                <SwiperNavButtons />
              </Swiper>

              {/* navigation button */}
            </div>
          </>
        }


        <dialog id="my_modal_4" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{MemberData.name}</h3>
            <p className="py-4">Contact Number: {MemberData.mobile}</p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default Members;

import React from "react";

// marquee data
import SectionTitle from "../SectionTitle/SectionTitle";
import { partnersData } from "../contents/content";

const Partners = () => {

    const doubledComponents = partnersData ? [...partnersData, ...partnersData] : [];

    return (
        <div className="container mx-auto px-8 my-20">
            <SectionTitle title={"Our Partners"} pathname={'/'}/>

            <div
                className="slider-container w-full flex-nowrap relative overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">

                <div className="marqueeSliderLeft flex items-center gap-5 mb-5">
                    {
                        doubledComponents.map((item, index) => (<>
                            <img className="w-20" key={index} src={item.image} alt="" />
                            </>
                        ))
                    }
                </div>

            </div>

            <div className="slider-container w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <div className="marqueeSliderRight flex items-center gap-5 w-[50%] 1404px:w-[100%] justify-center">
                    {
                        partnersData?.map((item, index) => (<img key={index} className="w-20" src={item.image} alt="" />
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Partners;
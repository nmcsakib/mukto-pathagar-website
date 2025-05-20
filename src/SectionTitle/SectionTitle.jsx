import React from 'react';

const SectionTitle = ({title, descrition}) => {
  return (
    <div>
       <div className="mt-16">
      <h2
        className="text-3xl md:text-5xl  text-stone-700 font-bold"
      >
        {title}
      </h2>
      <p className=" mt-4 text-stone-400 w-1/3" >
        {descrition}
      </p>
    </div>

          <div className="divider"></div>
    </div>
  );
};

export default SectionTitle;
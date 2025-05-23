import React from 'react';
import { useNavigate } from 'react-router-dom';

const SectionTitle = ({pathname, title, descrition }) => {
  console.log(pathname);
  const decodedPath = decodeURIComponent(pathname);
const navigate = useNavigate();
;
  return (
    <div>
      <div className="mt-16">
        {
          (pathname != '/' || pathname == undefined) && <>
            <div className=" text-sm py-2">
  <ul className='flex items-center gap-3'>
    <li><a onClick={() => navigate('/')} className='hover:underline cursor-pointer'>Home</a></li>
    <li className='capitalize'>{decodedPath?.replaceAll('/',' → ')}</li>
  </ul>
</div>
          </>
        }
        <h2
          className="text-3xl md:text-4xl  font-bold" >
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
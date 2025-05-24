import React from 'react';
import { useNavigate } from 'react-router-dom';

const SectionTitle = ({pathname, title }) => {
  console.log(pathname);
  const decodedPath = decodeURIComponent(pathname);
const navigate = useNavigate();
;
  return (
    <>
      <div className="mt-16 ml-4">
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
          className="text-3xl md:text-4xl text-center  font-bold text-lime-500" >
          {title}
        </h2>
       
      </div>

      <div className="divider"></div>
    </>
  );
};

export default SectionTitle;
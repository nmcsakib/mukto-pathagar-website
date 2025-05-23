import React from 'react';
import team from '../assets/team.webp';
import team2 from '../assets/team2.webp';

const Album = () => {
    return (
        <div className='md:h-[300px] h-[200px] mt-20 '>
            <figure className="diff aspect-16/9 h-full" tabIndex={0}>
  <div className="diff-item-1" role="img" tabIndex={0}>
    <img alt="daisy" src={team} />
  </div>
  <div className="diff-item-2" role="img">
    <img className=''
      alt="daisy"
      src={team2} />
  </div>
  <div className="diff-resizer"></div>
</figure>
        </div>
    );
};

export default Album;
import SectionTitle from '../SectionTitle/SectionTitle';
import EventImage1 from '../assets/banner-circle-image.png'
import { useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { eventsData } from '../contents/content';
import { useState } from 'react';

const Events = () => {

  const { t } = useTranslation();
  const { year } = useParams();
  const link = useLocation();
    const [full, setFull] = useState(false)
  return (
    <section className='container mx-auto px-8'>
      <SectionTitle pathname={link.pathname} title={t("Events")} description={`Events of ${year}`} />

      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

          {
            eventsData.map(event => {
              if (event?.id % 2 === 0) {
                return (
                  <li>
                    <hr />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end md:mb-10">
                      <time className="font-mono italic">{year}</time>
                     <div className="text-lg font-black">{event?.title}</div>
                    <p dangerouslySetInnerHTML={{__html: full ? event?.description : event?.description.slice(0, 250) + '...'}} className='text-lg leading-relaxed inline'></p> <span className={`${full === true ? 'hidden' : 'font-bold inline cursor-pointer'}`} onClick={() => setFull(true)}>Read More</span>
                      <div className="grid grid-cols-3 gap-10">
                      {
                        event?.pictures?.map(pic => <img className='' src={pic} alt="" />)
                      }
                      </div>
                    </div>
                    <hr />
                  </li>
                )
              } else {
                return (
                  <li>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                     <div className="timeline-start mb-10 md:text-end">
                      <time className="font-mono italic">{year}</time>
                     <div className="text-lg font-black">{event?.title}</div>
                    
                      <p dangerouslySetInnerHTML={{__html: full ? event?.description : event?.description.slice(0, 250) + '...'}} className='text-lg leading-relaxed inline'></p> <span className={`${full === true ? 'hidden' : 'font-bold inline cursor-pointer'}`} onClick={() => setFull(true)}>Read More</span>
                      <div className="grid grid-cols-3 gap-10 mt-5">
                      {
                        event?.pictures?.map(pic => <img className='' src={pic} alt="Event Photo" />)
                      }
                      </div>
                    </div>
                    <hr />
                  </li>
                )
              }

            })
          }


        </ul>
      </div>
    </section>
  );
};

export default Events;
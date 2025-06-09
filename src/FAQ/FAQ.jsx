import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useTranslation } from 'react-i18next';
import { faqData } from '../contents/content';

const FAQ = () => {
  const {t} = useTranslation();
    return (

        <div className='container mx-auto px-8' >
            <SectionTitle pathname={'/'} title={t('faq')}/>
        {
          faqData.map((data, i) =>  <div key={i} className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked={i === 0 ? true : false} />
  <div className="collapse-title font-semibold">{data.question}</div>
  <div className="collapse-content text-sm">{data?.answer}</div>
</div>)
        }

        </div>
    );
};

export default FAQ;
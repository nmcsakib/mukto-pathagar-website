import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const {t} = useTranslation();
    return (

        <div className='container mx-auto px-8' >
            <SectionTitle pathname={'/'} title={t('faq')}/>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold">পাঠাগারের সদস্য হবো কিভাবে?</div>
  <div className="collapse-content text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dicta earum, totam, blanditiis possimus mollitia quo, aliquam placeat architecto corporis aperiam magnam! Quo exercitationem neque distinctio officiis totam necessitatibus ad!</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">বই কি বাড়িতে নিয়ে যেতে পারবো ?</div>
  <div className="collapse-content text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dicta earum, totam, blanditiis possimus mollitia quo, aliquam placeat architecto corporis aperiam magnam! Quo exercitationem neque distinctio officiis totam necessitatibus ad!</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">পাঠাগার  থেকে কি কি সেবা মূলক কাজ করা হয় ?</div>
  <div className="collapse-content text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dicta earum, totam, blanditiis possimus mollitia quo, aliquam placeat architecto corporis aperiam magnam! Quo exercitationem neque distinctio officiis totam necessitatibus ad!</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">ভাই কি বিবাহিত ?</div>
  <div className="collapse-content text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dicta earum, totam, blanditiis possimus mollitia quo, aliquam placeat architecto corporis aperiam magnam! Quo exercitationem neque distinctio officiis totam necessitatibus ad!</div>
</div>
        </div>
    );
};

export default FAQ;
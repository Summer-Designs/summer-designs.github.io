import React from 'react';
import { workListData } from '../data/WorkListData';

export default function WorkList() {
  return (
    <div className="grid grid-cols-2 gap-8 my-16 mx-8 md:mx-16 lg:mx-24">
      {workListData.map(([tag, title, url, applyClass]) => (
        <div className={'flex flex-col ' + applyClass}>
          <div className="relative h-48 lg:h-96 overflow-hidden bg-no-repeat rounded-3xl">
            <img
              src={url}
              class=" h-max transition duration-300 ease-in-out hover:scale-110 hover:opacity-70"
              alt="Work"
            />
          </div>
          <div className="p-4">
            <div className="flex flex-row justify-between items-center text-white">
              <div className="uppercase body-text">{tag}</div>
              <h5>{title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import React from 'react';
import { insightListData } from '../data/InsightListData';

export default function InsightList() {
  return (
    <div className="flex flex-col gap-4">
      {insightListData.map(
        ([title, description, url, date, showHomeScreen]) =>
          showHomeScreen && (
            <div className="sd-card p-4 flex flex-col md:flex-row gap-2 md:gap-2">
              <div
                className="h-80 md:h-auto md:w-3/5 bg-cover bg-center rounded-2xl"
                style={{ backgroundImage: "url('" + url + "')" }}
              ></div>
              <div className="p-3 flex flex-col text-left gap-4 md:gap-2">
                <h3 className="md:hidden">{title}</h3>
                <h4 className="hidden md:block">{title}</h4>
                <div className="text-gray">{description.substring(0, 130) + '...'}</div>
                <div className="text-gray/50 mt-2">{date}</div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

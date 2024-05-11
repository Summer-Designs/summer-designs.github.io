import React from 'react';
import { insightListData } from '../data/InsightListData';

export default function InsightList() {
  return (
    <div className="flex flex-col gap-4">
      {insightListData.map(
        ([title, description, url, date, showHomeScreen]) =>
          showHomeScreen && (
            <div className="sd-card p-4 flex flex-col">
              <div
                className="h-80 mb-4 bg-cover bg-center rounded-2xl"
                style={{ backgroundImage: "url('" + url + "')" }}
              ></div>
              <div className="p-3 flex flex-col text-left gap-4">
                <h3>{title}</h3>
                <div className="text-gray">{description.substring(0, 130) + '...'}</div>
                <div className="text-gray/50 mt-2">{date}</div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

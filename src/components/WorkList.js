import React from 'react';
import { workListData } from '../data/WorkListData';

export default function WorkList() {
  return (
    <div className="flex flex-col gap-4">
      {workListData.map(
        ([tag, year, title, description, url, showHomeScreen]) =>
          showHomeScreen && (
            <div className="flex flex-col gap-4">
              <div
                className="h-80 bg-cover bg-center rounded-3xl"
                style={{ backgroundImage: "url('" + url + "')" }}
              ></div>
              <div className="sd-card p-8 flex flex-col gap-16">
                <div className="flex flex-row justify-between text-gray">
                  <div className="uppercase">{tag}</div>
                  <div>{year}</div>
                </div>
                <div className="flex flex-col text-left gap-4">
                  <h3>{title}</h3>
                  <div className="text-gray">{description}</div>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

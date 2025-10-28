import React from "react";
import { clientReviews } from "../constants";

function Clients() {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear From my Co-worers and higher Aboves</h3>
      <div className="client-container">
        {clientReviews.map(({ id, name, review, position, img }) => {
          return (
            <div key={id} className="client-review">
              <p className="text-white font-light">{review}</p>
              <div className="client-content">
                <div className="flx gap-3">
                  <img className="h-[200px]" src={img} alt={name} />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{name}</p>
                    <p className="text-white-700 md:text-base text-sm font-light">
                      {position}
                    </p>
                  </div>
                </div>
                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => {
                    return <img key={index} src="/assets/star.png" />;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Clients;

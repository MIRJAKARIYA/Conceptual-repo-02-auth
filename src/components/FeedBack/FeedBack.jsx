import React from "react";

const FeedBack = ({ feedBackData }) => {
 
  return (
    <div className="grid grid-cols-3 gap-6">
      {feedBackData.map((feed) => (
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <img
                src={feed.userImg}

                className="w-12 h-12 rounded-full"
                alt=""
              />
              <h2 className="ml-4">{feed.name}</h2>
              <p className="">{new Date().toLocaleDateString()}</p>
            </div>

            <p>{feed.review}</p>
            <div className="card-actions justify-end items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedBack;

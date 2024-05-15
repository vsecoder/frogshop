"use client";

import StarRating from './stars';
import * as React from "react";


interface ProductCardProps {
  id: string;
  image: string;
  text: string;
  rating: number;
  price: number;
}

export default function Card({ id, image, text, rating, price }: ProductCardProps) {
  return (
    <div className="flex flex-col grow max-md:mt-5 min-w-[190px] md:max-w-full">
      <div className="flex flex-col items-start pb-7 w-full bg-white shadow-2xl rounded-[30px]">
        <div className="flex justify-center items-center self-stretch bg-blue-600 border border-blue-600 border-solid rounded-[30px]">
          <img
            loading="lazy"
            src={image}
            alt={`${text} product`}
            className="max-w-full w-full"
          />
        </div>
        <div className="mt-7 px-7 text-base font-medium text-stone-950 max-md:px-6">
          {text}
          <StarRating rating={rating} color="white" />
        </div>
        <div className="mt-1.5 px-7 text-xl font-bold text-stone-950 max-md:px-6">
          {price.toFixed(2)}$
        </div>
      </div>
      <button
        className="justify-center items-center px-16 py-4 mt-2.5 text-xl font-medium text-white whitespace-nowrap bg-blue-600 rounded-[10000px] max-md:px-5 cursor-pointer"
        onClick={() => window.location.href = `/products/${id}`}
      >
        Перейти
      </button>
    </div>
  );
};
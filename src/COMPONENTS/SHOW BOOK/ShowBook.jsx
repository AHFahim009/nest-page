import React from "react";

const ShowBook = (props) => {
  console.log(props.book);
  const { image, price, title, isbn13, subtitle } = props.book;
  return (
    <div className="">
      <div className=" overflow-hidden relative transition duration-200 transform   hover:-translate-y-2 rounded shadow-lg ">
        <img src={image} alt="" className="w-full object-cover" />

        <div
          className="bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-white 
        absolute inset-0 transition-opacity duration-200"
        >
          <p>{title}</p>
          <br />
          <p>{subtitle}</p>
          <br />
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;

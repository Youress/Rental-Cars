import React, { useState, useEffect } from "react";

const CarsCard = ({car}) => {
 const {description,gear,id,imageUrl,name,price,seater,type} = car
 

  return (
    <div className="bg-white shadow-2xl rounded-md min-w-64	">
      <button className="pointer p-4 text-left">
<div>
<div>
  <h4>{name}</h4>
  <p>{description}</p>
</div>
<div className="max-w-52">
  <img src={imageUrl} loading="lazy" alt={name} />
</div>
<div></div>
<div>
  <p>${price}<span>/day</span></p>
</div>
</div>
      </button>
    </div>
  );
};

export default CarsCard;

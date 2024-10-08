import React from "react";
import PropTypes from "prop-types";

const Card = ({ IconComponent, Item, value }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg w-fit p-6 text-center m-4">
      <div className="flex items-center justify-center text-gray-600 mb-4">
        <IconComponent className="w-6 h-6 mr-2" />
        <span className="text-lg font-medium">{Item}</span>
      </div>
      <div className="text-black text-5xl font-bold">{value}</div>
    </div>
  );
};

Card.propTypes = {
  IconComponent: PropTypes.elementType.isRequired,
};

export default Card;

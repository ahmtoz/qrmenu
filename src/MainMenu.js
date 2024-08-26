import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MenuItem
          image="./images/food.jpg"
          title="Yiyecekler"
          link="/foods"
        />
        <MenuItem
          image="./images/drink.jpg"
          title="İçecekler"
          link="/drinks"
        />
      </div>
    </div>
  );
};

const MenuItem = ({ image, title, link }) => (
    <Link to={link} className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </Link>
  );

export default MainMenu;

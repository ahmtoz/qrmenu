import React from 'react';
import { Link } from 'react-router-dom';

const DrinkPage = () => {
  const items = Array.from({ length: 4 }, (_, index) => `İçecek ${index + 1}`);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">İçecekler</h1>
      <div className="mb-4">
        <Link to="/" className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">Ana Menü</Link>
        <Link to="/foods" className="px-4 py-2 bg-green-500 text-white rounded">Yiyecekler</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <img src={`/images/drinks/drink${index + 1}.jpeg`} alt={item} className="w-full h-96 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{item}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkPage;

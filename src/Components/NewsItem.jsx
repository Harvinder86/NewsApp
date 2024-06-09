import React from 'react';

function NewsItem({ sourceName, title, desc, imageURL, newsUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 h-full flex flex-col justify-between">
      <img src={imageURL} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex-grow">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{desc}</p>
        <p className="text-gray-600 italic text-sm mb-4">Source: {sourceName}</p>
      </div>
      <div className="p-4">
        <a href={newsUrl} className="text-white bg-blue-500 hover:bg-blue-700 transition-colors duration-300 px-4 py-2 rounded-md block text-center">Read more</a>
      </div>
    </div>
  );
}

export default NewsItem;

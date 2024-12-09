import React from 'react';

interface Props {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<Props> = ({ title, desc, img, tags }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      {/* Image */}
      <div className="w-full h-60 mb-4 overflow-hidden rounded-md">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2 ">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-base mb-4">{desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className=" bg-yellow-200 text-blue-800 px-3 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;


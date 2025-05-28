import React from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  const lists = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <ul className="flex gap-6">
      {lists.map((item, index) => (
        <li key={index}>
          <Link to={item.to} className="py-[10px] inline-block">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;

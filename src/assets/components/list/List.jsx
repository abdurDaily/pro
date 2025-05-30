import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const List = ({ className = '', onItemClick }) => {
  const lists = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    {
      label: 'Courses',
      to: '/courses',
      children: [
        { label: 'Web Development', to: '/courses/web' },
        { label: 'Data Science', to: '/courses/data-science' },
        { label: 'AI & ML', to: '/courses/ai' },
      ],
    },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <ul className={`flex gap-6 ${className}`}>
      {lists.map((item, index) => (
        <li
          key={index}
          className="relative group w-full before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[3px] before:bg-[#86fcaf] before:transition-all before:duration-300"
        >
          <Link
            to={item.to}
            onClick={onItemClick}
            className="block w-full py-2 hover:text-[#5FE98C] text-[#1C1D20] font-medium flex items-center gap-1"
          >
            {item.label}
            {item.children && <MdOutlineKeyboardArrowDown className="text-[18px]" />}
          </Link>

          {item.children && (
            <ul
              className="
                absolute 
                top-full 
                left-0 
                min-w-[150px] 
                bg-white 
                shadow-md 
                rounded-md 
                z-20
                hidden 
                group-hover:block
              "
            >
              {item.children.map((child, cIndex) => (
                <li key={cIndex}>
                  <Link
                    to={child.to}
                    onClick={onItemClick}
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;

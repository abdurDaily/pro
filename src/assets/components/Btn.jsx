import React from 'react';
import { Link } from 'react-router-dom';

const Btn = ({ to, children, variant = "primary" }) => {
  const baseClasses = `
    px-[30px] py-[13px] inline-block rounded-[100px] relative overflow-hidden 
    before:content-[""] before:absolute before:w-0 before:h-full 
    hover:text-white before:-z-10 z-10 
    before:rounded-[100px] before:left-0 before:top-0 
    hover:before:w-full before:transition-all before:duration-500
  `;

  const variants = {
    primary: `
      bg-[#5FE98C] before:bg-black
    `,
    secondary: `
      bg-black text-white before:bg-[#5FE98C]
    `,
    outline: `
      border border-[#5FE98C] text-[#5FE98C] before:bg-[#5FE98C]
    `
  };

  return (
    <Link to={to} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
};

export default Btn;

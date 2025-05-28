import React from 'react';
import { Link } from 'react-router-dom';

import { MdArrowOutward } from "react-icons/md";


const HireBtn = ({ link, children }) => {
    return (
        <div>
            <Link to={link} className='hire_bt flex items-center justify-center bg-[#1C1D20] text-[#fff] py-[5px] px-[20px] rounded-[100px] hover:bg-transparent hover:text-[#1C1D20] hover:outline-1 hover:outline-[#777] '> {children} <MdArrowOutward /></Link>
        </div>
    );
};

export default HireBtn;
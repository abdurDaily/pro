import React from 'react';
import { Link } from 'react-router-dom';
import HireBtn from '../components/hire/HireBtn';
import List from '../components/list/List';

const Header = () => {
    return (
        <div>
            <nav className='shadow-lg py-2'>
                <div className="container">
                    <div className="grid lg:grid-cols-5 ">
                        <div>
                            <Link to="/"> <img src="/images/logo.png" alt="" /> </Link>
                        </div>



                        <div className='col-span-3 flex h-[100%] w-[100%] items-center justify-center'>

                           <List  />

                        </div>



                        <div className=' flex items-center justify-end'>
                            <HireBtn link="">Hire me</HireBtn>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
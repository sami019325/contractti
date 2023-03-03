import React, { useState } from 'react';
import { FaUserAlt, FaRegHeart, FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './../../Common.css'

const NavBarDown = () => {
    const [activeBtn, setActiveBtn] = useState(1);
    const [activeList, setActiveList] = useState(1);
    const list = [
        { ID: 1, Type: 'Bangladesh', link: 'bangladesh' },
        { ID: 2, Type: 'India', link: 'india' },
    ];
    return (
        <div className='bg-blue-50 p-5 w-full block lg:hidden'>
            <div className="btm-nav">
                <button>
                    <Link to='/' onClick={() => setActiveBtn(1)} className={`border-2 ${activeBtn === 1 ? ' border-blue-900 bg-blue-100 text-blue-700' : 'border-blue-200'} hover:border-blue-900 w-full select-none  bg-white hover:bg-blue-200 mt-3 py-2 px-5 rounded-full hover:text-blue-700 flex gap-3 items-center`}>
                        <FaUserAlt className='text-blue-700 '></FaUserAlt>
                    </Link>
                </button>
                <button>
                    <Link to={`/createlist`} onClick={() => setActiveBtn(2)} className={`border-2 ${activeBtn === 2 ? ' border-blue-900 bg-blue-100 text-blue-700' : 'border-blue-200'} hover:border-blue-900 w-full select-none  bg-white hover:bg-blue-200 mt-3 py-2 px-5 rounded-full hover:text-blue-700 flex gap-3 items-center`}>
                        <FaPlus />
                    </Link>
                </button>
                <button >
                    <Link to='/' onClick={() => setActiveBtn(3)} className={`border-2 ${activeBtn === 3 ? ' border-blue-900 bg-blue-100 text-blue-700' : 'border-blue-200'} hover:border-blue-900 w-full select-none  bg-white hover:bg-blue-200 mt-3 py-2 px-5 rounded-full hover:text-blue-700 flex gap-3 items-center`}>
                        <FaRegHeart className='text-blue-700 font-extrabold text-lg'></FaRegHeart>
                    </Link>
                </button>

            </div>

            {/* {
                    list.map(l => <Link to={`/${l.link}`} key={l.ID} onClick={() => setActiveList(l.ID)} className={` ${activeList === l.ID ? '  bg-blue-200 text-blue-700' : ''} hover:border-blue-900 select-none  bg-white hover:bg-blue-200 mt-3 py-2 px-5  hover:text-blue-700 flex gap-3 items-center`}>
                        <FaRegHeart className='text-blue-700 font-extrabold text-lg'></FaRegHeart>
                        <p className='font-bold'>{l.Type}</p>
                    </Link>)
                } */}

        </div>
    );
};

export default NavBarDown;
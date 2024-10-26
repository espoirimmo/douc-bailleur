import React from 'react';

//import link
import { Link } from 'react-router-dom';
//import logo
import  Logo  from '../assets/img/logo_immo.jpeg';

const Header = () => {
  return  <header className='py-6 mb-12 border-'>
    <div className='container mx-auto flex justify-between items-center'>
      <Link to='/'>
      <img src={Logo}  alt='' width={150} height='50'/>
      </Link>

      <idv className='flex items-center gap-6'>
        <Link className='hover:text-violet-900 transition' to=''>se connecter</Link>
        <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to=''>s'inscrire </Link>
      </idv>
    </div>
  </header>
};

export default Header;

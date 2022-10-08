import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'

const Navbar = () => {
    const[open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: "home", link: "/home" },
        { id: 2, name: "Shop", link: "/Shop" },
        { id: 3, name: "Deals", link: "/Deals" },
        { id: 4, name: "Coupons", link: "/Coupons" },
        { id: 5, name: "Contact", link: "/Contact" },
        {id: 6, name: "services", link: "/Service"}
    ]
    return (
        <nav>
            <div onClick={()=> setOpen(!open)} className='w-6 h-6 md:hidden'>
                { open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
            </div>
            <ul className={`md: flex justify-center ${open ?'top-6':'top-[-120px]'}`}>
                {
                    routes.map(route =>
                        <Link 
                        route={route} key={route.id}>
                        </Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;
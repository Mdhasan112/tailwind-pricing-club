import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        {id: 1, name: "home", link: "/home"},
        {id: 1, name: "Shop", link: "/Shop"},
        {id: 1, name: "Deals", link: "/Deals"},
        {id: 1, name: "Coupons", link: "/Coupons"},
        {id: 1, name: "Contact", link: "/Contact"},
    ]
    return (
        <nav>
            <ul>
                {
                    routes.map(route => <Link route={route} key={route.id}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;
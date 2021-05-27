import React from "react";
import { Link } from "react-router-dom";

interface IPage {
    endpoint: string
    name: string
}

interface INavListProps {
    ascendingOrder: Boolean
}

let pages: IPage[] = [
    {
        endpoint: '/',
        name: 'Home'
    },
    {
        endpoint: '/about',
        name: 'About'
    },
    {
        endpoint: '/portfolio',
        name: 'Portfolio'
    },
    {
        endpoint: '/gallery',
        name: 'Gallery'
    },
    {
        endpoint: '/contact',
        name: 'Contact'
    }
]

const  NavList = ({ ascendingOrder }: INavListProps): JSX.Element => {
    let list = ascendingOrder ? pages : pages.slice().reverse();
    return (
        <div>
            {
                list.map(item => (
                        <li>
                            <Link to={item.endpoint}>{item.name}</Link>
                        </li>
                ))
            }
        </div>
    );
}

export default NavList;
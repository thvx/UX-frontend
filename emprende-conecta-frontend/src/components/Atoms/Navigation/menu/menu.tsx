import React from "react";

type MenuItems = {
    title: string,
    iconLink: string,
    d: string,
}

type MenuProps = {
    items: MenuItems[],
}

const Menu: React.FC<MenuProps> = ({ items }) => {
    return(
        <>
            <ul className="menu bg-custom-blue rounded-box">
                {items.map((item, index) => (
                    <li key={index} className="relative group">
                        <a className={`text-white`}>
                            <svg xmlns={item.iconLink} className="h-8 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.d} />
                            </svg>
                            <span className="absolute left-1/2 -translate-x-1/2 -top-6 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2">
                                {item.title}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Menu;

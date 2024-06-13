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
            <ul className="menu bg-transparent w-56 rounded-box">
                {items.map((item, index) => (
                        index === 0 ? (
                            <li key={index}>
                                <a className="text-cyan-500 font-bold">
                                    <svg xmlns={item.iconLink} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.d} /></svg>
                                    {item.title}
                                </a>
                            </li>
                        ) : (
                            <li key={index}>
                                <a className="text-white">
                                    <svg xmlns={item.iconLink} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.d} /></svg>
                                    {item.title}
                                </a>
                            </li>
                        )
                ))}
            </ul>
        </>
    )
}

export default Menu
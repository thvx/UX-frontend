import React from "react";

type LinkProps = {
    title: string,
}

const Link: React.FC<LinkProps> = ({title}) => {
    return(
        <>
            <a className="text-white hover:underline hover:cursor-pointer capitalize">
                {title}
            </a>
        </>
    )
}

export default Link
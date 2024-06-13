import React from 'react';


const Avatar: React.FC = () => {
    return (
        <>
            <div className="avatar">
                <div className="w-24 rounded-full ring-2 ring-custom-lightblue      ring-offset-base-100 ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        </>
    );
}

export default Avatar;
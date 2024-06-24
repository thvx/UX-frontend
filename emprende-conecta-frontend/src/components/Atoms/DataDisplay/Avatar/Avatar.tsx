import React from 'react';

interface AvatarProps {
    src: string;
    alt: string;
    size: 'w-10' | 'w-16' | 'w-24' | 'w-32'; 
  }

const Avatar: React.FC<AvatarProps> = ({ src, alt, size }) => {
    return (
        <>
            <div className="avatar">
                <div className={`w-24 rounded-full ring-2 ring-custom-lightblue ring-offset-base-100 ring-offset-2 ${size}`}>
                    <img src={src} alt={alt}/>
                </div>
            </div>
        </>
    );
}

export default Avatar;
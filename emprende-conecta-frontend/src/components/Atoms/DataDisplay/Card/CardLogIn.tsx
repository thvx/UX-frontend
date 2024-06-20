import React from 'react';



type CardLoginProps = { 
    content: string;
};


const CardLogin: React.FC<CardLoginProps> = ({content}) => {
    return (
        <>
            <div className="card w-96 bg-custom-yellow shadow-xl">
                <figure><img src="https://elcomercio.pe/resizer/CmxuFeoOhjNdKCn9agbSGyKZYqo=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/S2ZXU5QHXFBVPDOUBC5OUCL5LE.jpg"
                        alt="Purchaser" /></figure>
                <div className="card-title">
                    <h2 className="card-body text-center text-custom-blue">{content}</h2>
                </div>
            </div>
        </>
    );
}

export default CardLogin;
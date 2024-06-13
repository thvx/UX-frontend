import React from 'react';



type CardProductosProps = { 
    title: string;
    content: string;
    btn_width: 'half' | 'quarter' | 'auto';
    btn_content: string;
};


const CardProductos: React.FC<CardProductosProps> = ({title, content, btn_content, btn_width}) => {
    return (
        <>
            <div className="card w-96 bg-custom-lightblue      shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-white">{title}</h2>
                    <p className='text-white'>{content}</p>
                    <div className="card-actions justify-end">
                        <button className={`bg-custom-yellow text-custom-blue font-bold py-2 px-4 rounded ${btn_width}`}>
                            {btn_content}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardProductos;
import React from 'react';


const Carousel: React.FC = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="http://significado.net/wp-content/uploads/2015/05/Salud.jpg"
                        className="w-full h-64 object-cover mx-2" />
                    <img src="https://www.desafiosdelmarketing.com/wp-content/uploads/2022/02/pet-marketing-apertura-1180x786.jpg"
                        className="w-full h-64 object-cover mx-2" />
                    <img src="http://significado.net/wp-content/uploads/2015/05/Salud.jpg"
                        className="w-full h-64 object-cover mx-2" />
                    <img src="https://www.desafiosdelmarketing.com/wp-content/uploads/2022/02/pet-marketing-apertura-1180x786.jpg"
                        className="w-full h-64 object-cover mx-2" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="http://significado.net/wp-content/uploads/2015/05/Salud.jpg"
                        className="w-full h-64 object-cover mx-2" />
                    <img src="https://www.desafiosdelmarketing.com/wp-content/uploads/2022/02/pet-marketing-apertura-1180x786.jpg"
                        className="w-full h-64 object-cover mx-2" />
                    <img src="http://significado.net/wp-content/uploads/2015/05/Salud.jpg"
                        className="w-full h-64 object-cover mx-2" />
                    <img src="https://www.desafiosdelmarketing.com/wp-content/uploads/2022/02/pet-marketing-apertura-1180x786.jpg"
                        className="w-full h-64 object-cover mx-2" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;
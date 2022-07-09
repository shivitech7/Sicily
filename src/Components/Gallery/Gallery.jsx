import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Gallery.css';

const Gallery = () => {

    const images = [
        { image: "https://picsum.photos/300/300" },
        { image: "https://picsum.photos/300/300" },
        { image: "https://picsum.photos/300/300" },
    ];

    return (
        <div className="gallery-wrapper">

            <Slide>

                {images.map((image, i) => {
                    return (
                        <div className="each-slide-effect">
                            <div key={i} style={{
                                'backgroundImage': `url(${image.image})`,
                                width: '100%',
                                height: '800px',
                                backgroundRepeat: 'no-repeat',
                                // border: '1px solid white',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center'
                            }}>
                            </div>
                        </div>
                    )
                })}

            </Slide>
        </div>
    )
}

export default Gallery;
import * as React from 'react';

import './styles.css';

interface Image {

}
interface ImageCollectionProps {
    images : Array<Image>
}

const ImagesCollection = (props: ImageCollectionProps) => {
        return(
            <ul>
                {props.images.map((v:any, index: number) => {
                    return (
                        <li className="image-item" key={index}>
                            <div className="image-date"> 
                            <p><span>{v.date}</span></p>
                            </div>

                            <div className="image-details">
                                    <p className="image-type">{v.image_type}</p>
                                    <p className="image-detail"> {v.detail}</p>
                                    
                            </div>

                            <div>
                                    <p className="image-description">{v.description}</p>
                             </div>
                        </li>
                    )
                })}
            </ul>
        )
    }

export default ImagesCollection;
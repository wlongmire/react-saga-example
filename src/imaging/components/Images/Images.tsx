import * as React from 'react';
import ImagingCollection from './ImagingCollection';



export class ImagingComponent extends React.Component<{}, {}>{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
            <ImagingCollection
            images={[{
                            "image_type": "Imaging: Request",
                            "description": "Albumin levels were higher than expected.Updated your case to the flu",
                            "detail": "CT Scan",
                            "date": "26 Aug"
                        },
                        {
                            "image_type": "Imaging: Results In",
                            "description": "Albumin levels were higher than expected.Updated your case to the cold bruh",
                            "detail": "MRI",
                            "date": "27 Sep"
                        },
                    ]}
            />
            </div>
        )
    }
}
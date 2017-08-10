import * as React from 'react';

// Take care of this to use the right IVisit interface defined in the
// models.
interface IVisit {

}
interface VisitContainerProps {
    visit: IVisit
}

export default class VisitContainer extends React.Component<VisitContainerProps,{}>{
    constructor(props:VisitContainerProps){
        super(props)
    }
    render(){
        return(
            <div></div>
        )
    }
}


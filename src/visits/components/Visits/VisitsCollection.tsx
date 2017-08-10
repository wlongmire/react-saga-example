import * as React from 'react';

interface IVisit {

}
interface VisitsCollectionProps {
    visits : Array<IVisit>
}

const last = (list:any) => list.slice(-1)[0];

class VisitsCollection extends React.Component<VisitsCollectionProps, {}>{
    constructor(props:VisitsCollectionProps){
        super(props);
    }
    render(){
        return(
            <ol>
                {this.props.visits.map(last).map((v:any, index: number) => {
                    return (
                        <li key={index}>{v.assignee_key}</li>
                    )
                })}
            </ol>
        )
    }
}

export default VisitsCollection;
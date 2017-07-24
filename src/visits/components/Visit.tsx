import * as React from 'react';
import './Visit.css';

export class VisitDrawerProps {
    className ?: string;

}
export class VisitDrawer extends React.Component<VisitDrawerProps, {}>{
    render(){
        return(
            <div  id="visit-drawer" className={this.props.className}> Visit Container Section</div>
        )
    }
}

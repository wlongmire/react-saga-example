import * as React from 'react';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  }
};

interface ChipCollectionProps {
    items : Array<string>;
}

export class ChipCollection extends React.Component<ChipCollectionProps, {}>{
    constructor(props:ChipCollectionProps){
        super(props)
     
    }
    handleRequestDelete = () => {
        console.log("Delete")
    }
    render(){
            return(
            <div>
            {
                this.props.items.map((i:any, index:number)=>{
                    return(
                            <Chip
                                key={index}
                                onRequestDelete={this.handleRequestDelete}
                                style={styles.chip}
                            >
                            {i}
                            </Chip>
                    )
                })
            }
            </div>
            )
    }
}
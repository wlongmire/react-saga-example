import * as React from 'react';
import * as Moment from 'moment';
import * as _ from 'lodash';

import { BioDriveListGroupHeader } from '../BioDriveListGroupHeader';
import { BioDriveListItem } from '../BioDriveListItem';
import { BioDriveListItemInfo } from '../../reducer';

import './BioDriveList.css';

interface BioDriveListProps {
    items: Array<BioDriveListItemInfo>;
    onItemSelected: (item: BioDriveListItemInfo) => void;
}

export class BioDriveList extends React.Component<BioDriveListProps, {}> {

    generateListItems(items: Array<BioDriveListItemInfo>): Array<React.ReactNode> {
        const list: Array<React.ReactNode> = [];
        let previousYear = 0;

        let groups = _.groupBy(items, (item) => Moment(item.date).year());
        console.log('groups', groups);

        let sorted = _.keys(groups).sort();
        console.log('sorted', sorted);

        _.keys(groups)
            .sort()
            .reverse()
            .forEach((year: string, groupIndex: number) => {
                if (Number(year) != previousYear) {
                    list.push(<BioDriveListGroupHeader key={-(groupIndex+1)} name={year} />);
                }
    
                groups[year].forEach((item: BioDriveListItemInfo, itemIndex: number) => {
                    list.push(
                        <BioDriveListItem 
                            key={`${year}-${itemIndex}`}
                            item={item}
                            onItemSelected={this.props.onItemSelected}
                        />
                    );
                });
            });

        // _(groups)
        //     .keys()
        //     .sort()
        //     .reverse()
        //     .forEach((year: string, index: number) => {
        //         if (Number(year) != previousYear) {
        //             list.push(<BioDriveListGroupHeader key={-(index+1)} name={year} />);
        //         }
    
        //         groups[year].forEach((item: BioDriveListItemInfo, index: number) => {
        //             console.log(item);
        //             list.push(
        //                 <BioDriveListItem 
        //                     key={index}
        //                     item={item}
        //                     onItemSelected={this.props.onItemSelected}
        //                 />
        //             );
        //         });
        //     });

        // _.keys(groups).forEach((year: string, index: number) => {
        //     if (Number(year) != previousYear) {
        //         list.push(<BioDriveListGroupHeader key={-(index+1)} name={year} />);
        //     }

        //     groups[year].forEach((item: BioDriveListItemInfo, index: number) => {
        //         console.log(item);
        //         list.push(
        //             <BioDriveListItem 
        //                 key={index}
        //                 item={item}
        //                 onItemSelected={this.props.onItemSelected}
        //             />
        //         );
        //     });
        // });

        // let groups = _.groupBy(items, (item) => Moment(item.date).year());
        

        // console.log('groups', groups);

        // groups.array.forEach(element => {
        //     console.log('el', element);
        // });

        // _.keys(groups).forEach((year, index) => {
        //     if (Number(year) != previousYear) {
        //         list.push(<BioDriveListGroupHeader key={-(index+1)} name={year} />);
        //     }

        //     console.log('group items', groups[year][0]);

        //     groups[year].forEach((item, index) => {
        //         console.log(item);
        //         list.push(
        //             <BioDriveListItem 
        //                 key={index}
        //                 item={item}
        //                 onItemSelected={this.props.onItemSelected}
        //             />
        //         );
        //     });

            // groups[year].forEach((item, index) => {
            //     list.push(
            //         <BioDriveListItem 
            //             key={index}
            //             item={item}
            //             onItemSelected={this.props.onItemSelected}
            //         />
            //     );
            // });
        // });

        console.log('list', list);

        return list;
    }

    render() {
        return (
            <ul className="bio-drive-list">
                {
                    this.generateListItems(this.props.items).map((el) => {
                        return el
                    })
                }
            </ul>
        );
    }
}

// {/* <BioDriveListGroupHeader key={-index} name={year.toString()} /> */}

// {/* props.items.map((item, index) => {
//     return (
//         <BioDriveListItem 
//             key={index}
//             item={item} 
//             onItemSelected={props.onItemSelected} 
//         />
//     )
// }); */}
import * as React from 'react';
import * as Moment from 'moment';
import * as _ from 'lodash';

import { BiodriveListGroupHeader } from '../BioDriveListGroupHeader';
import { BiodriveListItem } from '../BioDriveListItem';
import { BiodriveListItemInfo } from '../../reducer';

import './BiodriveList.css';

interface BiodriveListProps {
    items: Array<BiodriveListItemInfo>;
    onItemClick: (item: BiodriveListItemInfo) => void;
}

export class BiodriveList extends React.Component<BiodriveListProps, {}> {

    generateListItems(items: Array<BiodriveListItemInfo>): Array<React.ReactNode> {
        const list: Array<React.ReactNode> = [];
        let previousYear = 0;
        let groups = _.groupBy(items, (item) => Moment(item.date).year());

        _.keys(groups)
            .sort()
            .reverse()
            .forEach((year: string, groupIndex: number) => {
                if (Number(year) !== previousYear) {
                    list.push(<BiodriveListGroupHeader key={-(groupIndex + 1)} name={year} />);
                }
    
                groups[year].forEach((item: BiodriveListItemInfo, itemIndex: number) => {
                    list.push(
                        <BiodriveListItem 
                            key={`${year}-${itemIndex}`}
                            item={item}
                            onClick={this.props.onItemClick}
                        />
                    );
                });
            });

        return list;
    }

    render() {
        return (
            <ul className="bio-drive-list">
                {
                    this.generateListItems(this.props.items).map((el) => {
                        return el;
                    })
                }
            </ul>
        );
    }
}
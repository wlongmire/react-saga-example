import * as React from 'react';
import './Tab.css';

export interface TabProps {
    header: string;
    value?: any;
    selected?: boolean;
    disableRemove?: boolean;
}

export interface TabState {
    
}

export class Tab extends React.Component<TabProps, TabState> {

}
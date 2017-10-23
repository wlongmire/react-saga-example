import * as React from 'react';
import * as classnames from 'classnames';
import * as _ from 'lodash';
import { Tab } from './Tab';
import { TabItemInfo } from './TabItemInfo';
import './TabControl.css';

interface TabControlProps {
    items?: Array<TabItemInfo>;
    canAdd?: boolean;
    onAddTab?: () => TabItemInfo;
    /**
     * Notifies a consumer that a tab is closing and allows the consumer
     * to cancel the closing by return truthy from the handler.
     */
    onTabClosing?: (tab: TabItemInfo, index: number) => boolean;
    onTabClosed?: (tab: TabItemInfo, index: number) => void;
    onSelectedChanged?: (tab: TabItemInfo, index: number) => void;
    selectedIndex?: number;
}

interface TabControlState {
    canAdd: boolean;
    items: Array<TabItem>;
    selectedItem?: any;
    selectedValue?: any;
    selectedIndex: number;
}

interface TabItem {
    contentElement: Tab;
    header: string;
    disableRemove: boolean;
}

export class TabControl extends React.Component<TabControlProps, TabControlState> {

    constructor(props: TabControlProps) {
        super(props);
        this.state = {
            canAdd: false,
            items: [],
            selectedItem: null,
            selectedValue: null,
            selectedIndex: -1
        };

        this.handleTabCloseClick = this.handleTabCloseClick.bind(this);
        this.handleTabSelection = this.handleTabSelection.bind(this);
    }

    componentDidMount() {
        const tabs = this.createTabs(this.props);
        let selectedTabIndex: number = this.computeSelectedTabIndex(tabs, this.props.selectedIndex);
        this.setState({
            canAdd: this.props.canAdd ? true : false,
            items: tabs,
            selectedIndex: selectedTabIndex,
            selectedItem: tabs[selectedTabIndex]
        });
    }

    componentWillReceiveProps(props: TabControlProps) {
        const tabs = this.createTabs(props);
        let selectedTabIndex = this.computeSelectedTabIndex(tabs, props.selectedIndex);
        this.setState({
            canAdd: this.props.canAdd ? true : false,
            items: tabs,
            selectedIndex: selectedTabIndex,
            selectedItem: tabs[selectedTabIndex]
        });
    }

    computeSelectedTabIndex(tabs: TabItem[], proposedIndex: number | undefined): number {
        let selectedTabIndex: number = -1;
        
        if (proposedIndex === undefined) {
            selectedTabIndex = tabs.length > 0 ? 0 : -1;
        } else {
            if (proposedIndex < -1) {
                selectedTabIndex = -1;
            } else {
                selectedTabIndex = (proposedIndex >= tabs.length) 
                                    ? tabs.length - 1 
                                    : proposedIndex;
            }
        }
        return selectedTabIndex;
    }

    createTabs(props: Readonly<{ children?: React.ReactNode }> & Readonly<TabControlProps>): Array<TabItem> {
        if (props.children) {
            const children = 
                Array.isArray(props.children) 
                ? props.children
                : [props.children];
            return this.createTabsFromChildren(children as Tab[]);
        }

        if (props.items) {
            return (this.createTabsFromPropItems(props.items));
        }

        return [];
    }

    createTabsFromChildren(children: Array<Tab>): Array<TabItem> {
        return children.map((child: Tab) => {
            return { 
                contentElement: child,
                header: child.props.header,
                disableRemove: child.props.disableRemove
            } as TabItem;
        });
    }

    createTabsFromPropItems(items: Array<TabItemInfo>): Array<TabItem> {
        const t = items.map((item: TabItemInfo) => {
            return {
                contentElement: item.content,
                header: item.header,
                disableRemove: item.disableRemove
            } as TabItem;
        });

        return t;
    }

    handleTabAddClick() {
        if (!this.props.onAddTab) return;
        
        const newItemInfo = this.props.onAddTab();
        const newTabItem = {
            contentElement: newItemInfo.content,
            header: newItemInfo.header
        } as TabItem;
        const tabs = _.cloneDeep(this.state.items);
        tabs.push(newTabItem);
        const selectedIndex = tabs.length - 1;
        this.setState({
            items: tabs,
            selectedIndex: selectedIndex,
            selectedItem: tabs[selectedIndex]
        });
    }

    handleTabCloseClick(index: number) {
        const tabs = _.cloneDeep(this.state.items);
        tabs.splice(index, 1);

        const tab = this.state.items[index];
        let currentIndex = this.state.selectedIndex;
        let selectedItem = this.state.selectedItem;

        if (this.props.onTabClosing) {
            const cancel = this.props.onTabClosing({
                header: tab.header,
                content: tab.contentElement
            } as TabItemInfo, index);

            if (cancel) return;
        }
        
        if (index < currentIndex) {
            currentIndex -= 1;
        } 

        if (currentIndex == tabs.length) {
            currentIndex -= 1;
        }

        selectedItem = this.state.items[currentIndex];

        this.setState({
            selectedIndex: currentIndex,
            selectedItem: selectedItem,
            items: tabs
        }, () => {
            let info = {
                header: tab.header,
                content: tab.contentElement
            } as TabItemInfo;

            if (this.props.onTabClosed) {
                this.props.onTabClosed(info, index);
            }

            if (this.props.onSelectedChanged) {
                this.props.onSelectedChanged(info, index);
            }
        });
    }

    handleTabSelection(index: number) {
        if (index == -1) {
            this.setState({
                selectedIndex: index,
                selectedItem: null
            });
            return;
        }

        const tabItem = this.state.items[index];

        this.setState({
            selectedIndex: index,
            selectedItem: tabItem
        }, () => {
            if (this.props.onSelectedChanged) {
                this.props.onSelectedChanged({
                    header: tabItem.header,
                    content: tabItem.contentElement
                } as TabItemInfo, index);
            }
        });
    }

    getContentElement(item: TabItem): React.ReactNode {
        const isTabElement = ((item.contentElement as any).type).name === 'Tab';
        if (isTabElement) {
            return item.contentElement.props.children;
        } else {
            return item.contentElement;
        }
    }

    render() {
        return (
            <div className="tab-container">
                <ul className="tab-nav-header">
                    {
                        this.state.items.map((item, index) => {
                            return (
                                <li
                                    className={classnames({'active': this.state.selectedIndex == index})} 
                                    key={index}
                                    onClick={() => this.handleTabSelection(index)}
                                >
                                    <a className="tab-title">
                                        {item.header}
                                        {!item.disableRemove &&
                                            <i 
                                                className="material-icons"
                                                onClick={
                                                    (e) => { 
                                                        e.stopPropagation(); 
                                                        this.handleTabCloseClick(index);
                                                    }
                                                }
                                            >
                                                clear
                                            </i>
                                        }
                                    </a>
                                </li>
                            )
                        })
                    }
                    {this.state.canAdd &&
                        <li className="tab-add-button">
                            <i 
                                className="material-icons"
                                onClick={() => this.handleTabAddClick()}
                            >
                                add_circle
                            </i>
                        </li>
                    }
                </ul>
                <div className="tab-content">
                    {
                        this.state.selectedIndex == -1 
                        ? <div></div>
                        : this.getContentElement(this.state.items[this.state.selectedIndex])
                    }
                </div>
            </div>
        )
    }
}
import * as React from 'react';

export class TabItemInfo {
    header: string;
    content: React.ReactNode;
    disableRemove?: boolean = true;
}
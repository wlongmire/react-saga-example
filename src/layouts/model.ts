import * as React from 'react';

export class Route {
    constructor(
        public path: string,
        public component: React.ComponentClass,
        public exact?: boolean
    ) {}
}

export class NavLink {
    constructor(
        public to: string,
        public activeClassName: string, 
        public title: string
    ) {}
}
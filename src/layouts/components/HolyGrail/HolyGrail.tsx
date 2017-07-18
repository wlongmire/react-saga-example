import * as React from 'react';

import './HolyGrail.css';

export class HolyGrailProps {
    header?: JSX.Element;
    nav?: JSX.Element;
    main?: JSX.Element;
<<<<<<< HEAD
    aside?: JSX.Element;
=======
    aside?:JSX.Element;
>>>>>>> fcd17260bbf65bd5515127461a355d220a766c1e
    footer?: JSX.Element;
    hideHeader?: boolean;
    hideNavigation?: boolean;
    hideAside?: boolean;
    hideFooter?: boolean;
}

export class HolyGrail extends React.Component<HolyGrailProps, {}> {
    render() {
        const { 
            header, 
            nav, 
            main, 
            aside, 
            footer,
            hideHeader,
            hideNavigation,
            hideAside,
            hideFooter
        } = this.props;

        return (
            <div>
                { (header && !hideHeader) &&
                    <header>{header}</header>
                }
                <div className="main">
                    { main &&
                        <article>{main}</article>
                    }
                    { (nav && !hideNavigation) &&
                        <nav>{nav}</nav>
                    }
                    { (aside && !hideAside) &&
                        <aside>{aside}</aside>
                    }
                </div>
                { (footer && !hideFooter) &&
                    <footer>{footer}</footer>
                }
            </div>
);
    }
}
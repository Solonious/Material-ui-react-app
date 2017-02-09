import React from 'react';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import DialogExampleSimple from './SimpleDialog';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class AppBarExampleIcon  extends React.Component {
    onLeftIconButtonTouchTap() {
        console.log('tap');
    }

    render() {
        return (
            <div>
                <AppBar
                    title="My App"
                    style={{
                        backgroundColor: '#0097A7'
                    }}
                    onClick={this.onLeftIconButtonTouchTap}
                    iconElementRight={<DialogExampleSimple />}
                />
            </div>

        );
    }
};
import React from 'react';
import AppContext from '../../context';

const NotesView = () => (
    <AppContext.Consumer>
        {(context) => (
            <p>This is {context}</p>
        )}
    
    </AppContext.Consumer>
);

export default NotesView;
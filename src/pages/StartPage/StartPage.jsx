import React, { Fragment } from 'react';

import './StartPage.scss';

function StartPage() {
    return (
        <Fragment>
            <h1 className={ 'startPage' }>StartPage</h1>
        </Fragment>
    );
}

StartPage.path = '/';

export default StartPage;
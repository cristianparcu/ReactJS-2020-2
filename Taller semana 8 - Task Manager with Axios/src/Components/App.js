import React from 'react';
import styles1 from './App.module.scss'
import styles2 from '../index.module.scss'
import Task from './Task';
import Dashboard from './Dashboard';
import Header from './Header';

function App(){
    return(
        <div className={`${styles1.outerdiv} ${styles2.flex} ${styles2.flex_jc_c} ${styles2.flex_ai_c}`}>
            <Dashboard />
        </div>
    );
}

export default App
import React from 'react';
import styles from './greeter.css';

class Greeter extends React.Component{
    render() {
        return(
            <div className={styles.fontColor}>ReactWebpack</div>
        )
    }
}

export default Greeter;
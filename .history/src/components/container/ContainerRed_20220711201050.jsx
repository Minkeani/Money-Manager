import React from 'react';
import styles from './Container.module.css'
import Customization from '../Customization/Customization';

const ContainerRed = () => {
    return (
        <>
        <Customization/>
        <div className={styles.container}>
        </div>
        </>
        
    );
}

export default ContainerRed;

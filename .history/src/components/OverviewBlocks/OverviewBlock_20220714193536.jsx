import React, {useState} from 'react';
import styles from './Overview.module.css'

const OverviewBlock = () => {
    const [blocks, setBlocks] = useState()

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Last incomes</h3>
            <div className={styles.dilivar}></div>
            <ul className={styles.list}>
                <li><span className={styles.money}>1000</span> from <span>life</span></li>
                <li><span  className={styles.money}>1000</span> from <span>life</span></li>
                <li><span  className={styles.money}>1000</span> from <span>life</span></li>
                <li><span  className={styles.money}>1000</span> from <span>life</span></li>

            </ul>
        </div>
    );
}

export default OverviewBlock;

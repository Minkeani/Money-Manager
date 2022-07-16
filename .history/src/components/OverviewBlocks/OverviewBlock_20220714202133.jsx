import React, {useState} from 'react';
import styles from './Overview.module.css'

const OverviewBlock = () => {
    const [blocks, setBlocks] = useState([
        {type: 'Incomes', sign: '+', classes: 'money', money: 1000, category: 'life'},
        {type: 'Expenses', sign: '-', classes: 'Remoney', money: 1000, category: 'life'}
])

    return (
        <>
            {blocks.map(({type, sign, classes, money, category}) => (
                    <div className={styles.container}>
                        <h3 className={styles.title}>Last <span className={classes === 'money' ? styles.money : styles.Remoney}>{type}</span></h3>
                        <div className={styles.dilivar}></div>
                            <ul className={styles.list}>
                                    {/* <li><span className={styles.money}>{sign}{money}</span> from <span>{category}</span></li> */}
                                    {/* <li><span  className={styles.money}>1000</span> from <span>life</span></li>
                                    <li><span  className={styles.Remoney}>1000</span> from <span>life</span></li>
                                    <li><span  className={styles.Remoney}>1000</span> from <span>life</span></li> */}
                            </ul>
                        </div>
            )
            )}
      
        </>
    );
}

export default OverviewBlock;

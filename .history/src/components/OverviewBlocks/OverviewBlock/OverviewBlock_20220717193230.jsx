import React, {useState} from 'react';
import styles from './Overview.module.css'
import {data} from '../../Overview/Overview'

const OverviewBlock = () => {
    const [blocks, setBlocks] = useState([
        {type: 'Incomes', sign: '+', classes: 'money', array:  [{money: 1000, category: 'life'}, {money: 1000, category: 'life'}, {money: 1000, category: 'life'}]},
        {type: 'Expenses', sign: '-', classes: 'Remoney', array:  [{money: 1000, category: 'life'}, {money: 1000, category: 'life'}, {money: 1000, category: 'life'}]}
])
console.log( data[0].datasets.label);
    return (
        <>
            {blocks.map(({type, sign, classes, array}) => (
                    <div className={styles.container}>
                            <h3 className={styles.title}>Last <span className={classes === 'money' ? styles.money : styles.Remoney}>{type}</span></h3>
                            <button className={classes === 'money' ? styles.money : styles.Remoney}>Добавить</button>
                            
                        <div className={styles.dilivar}></div>
                            <ul className={styles.list}>
                                    {array.map(({money, category}) => (
                                        <li><div className={styles.listCont}> Amount<span className={classes === 'money' ? styles.money : styles.Remoney}>{sign}{money}</span> Category <span>{category}</span></div></li>
                                    ))}
                            </ul>
                            <div className={styles.All}><button className={classes === 'money' ? styles.money : styles.Remoney}>View all {type}</button></div>
                        </div>
            )
            )}
      
        </>
    );
}

export default OverviewBlock;

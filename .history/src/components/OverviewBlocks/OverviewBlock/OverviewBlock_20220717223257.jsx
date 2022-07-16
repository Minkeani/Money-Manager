import React, {useState} from 'react';
import styles from './Overview.module.css'
import {data} from '../../Overview/Overview'

const OverviewBlock = () => {
    const [blocks, setBlocks] = useState([
        {type: 'Incomes', sign: '+', classes: 'money', array:  [{money: 1000, category: 'life'}, {money: 1000, category: 'life'}, {money: 1000, category: 'life'}]},
        {type: 'Expenses', sign: '-', classes: 'Remoney', array:  [{money: 1000, category: 'life'}, {money: 1000, category: 'life'}, {money: 1000, category: 'life'}]}
])
data.map((item) => {
    // console.log(item.datasets[0].data);
    console.log(item.labels[1]);

    
})
    return (
        <>
            {data.map(({type, sign, classes, datasets, labels}) => (
                    <div className={styles.container}>
                            <h3 className={styles.title}>Last <span className={classes === 'money' ? styles.money : styles.Remoney}>{type}</span></h3>
                            <button className={classes === 'money' ? styles.money : styles.Remoney}>Добавить</button>
                            
                        <div className={styles.dilivar}></div>
                            <ul className={styles.list}>
                                    {datasets.map(({data}) => (
                                        data.map(({money}) => (
                                        <li><div className={styles.listCont}> Amount<span className={classes === 'money' ? styles.money : styles.Remoney}>{sign}{money}</span> Category <span>{data[1]}</span></div></li>
                                        ))
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

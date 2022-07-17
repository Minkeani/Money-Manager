import React, {useState} from 'react';
import styles from './Overview.module.css'

const OverviewBlock = () => {
    const [blocks, setBlocks] = useState([
        {type: 'Incomes', sign: '+', classes: 'money', array:  [{money: 1000, category: 'life'}, {money: 1000, category: 'life'}, {money: 1000, category: 'life'}]},
        {type: 'Expenses', sign: '-', classes: 'Remoney', array:  [{money: 1000, category: 'life'}, {money: 1000, category: 'life'}, {money: 1000, category: 'life'}]}
])

    return (
        <>
            {blocks.map(({type, sign, classes, array}) => (
                    <div className={styles.container}>
                        <div>
                            <h3 className={styles.title}>Last <span className={classes === 'money' ? styles.money : styles.Remoney}>{type}</span></h3>
                            <button>+</button>
                        </div>
  
                        <div className={styles.dilivar}></div>
                            <ul className={styles.list}>
                                    {array.map(({money, category}) => (
                                        <li><span className={classes === 'money' ? styles.money : styles.Remoney}>{sign}{money}</span> from <span>{category}</span></li>
                                    ))}
                            </ul>
                        </div>
            )
            )}
      
        </>
    );
}

export default OverviewBlock;

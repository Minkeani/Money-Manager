import React, {useState} from 'react';
import styles from './Overview.module.css'
import {data} from '../../Overview/Overview'

const OverviewBlock = () => {

    const [modalActive, setModalActive] = useState(true);

    
    return (
        <>
            {data.map(({type, sign, classes, datasets, labels}) => (
                    <div className={styles.container}>
                            <h3 className={styles.title}>Last <span className={classes === 'money' ? styles.money : styles.Remoney}>{type}</span></h3>
                            <button className={classes === 'money' ? styles.money : styles.Remoney}>Добавить</button>
                            
                        <div className={styles.dilivar}></div>
                            <ul className={styles.list}>
                                    {datasets.map(({data}) => (
                                        data.map((money) => (
                                        <li><div className={styles.listCont}> Amount<span className={classes === 'money' ? styles.money : styles.Remoney}>{sign}{money}</span> Category <span>{labels[data.indexOf(money)]}</span></div></li>
                                        ))
                                    ))} 
                            </ul>
                            <div className={styles.All}>
                                <button
                                    onClick={() => setModalActive(true)}
                                    className={classes === 'money' ? styles.money : styles.Remoney}>View all {type}
                                </button>
                            </div>
                        </div>
            )
            )}
      
        </>
    );
}

export default OverviewBlock;

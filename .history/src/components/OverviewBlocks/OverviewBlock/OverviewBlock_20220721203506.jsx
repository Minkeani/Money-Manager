import React, {useState} from 'react';
import styles from './Overview.module.css'
import Modal from '../../Modal/Modal';

const OverviewBlock = ({data}) => {

    const [modalActive, setModalActive] = useState(false);
    const [type, setType] = useState('');
    const [typeData, setTypeData] = useState('')

    function typeOfModal(type) {
        setModalActive(true)
        setType(type)
    }

    function Add(type) {
        typeOfModal('Add')
        setTypeData(type)
    }

    // function CorrectData() {
    //     labels[data.indexOf(money)]
    // //   return  data[0].datasets[0].data[data[0].labels.indexOf(labels[data.indexOf(money)])]
    // }

    console.log();

    return (
        <>
            {data.map(({type, sign, classes, datasets, labels}) => (
                    <div className={styles.container}>
                            <h3 className={styles.title}>Last <span className={classes === 'money' ? styles.money : styles.Remoney}>{type}</span></h3>
                            <button
                                 onClick={() => Add(type)}
                                 className={classes === 'money' ? styles.money : styles.Remoney}>
                                    Добавить
                            </button>
                            
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
                                    onClick={() => typeOfModal('View')}
                                    className={classes === 'money' ? styles.money : styles.Remoney}>View all {type}
                                </button>
                            </div>
                        </div>
            )
            )}
            <Modal active={modalActive} data={data} setActive={setModalActive} type={type} typeData={typeData}>
                children={"1"}
            </Modal>
      
        </>
    );
}

export default OverviewBlock;

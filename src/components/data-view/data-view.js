import React, { useState } from 'react'
// import 'css/App.css';
import DeleteForm from '../delete-form/delete-form'
import AddForm from '../add-form/add-form'
import DataRow from '../data-row/data-row'
import styles from './data-view.module.scss'


const DataView = ({ data, refetch }) => {
    const [ deleteData, setDeleteData ] = useState(null)
    const [ showAddData, setShowAddData ] = useState(false)
    const view = data.edges.map((data, index) => 
      <DataRow 
        setDeleteData= { setDeleteData } 
        refetch={refetch} 
        key={ Math.random() } 
        data={data.node} 
        index={index} />
    )
    // console.log('rendered')
    return (
      <>
      <div className={styles.directoryList}>
      <button 
        className={styles.addUsersButton}
        onClick={() => setShowAddData(true) }>+
      </button>
      <h2 className={styles.title}>Directory</h2>
        <div className={styles.table}>
          {view}
        </div>
      </div>
        { showAddData && <AddForm 
          refetch={refetch} 
          setShowAddData={setShowAddData} 
        /> 
        }
        { deleteData && 
          <DeleteForm 
            deleteData= {deleteData } 
            setDeleteData= { setDeleteData } 
            refetch={refetch}/> 
        }
      </>
    )
  }

  export default DataView
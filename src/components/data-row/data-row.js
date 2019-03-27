import React from 'react'
// import 'css/App.css';
import styles from './data-row.module.scss'
import EditForm from 'components/edit-form/edit-form'
import { merge } from 'library/helpers'

const DataRow = ({ data: { id, name, address, phone }, 
                   refetch, 
                   setDeleteData }) => {
    const [showForm,setShowForm] = React.useState(false)
    const [ dataRowState, setDataRowState ] = React.useReducer( merge, { id, name, address }) 

    return (
      <>
        <div className={styles.row} id={id}>
          <div className={`${styles.column} ${styles.name}`}>
            {dataRowState.name}
          </div>
          <div className={`${styles.column} ${styles.address}`}>
            {dataRowState.address}
          </div>
          <div className={`${styles.column} ${styles.option}`}>
            <button 
              className="button" 
              onClick={() => setShowForm(true)}>
              edit
            </button>
            <button 
              className="button delete warning-color" 
              onClick={() => setDeleteData({id, name, address}) }>
              delete
            </button>
          </div>
        </div>    
        { showForm && 
          <EditForm 
            data={{id,name,address}} 
            setDataRowState={setDataRowState} 
            setShowForm={setShowForm} 
            refetch={refetch} 
          />   
        }
    
      </>
    )
  }

  export default DataRow
import React from 'react'
// import 'css/App.css';
import { useMutation } from 'react-apollo-hooks';
import { updateQuery } from '../../queries/queries'
import styles from './edit-form.module.scss'
import { merge } from 'library/helpers'

const EditForm = ({ data, setDataRowState, setShowForm, refetch }) => {
  if(!data) {
    return (<></>)
  }
  const [ message, setMessage ] = React.useState( '' )
  const [ formData, setFormData ] = React.useReducer( merge, data )
  const updateServer = useMutation(updateQuery, {
    variables: {
      "where":{ "id": formData.id }, 
      "data": {...formData, id: undefined }
    },
    update: (_,response ) => {
      setDataRowState(formData)
      setMessage( 'Updated User' )
      setShowForm(false)
    }
  })  
  return (
    <form className={styles.overlay}>
      <div className="modal">
        <label>NAME</label>
        <input
          type="text"
          name="name" 
          value={ formData.name } 
          onChange={ (e) => 
          setFormData({ name: e.target.value}) 
          } />
        <label>ADDRESS</label>
        <input 
          type="text" 
          name="address" 
          value={ formData.address} 
          onChange={ (e) => 
          setFormData({ address: e.target.value}) 
          }
        />
        <button 
          className="close-button" 
          onClick={() => setShowForm(false)}>
          X
        </button>
        <input 
          type="button" 
          value="EDIT USER" 
          className={styles.editButton} 
          onClick={ updateServer }
        />
        <div>{ message }</div>
      </div>
    </form>
  )
}

export default EditForm



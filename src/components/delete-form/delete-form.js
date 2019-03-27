import React from 'react'
// import 'css/App.css';
import { useMutation } from 'react-apollo-hooks';
import { deleteQuery, selectQueryWhere } from '../../queries/queries'
import styles from './delete-form.module.scss'


const DeleteForm = ({ deleteData, setDeleteData, refetch }) => {
  const SubmitForm = () => {
    return (
    <div style={{width: '100%', textAlign: 'center'}}>
    { message }
    </div>
    )
  }
  const [ formData, setFormData ] = React.useState( deleteData )
  const [ formSubmit, setFormSubmit ] = React.useState( false )
  const [ message, setMessage ] = React.useState('loading...')
  const updateServer = useMutation(deleteQuery, {
    
    variables: {
      "where":{ "id": formData.id }
    },
    
    update: ( proxy, result ) => {
      if(result.data && result.data.deletePhonebook) {
        setMessage('user deleted')  
        setDeleteData(null)
        refetch( selectQueryWhere )
        // console.log(formOverlay);
      } else {
        setMessage(' error ')
      }
    }
  })

  const onSubmit = ( e, obj ) => {
    setFormData({ 
      ...formData, ...obj 
    })
    setMessage('updating...')
    return updateServer( e )
  }
  return (
    <form 
    className='overlay' 
    onSubmit={ (e) => { 
      e.preventDefault(); 
      setFormSubmit( true ) 
      } 
      }>
    <div className="modal">
      <h2>
        Are you sure you want to delete {deleteData.name}
      </h2>
        <input 
          type="submit" 
          value="yes" 
          className={styles.deleteOption} 
          onClick={ onSubmit }
          />
        <button 
          className={styles.deleteOption} 
          onClick={() => setDeleteData(null)}>No
          
        </button>
        <button className="close-button" onClick={() => setDeleteData(null)}>X</button>
    
      </div>
      { formSubmit && <SubmitForm 
          formData={formData} 
          setDeleteData={setDeleteData}     
        /> 
      }
    </form>
  )
}

export default DeleteForm

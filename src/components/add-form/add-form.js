import React from 'react'
// import 'css/App.css';
import 'css/base.scss';
import { useMutation } from 'react-apollo-hooks';
import { addQuery, selectQueryWhere } from 'queries/queries'
// import styles from './add-form.module.scss'

// it takes 2 objects and it merges them
const merge = ( oldState, newState ) => ({ ...oldState, ...newState })

// const onSubmit =({ setMessage,setShowAddData, updateServer}) =>  ( e ) => {
//   setMessage('sending...')
//   return updateServer( e )

// }

const AddForm = ({ refetch, setShowAddData }) => {
  //it only overwrites with the new value, if there is no value, it will
  //not overwrite anything
  const [ formData, setFormData ] = React.useReducer( merge, {
    name: '', 
    address: '',
  })
  const [ message, setMessage ] = React.useState('')


  //Apollo hooks: useMutation => read docu
  const updateServer = useMutation(addQuery, {
    variables: {
      "data": {
        ...formData, id: undefined, 
        mergeDataRowState: undefined 
      }
    },
    update: ( _proxy, result ) => {
      if(result.data && result.data.createPhonebook) {
        setMessage('user added')
        refetch( selectQueryWhere )
          .then( 
            () => setShowAddData(false)
          )
        
      } else {
        setMessage(' error ')
      }
    }
  })



  return (
   
    <form className="overlay"
    onSubmit={e => {
      e.preventDefault(e)
      updateServer()
    }}
    >
     <div className="modal">
     {/* <h2 className={styles.title}>
      Add a New User
    </h2> */}
    <label>NAME</label>
    <input 
      type="text"
      name="name" 
      
      value={ formData.name } 
      onChange={ (e) => 
      setFormData({name: e.target.value}) 
      } 
      required 
      placeholder="NAME"
    />
    <label>ADDRESS</label>
    <input 
      type="text" 
      name="address"
      placeholder="ADDRESS" 
      value={ formData.address}
      required
      onChange={ (e) => 
        setFormData(
          { address: e.target.value }
        ) }
      />
    <input 
      type="submit" 
      value="Add Person" 
      className="modal-button"  
      disabled={ message ? true : false   }
    />
    <button
      className="close-button"
      onClick={ () => setShowAddData(false) }
    >
      X
    </button>
    <div className="message">
      {message}
    </div>
    </div>
  </form>
  )
}

export default AddForm
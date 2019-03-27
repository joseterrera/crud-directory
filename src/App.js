import React from 'react'
import { useQuery } from 'react-apollo-hooks';
import DataView from './components/data-view/data-view';
import { selectQuery, selectQueryWhere } from './queries/queries'
import { kite } from './library/helpers'



const App = () => {

  //useReducer when new state depends on previous one
  //takes two arguments, initial app  state and action, and returns back a new app state
  //kite in this case, is a function which is used to update a state by passin type of action.
  //kite takes two arguments and returns the second one
  
  const [ dataShownToUser, setDataShownToUser ] = React.useReducer( kite, null )
  //dataShownToUSer will be transformed. On load it has initial value

// console.log(dataShownToUser )


  //We pass our query (selectQuery), along with any variables or options needed.
  //We find these variables, inside the content tab of graphcms, where you have a play button that says Preview on 
  //api explorer
  const { data, error, refetch } = useQuery(
    selectQuery,
    selectQueryWhere
    
  )


  React.useEffect( () => {
    // console.log('YES I DID RUN BRO')
    console.log('im useEffect, this is the value of data:',data)
    setDataShownToUser( data.phonebooks )
  }, [ data.phonebooks ] )


  //refetchTrigger will refetch data without us having to reload the page.

  const refetchTrigger = ( params ) => {
    // console.log('params',params)
    return refetch( params )
      .then(  
        results => {
          console.log("results", {results})
          setDataShownToUser( results.data.phonebooks )
        } 
      )
  }

  const dataView = (
    ( dataShownToUser )
      ? <DataView data={dataShownToUser} refetch={refetchTrigger} />
      :  <div>Loading...</div>
  )

  const view = (
    error
      ? <div>There was an error loading the data</div>
      : dataView
  )


  return (
    <div className="App">
      { error && 'there was an error loading the data'}

      { view }
    </div>
  );
}

export default App;




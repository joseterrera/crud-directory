

import gql from 'graphql-tag';

export const selectQueryWhere = {
  "where": {
    "AND": []
  },
  "first": 2500,
  "skip": 0,
  "orderBy": null
}

//we’re defining a query to fetch a list of launches by calling
// the launches query from our schema. 

export const selectQuery = gql`
query content($first: Int, $skip: Int, 
              $where: PhonebookWhereInput, 
              $orderBy: PhonebookOrderByInput) {
  phonebooks: phonebooksConnection(
    first: $first, 
    skip: $skip, 
    where: $where, 
    orderBy: $orderBy) {
    edges {
      node {
        status
        updatedAt
        createdAt
        id
        name
        address
      }
    }
  }
}
`;


//The Apollo website provides this example for mutation to add a query:
// const LOGIN_USER = gql`
//   mutation login($email: String!) {
//     login(email: $email)
//   }
// `;
//Which is how we will add a query.
export const addQuery = gql`
mutation createPhonebook( $data: PhonebookCreateInput! ) {
  createPhonebook(data: $data ) {
    id

  }
}
`

// to update a query
// mutation {
//   updateArtist(
//         data: {slug:"cat-stevie"},
//         where: {id:"cixnen2ssewlo0143bexdd52n"}) {
//     id
//     slug
//   }
// }


export const updateQuery = gql`
mutation updatePhonebook( 
  $where: PhonebookWhereUniqueInput!, 
  $data: PhonebookUpdateInput! ){
  updatePhonebook(where: $where, data: $data ) {
    id
	}
}
`

export const deleteQuery = gql`
mutation deletePhonebook( $where: PhonebookWhereUniqueInput! ){
  deletePhonebook(where: $where ) {
    id
	}
}
`
import { gql } from "@apollo/client";

const GET_CONTACT_LIST = gql`
  query GetContactList($limit: Int, $offset: Int) {
    contact(limit: $limit, offset: $offset) {
      id
      first_name
      last_name
      phones {
        id
        number
      }
      created_at
      updated_at
    }
  }
`;

const GET_CONTACT_DETAIL = gql`
  query GetContactDetail($id: Int!) {
    contact_by_pk(id: $id) {
      last_name
      id
      first_name
      created_at
      phones {
        number
      }
    }
  }
`;

export { GET_CONTACT_LIST, GET_CONTACT_DETAIL };

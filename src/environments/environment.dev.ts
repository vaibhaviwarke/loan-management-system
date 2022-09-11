export const environment = {
  production: false,
  BASE_URL : 'http://localhost:3000/',
  CUSTOMER_BASE_ENDPOINT : 'customers/',
  CUSTOMER : {
    GET_ALL_CUSTOMERS : 'list/',
    GET_CUSTOMER_DETAILS : 'view/',
    UPDATE_CUSTOMERS_DETAILS : 'update/',
    DELETE_CUSTOMER_DETAILS  : 'delete/',
    SEARCH_CUSTOMER : 'search/',
    ADD_CUSTOMER : 'add/'
  },
  LOANS : {
    GET_ALL_LOANS : 'list',
    GET_CLOAN_DETAILS : 'view',
    UPDATE_LOAN_DETAILS : 'update',
    DELETE_LOAN_DETAILS  : 'delete',
    SEARCH_LOAN : 'search'
  }
};

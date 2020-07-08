const axios = require('axios');

//TYPES
const { GOT_DESSERTS_DATA, NEW_DESSERT_DATA } = require('./types');

/* YOUR CODE GOES HERE */

const gotDesserts = (desserts) => {
  return {
    type: GOT_DESSERTS_DATA,
    desserts,
  };
};

const addDessert = (newDessert) => {
  return {
    type: NEW_DESSERT_DATA,
    newDessert,
  };
};

const fetchDesserts = () => {
  return (dispatch) => {
    return axios
      .get('/api/desserts')
      .then((res) => res.data)
      .then(({ desserts }) => {
        return dispatch(gotDesserts(desserts));
      });
  };
};
const postDessert = (dessertObj) => {
  return (dispatch) => {
    return axios
      .post('/api/desserts', dessertObj)
      .then((res) => res.data)
      .then(({ newDessert }) => {
        return dispatch(addDessert(newDessert));
      });
  };
};
module.exports = { gotDesserts, addDessert, fetchDesserts, postDessert };

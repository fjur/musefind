var reducer = function(state = {}, action){
  console.log('reducer was called with state', state, 'and action', action)
  switch(action.type){
    case 'UPDATE OWNER':
      return Object.assign({}, state, {
        owner: action.value
      });
      // {
      //   ...state,
      //   owner: action.value
      // }
    case 'UPDATE REPO':
      return Object.assign({}, state, {
        repo: action.value
      });

      // return {
      //   ...state,
      //   repo: action.value
      // }
    case 'UPDATE SHA':
      return Object.assign({}, state, {
        sha: action.value
      });
      
      // return {
      //   ...state,
      //   sha: action.value
      // }
    case 'UPDATE TREE':
      return Object.assign({}, state, {
        tree: action.value
      });
    default:
      return state;
  }

};

module.exports = reducer;
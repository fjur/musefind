var actions = {
  updateOwner: function (owner){
    return {
      type: 'UPDATE OWNER',
      value: owner
    };
  },
  updateRepo: function updateRepo(repo){
    return {
      type: 'UPDATE REPO',
      value: repo
    };
  },
  updateSha: function (sha){
    return {
      type: 'UPDATE SHA',
      value: sha
    }
  },
  updateTree: function (tree){
    return {
      type: 'UPDATE TREE',
      value: tree
    }
  },
  error: function (error){
    return {
      type: 'ERROR',
      status: error.status,
      statusText: error.statusText
    }
  }
}

module.exports = actions;
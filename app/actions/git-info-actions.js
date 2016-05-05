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
  }
}

module.exports = actions;
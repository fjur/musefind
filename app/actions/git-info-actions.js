var actions = {
  updateOwner: function (owner){
    return {
      type: 'UPDATE OWNER',
      owner
    };
  },
  updateRepo: function updateRepo(repo){
    return {
      type: 'UPDATE REPO',
      repo
    };
  },
  updateSha: function (sha){
    return {
      type: 'UPDATE SHA',
      sha
    }
  }
}

module.exports = actions;
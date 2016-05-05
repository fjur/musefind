var axios = require('axios');
var store = require('../store/store');
var actions = require('../actions/git-info-actions');

var helpers = {
  getFiles: function (owner, repo, sha){
    //repos/:owner/:repo/git/trees/:sha?recursive=1
    //repos/:owner/:repo/git/trees/:branchname?recursive=1
    return axios.get("https://api.github.com/repos/" + owner + "/" + repo + "/git/trees/" + sha + "?recursive=1")
    .then(function(info){
      store.dispatch(actions.updateTree(info.data.tree));
      return info;
    })
    .catch(function(err){
      return null
    });
  }
};

module.exports = helpers;
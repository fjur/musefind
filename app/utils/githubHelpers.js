var axios = require('axios');

var helpers = {
  getFiles: function (owner, repo, sha){
    //repos/:owner/:repo/git/trees/:sha?recursive=1
    //repos/:owner/:repo/git/trees/:branchname?recursive=1
    return axios.get("https://api.github.com/repos/" + owner + "/" + repo + "/git/trees/" + sha + "?recursive=1")
    .then(function(info){
      return info
    })
    .catch(function(err){
      console.log(err);
      return null
    });
  }
};

module.exports = helpers;
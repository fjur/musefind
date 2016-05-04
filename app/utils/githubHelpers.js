var axios = require('axios');

// function getFiles(){
//   ///repos/:owner/:repo/git/trees/:sha?recursive=1
//   var hello = axios.get('https://api.github.com/repos/fjur/skillsBC');
//   console.log(hello);
// 
// 3660b9ab71536497c58f6a9c06c7931084dc9a88
var helpers = {
  getFiles: function (){
    //repos/:owner/:repo/git/trees/:sha?recursive=1
    //repos/:owner/:repo/git/trees/:branchname?recursive=1
    return axios.get('https://api.github.com/repos/fjur/skillsBC/git/trees/master?recursive=1')
    .then(function(info){
      // info.data.tree.map(function (item, index){
      //   //check to see if type is tree or blob
      //   //if tree, check paths, for / is an index subdir one more, else go to root
      //   //if blob add a value to current dir
      // });
      return info
      // console.log(info);
    })
    .catch(function(err){
      console.log(err);
    });
  }
};

module.exports = helpers;
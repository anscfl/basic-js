module.exports = function createDreamTeam(members) {
  let name = [];
  if(!Array.isArray(members)){
    return false;
  }
  for(let member of members){
    if(typeof member === 'string'){
      name.push(member.trim().toUpperCase()[0]);
    }
    else {
      continue;
    }
  }
    return name.sort().join('');
};
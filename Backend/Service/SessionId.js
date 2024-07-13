const SessionId  = new Map();

function getUser(id){
  return SessionId.get(id);
}

function setUser(id,user){
    SessionId.set(id,user);
}

export {getUser,setUser,SessionId}
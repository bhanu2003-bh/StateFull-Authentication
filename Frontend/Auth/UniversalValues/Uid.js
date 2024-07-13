class Uid{

#uid;

getter(){
    return this.#uid;
}

setter(value){
    this.#uid = value
}


}

const UID = new Uid();

export default UID;
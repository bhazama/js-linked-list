/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var list = null;
  var head = null;
  var tail = null;
  var previous;
  var current;
  var length = 0;
  var temp = {};



  return {
    getHead : getHead,
    getTail : getTail,
    add : add,
    get : get,
    remove : remove,
    insert : insert,
    makeNode : makeNode

  };

  function makeNode(data){
    var node = {};
    node.value = data;
    node.next = null;
    return node;
  }

  function getHead(){
    return head;
  }

  function getTail(){
    return tail;
  }

  function add(val){
    var node = {
      value : val,
      next : null
    };
    if (list === null){
      list = node;
      tail = node;
      head = node;
      //current = node;
    }else {
      tail = node;
      tail.next = node;
      //previous = node;
      //current = node;
    }
    length++;
    return tail;

}

  function get(number){
    temp = head;
    for(var i = 0; i < number; i++){
      if(temp.next === null){
        return false;
      }else if (temp.length === number) {
        return temp;
      }{

      }

    }

  }

  function remove(number){

  }

  function insert(value, number){

  }


}

console.log(linkedListGenerator().get(5));

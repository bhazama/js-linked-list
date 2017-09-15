/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var list = null;
  var head = null;
  var tail = null;
  var previousNode;
  var currentNode;
  var nextNode;
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

    if(head === null && tail === null){ //if list is empty
      head = node;                      // add node object, change pointer of "head" and "tail" to the new object
      tail = node;
    }else{                              // if list isnt empty
      tail.next = node;                 // add next node object to the "next" value in the tail
      tail = node;                      // change the tail pointer to the new node object added
    }
    length++;                           // iterate the length of the list by the new object
    return node;                        // returns the newly added node object
  }

  function get(number){
    current = head;
    if(number < length){
      for(var i = 0; i < number; i++){
        current = current.next;
      }
      return current;
    }
    return false;
  }

  function remove(number){
    var removeNode = get(number);
    var previousNode = get(number - 1);

    if (removeNode === false) {
      return false;

    } else if (number === 0) {
      head = head.next;

    } else if (removeNode === tail) {
      tail = previousNode;
      tail.next = false;

    } else {
      previousNode.next = removeNode.next;
    }


    }

  function insert(value, number){
    previousNode = get(number - 1);
    currentNode = get(number);
    var node = {
      val : value,
      next : currentNode
    };
    if(number === 0) {
      head = node;
      node.next = currentNode;
    }else if (number < 0){
      return false;
    }else if(currentNode === false){
      return false;
    }else {
      previousNode.next = node;
      node.next = currentNode;
    }
  }


}


console.log(linkedListGenerator().remove(3));

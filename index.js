class linkedlist {
    constructor(){
        this.head = null;
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


let list = new linkedlist;

list.head = new Node(10);

console.log(list);

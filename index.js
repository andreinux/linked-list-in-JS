class linkedlist {
    constructor(){
        this.head = null;
    }


    append(value){

        let curr = this.head;

        if(this.head === null){
            this.head = new Node(value);
            return;
        }

        while(curr.next !== null){
            curr = curr.next;
        }

        curr.next = new Node(value);
    }


    prepend(value){
        let next = this.head;

        this.head = new Node(value);
        this.head.next = next;
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


let list = new linkedlist;

list.append(20);
list.prepend(10);

console.log(list);



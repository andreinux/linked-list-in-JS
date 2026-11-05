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
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


let list = new linkedlist;

list.append(20);

console.log(list);



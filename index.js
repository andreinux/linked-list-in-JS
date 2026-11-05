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

    size(){
        let curr = this.head;
        let count = 0;

        while(curr !== null){
            count++;
            curr = curr.next;
        }

        return count;
    }

    headValue(){
        if(this.head === null){
            return undefined;
        }else{
            return this.head.value;
        }
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


let list = new linkedlist;


console.log(list.headValue());




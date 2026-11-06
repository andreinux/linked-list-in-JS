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


    tailValue(){
        let curr = this.head;

        if(this.head === null){
            return undefined;
        }

        while(curr.next !== null){
            curr = curr.next;
        }

        return curr.value;
    }

    at(index){
        let curr = this.head;
        let currindex = 0;

        if(this.head ===  null){
            return undefined;
        }

        while(currindex !== index){
            if(curr.next === null){
                return undefined;
            }
            curr = curr.next;
            currindex = currindex + 1;
        }

        return curr.value;
    }

    pop(){
         let listhead = this.head;

         if(this.head == null){
            return undefined;
         }

         let nextnode = this.head.next;
         this.head = nextnode;

         return listhead.value;
    }

    contains(value){
        let curr = this.head;

        while(curr !== null){
            if(curr.value === value){
                return true;
            }
            curr = curr.next;
        }

        return false;
    }

    findIndex(value){
        let index = 0;
        let curr = this.head;

        if(this.head == null){
            return -1;
        }

        while(curr !== null){
            if(curr.value === value){
                return index;
            }
            curr = curr.next;
            index = index + 1;
        }

        return -1;
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


let list = new linkedlist;
list.append(10);
list.append(50);
list.append(30);
console.log(list.findIndex(30));





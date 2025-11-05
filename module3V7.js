class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {  //-->linklist er sesh a kono node add kora
        const newNode = new Node(value); //node banailam
        //the linked list is empty
        if (this.head === null) { // headCheck->null(faka)
            this.head = newNode; //15 te je node banaisi oita re point korotese
            this.tail = newNode; //list a ekta element thakle to 1 tai head and tail hobe
        } else { //if the linked list is not empty
            //1.  present a j tail ase oiter next er sathe notun node conncet kora   2. notun node re tail banano 
            this.tail.next = newNode; //present node er next er moddhe notun node ta boshay dilam 
            this.tail = newNode // notun tail aita 
        }
        this.length++; // notun node add hoise tai length baraite hobe
    }
    print() { //print kore aita diye
        const arr = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next
        }
        console.log(arr.join("-->"), "->null")
    }
}

const linkedList = new LinkedList();
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.print()
//prepend --> node er surute add hobe
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
    // append --> last a node add kora
    append(value) {
        const newNode = new Node(value)
        if (this.head === null) {

            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // prepend --> first a node add kora
    prepend(value) {
        const newNode = new Node(value); // ai line deiyye already ekta node create hoye jabe 
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //insert--> notun node lister maje add korte 
    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.error('index is out of bound');
            return undefined;
        }
        if (index === 0) { //surute insert korle
            return this.prepend(value)
        }
        if (index === this.length) { //last a insert korte
            return this.append(value)
        }
        //**********but if the insert is in the middle
        const leadingNode = this._traverseToIndex(index - 1);
        const holdingNode = leadingNode.next;
        const newNode = new Node(value)
        leadingNode.next = newNode
        newNode.next = holdingNode;
        this.length++
    }
//kono node delete korte
    remove(){
        const leadingNode=this._traverseToIndex(index-1)
        
    }



    //leading node finding
    //private helper methood ,ai object er baire use korte hoy na ai function 
    _traverseToIndex(index) {
        let count = 0;
        let currentNode = this.head //matro  jei node banabo seita r ki  
        while (count !== index) {
            currentNode = currentNode.next;
            count++
        }
        return currentNode;
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
//apend 
linkedList.append(0)
linkedList.append(1)
linkedList.append(3)
linkedList.insert(2,200)
// prepend
// linkedList.prepend(10)
// linkedList.prepend(20)
// linkedList.prepend(30)
linkedList.print();
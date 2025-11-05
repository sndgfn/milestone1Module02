// const createCounter = () => {
//     let count = 0
//     return (amount) => {
//         count = count + amount
//         return count;
//     }
// }
// const counter = createCounter();
// console.log(counter(3))
// console.log(counter(5))



// *************this mane hocche object er vitorer kono kisu niye deal kortesii .************* 

class counter {
    constructor(count) {
        this.count = count;
    }
    add(amount) {
        this.count = this.count + amount;
    }
    print() {
        console.log(this.count)
    }
}


const counter1 = new counter(0);
counter1.add(5);
counter1.add(10);
counter1.print();
// console.log(counter1)

const counter2 = new counter(10)
counter1.add(30)
counter1.add(20)
counter1.print();

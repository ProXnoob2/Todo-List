export class Todo{
    sno: number;
    title: string;
    desc: string;
    active: boolean;
    constructor(data: any){
       this.sno = data.sno ||0; 
       this.title = data.title ||''; 
       this.desc = data.desc ||''; 
       this.active = data.active ||false; 
    }
}

export interface Tododo{
    sno: number;
    title: string;
    desc: string;
    active: boolean;
}

// export class Human{
//     hand: number;
//     legs: number;
//     stomachSize: number;
//     name: string;
//     disable: boolean;
//     constructor(data: any){
//         this.hand = data.hand||0;
//         this.legs = data.legs||0;
//         this.stomachSize = data.stomachSize || data.stomachsize||0;
//         this.name = data.name||'';
//         this.disable = data.disable||false;
//     }
// }

// let people: Array<Human> =[{hand: 2, legs: 2, stomachSize:-21, name: "adeeb", disable: false },
//         {hand: 1, legs: 1, stomachSize:100, name: "banar", disable: true },
//         {hand: 2, legs: 2, stomachSize:400, name: "motu", disable: false },
//         {hand: 0, legs: 2, stomachSize:1000, name: "baklol", disable: true }]

// let peopleArray: Array<Human> = people.map((res) => new Human(res))

// console.log(peopleArray);
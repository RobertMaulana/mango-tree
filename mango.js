"use strict"

//parent pohon
class FruitTree {
  constructor(age = 0, height = 0,status = true){
    this._age = age;
    this._height = height;
    this._harvestedFruit = 0;
    this._status = status;
    this._total = 0;
    this._fruits = [];
  }
  grow() {
    this._age += 1;
    if(this._age <= this._mature_age) {
      this._height += this.getRandomNumber()/10;
      //jika umur sudah mencapai max umurnya maka
    }else if (this._age === this._max_age){
      this._status = false;
    }
  }
  produceFruits() {
    if(this._age > this._mature_age) {
      let angkaRand = this.getRandomNumber();
      for (let i = 0; i < angkaRand; i++) {
        this._fruits.push(this._fruit);
      }
    }
  }
  harvest() {
    let jumlah = this._fruits.length;
    this._harvestedFruit = jumlah;
    this._total += jumlah;
    this._fruits = [];
  }
  getRandomNumber() {
    return Math.floor((Math.random() * 15) + 1);
  }
  getAge () {
    return this._age;
  }
}
//Parent class buah
class Fruit {
  constructor() {
  }
}

//membuat pohon mangga
class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(age, height, status) {
    super(age,height,status);
    this._name = "Pohon Mangga"
    this._mature_age = 7;
    this._max_age = 12;
    this._fruit = new Mango();
  }
  getAge() {
    return super.getAge();
  }
  // Get current states here
  // Grow the tree
  grow() {
    super.grow();
  }
  // Produce some mangoes
  produceMangoes() {
    super.produceFruits();
  }
  // Get some fruits
  harvest() {
    return super.harvest();
  }
}
//membuat class buah mangga
class Mango extends Fruit{
  constructor() {
    super()
  }
}
//membuat class pohon apel
class AppleTree extends FruitTree {
  constructor (age, height,status) {
    super(age,height,status);
    this._name = "Pohon Apel"
    this._max_age = 10;
    this._mature_age = 6;
    this._fruit = new Apple();
  }
  get age() {
    return `umur pohon = ${this._age} tahun`;
  }
  get height() {
    return `tinggi pohon = ${this._height} meter`;
  }
  // Grow the tree
  grow() {
    super.grow();
  }
  // Produce some mangoes
  produceMangoes() {
    super.produceFruits();
  }
  // Get some fruits
  harvest() {
    return super.harvest();
  }
}
//membuat class buah apel
class Apple extends Fruit{
  constructor () {
    super();
  }
}
//class pohon pear
class PearTree extends FruitTree {
  constructor (age, height, status) {
    super(age,height,status);
    this._name = "Pohon Pir"
    this._max_age = 14;
    this._mature_age = 10;
    this._fruit = new Pear();
  }
  // Grow the tree
  grow() {
    super.grow();
  }
  // Produce some mangoes
  produceMangoes() {
    super.produceFruits();
  }
  // Get some fruits
  harvest() {
    return super.harvest();
  }
}
//class buah pear
class Pear extends Fruit {
  constructor () {
    super();
  }
}

class TreeGrove {
  constructor() {
    this.trees = [];
  }
  inputTree(type, age, height, status) {
    let pohon;
    if (type == "MangoTree") {
      pohon = new MangoTree(age,height,status);
    } else if (type == "AppleTree"){
      pohon = new AppleTree(age,height,status);
    } else if (type == "PearTree"){
      pohon = new PearTree(age,height,status);
    }
    this.trees.push(pohon);
  }
  nextYear() {
    for (let i = 0; i < this.trees.length; i++) {
      this.trees[i].grow();
      this.trees[i].produceFruits();
      this.trees[i].harvest();
    }
  }
  showAges() {
    for (let i = 0; i < this.trees.length; i++) {
      console.log(`Umur ${this.trees[i]._name} = ${this.trees[i]._age} tahun`);
    }
  }
  showTrees() {
    for (let i = 0; i < this.trees.length; i++) {
      // console.log(`No. ${i+1} : ${this.trees[i]._name} | umur : ${this.trees[i]._age} tahun | tinggi : ${this.trees[i]._height} m\nBuah yang dipanen tahun ini : ${this.trees[i]._harvestedFruit} buah, dan total buah yang terkumpul : ${this.trees[i]._total} buah\n`);
      console.log(`No. ${i+1} : ${this.trees[i]._name} | umur : ${this.trees[i]._age} tahun | tinggi : ${this.trees[i]._height} m\nBuah yang dipanen tahun ini : ${this.trees[i]._harvestedFruit} buah\n`);
    }
  }
  matureTrees() {
    for (let i = 0; i < this.trees.length; i++) {
      if(this.trees[i]._age >= this.trees[i]._mature_age) {
        console.log(`Umur ${this.trees[i]._name} adalah ${this.trees[i]._age} tahun dan sudah berumur Mature`);
      }
    }
  }
  deadTrees() {
    let counter = 0;
    for (let i = 0; i < this.trees.length; i++) {
      if(this.trees[i]._status != true) {
        let mati = this.trees[i]._age - this.trees[i]._max_age
        console.log(`Umur ${this.trees[i]._name} adalah ${this.trees[i]._age} tahun dan sudah mati ${mati} tahun yang lalu`);
        counter += 1;
      }
    }
    if (counter == 4) {
        console.log("Semua Pohon masih dalam masa pertumbuhan");
    }
  }
}
var grove = new TreeGrove();
grove.inputTree("MangoTree",3,1.8,true);
grove.inputTree("MangoTree",5,2.4,true);
grove.inputTree("AppleTree",4,1.2,true);
grove.inputTree("PearTree",7,2,true);
console.log("Umur Pertama : ")
grove.showAges()
console.log("---------------------------------------------------")
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
console.log("---------------------------------------------------")
console.log("Umur setelah 5 tahun perkembangan : ")
grove.showAges()
console.log("---------------------------------------------------")
grove.matureTrees();
console.log("---------------------------------------------------")
grove.deadTrees();
console.log("---------------------------------------------------")
grove.showTrees();

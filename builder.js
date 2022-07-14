class Dish {
  constructor(builder) {
    this.cheese = builder.cheese || false;
    this.lettuce = builder.lettuce || false;
    this.tomato = builder.tomato || false;
  }
}

class Salad extends Dish {
  constructor(builder) {
    super(builder);
    this.chicken = builder.chicken || false;
  }
}

class Burger extends Dish {
  constructor(builder) {
    super(builder);
    this.bread = builder.bread || false;
    this.beef = builder.beef || false;
  }
}

class DishBuilder {
  addCheese() {
    this.cheese = true;
    return this;
  }

  addLettuce() {
    this.lettuce = true;
    return this;
  }

  addTomato() {
    this.tomato = true;
    return this;
  }

  getDish() {
    throw new Error(`No realization of getProduct() in abstract class`);
  }
}

class SaladBuilder extends DishBuilder {
  addChicken() {
    this.chicken = true;
    return this;
  }

  getDish() {
    return new Salad(this);
  }
}

class BurgerBuilder extends DishBuilder {
  addBeef() {
    this.beef = true;
    return this;
  }

  addBread() {
    this.bread = true;
    return this;
  }

  getDish() {
    return new Burger(this);
  }
}

console.log("");
console.log("Builder pattern demo");
const salad = new SaladBuilder()
  .addCheese()
  .addLettuce()
  .addTomato()
  .addChicken()
  .getDish();

console.log(salad);

const burger = new BurgerBuilder()
  .addCheese()
  .addLettuce()
  .addTomato()
  .addBread()
  .addBeef()
  .getDish();

console.log(burger);

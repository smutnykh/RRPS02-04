class Chair {
  info() {
    console.log("This is a chair");
  }
}

class Table {
  info() {
    console.log("This is a table");
  }
}

class Sofa {
  info() {
    console.log("This is a sofa");
  }
}

class ChairFactory {
    create(){
        return new Chair();
    }
}

class TableFactory {
    create(){
        return new Table();
    }
}

class SofaFactory {
    create(){
        return new Sofa();
    }
}

const FurnitureType = {
  Chair: "Chair",
  Table: "Table",
  Sofa: "Sofa",
};

function furnitureProducer(type) {
  switch (type) {
    case FurnitureType.Chair:
      return new ChairFactory();
    case FurnitureType.Table:
      return new TableFactory();
    case FurnitureType.Sofa:
      return new SofaFactory();
  }
}

console.log("");
console.log("Abstact factory pattern demo");
furnitureProducer(FurnitureType.Chair).create().info();
furnitureProducer(FurnitureType.Table).create().info();
furnitureProducer(FurnitureType.Sofa).create().info();

class Student {
  constructor(name, age, university) {
    this.name = name;
    this.age = age;
    this.university = university;
  }

  info() {
    console.log(this);
  }
}

class StudentPrototype {
  constructor(proto) {
    this.proto = proto;
  }

  clone() {
    var student = new Student();

    student.name = proto.name;
    student.age = proto.age;
    student.university = proto.university;

    return student;
  }
}

console.log("");
console.log("Prototype pattern demo");
var proto = new Student("Ivan Ivanov", 18, "ZSTU");
var prototype = new StudentPrototype(proto);

var student = prototype.clone();
student.info();

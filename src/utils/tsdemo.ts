export function runTsDemo() {
  const tsMsg: string = 'hello typescript'
  const enum Direction {
    Up,
    Down,
    Left,
    Right
  }
  const dir: Direction = Direction.Down
  console.log(dir)

  const tupleType: [number, string] = [1, 'hello']
  console.log(tupleType)

  const isDone: boolean = false
  console.log(isDone)
  const isDoneObj: Boolean = new Boolean(1)
  console.log(isDoneObj)
  
  // 访问联合类型，必须是共有的属性或方法
  function getLength(something: string | number): number {
    return something.length;
  }

  let myFavoriteNumber: string | number;
  myFavoriteNumber = 'seven'; // 被赋值时会进行类型断言，所以不会报错
  console.log(myFavoriteNumber.length); // 5
  myFavoriteNumber = 7;
  console.log(myFavoriteNumber.length); // 编译时报错

  interface Person {
    name: string;
    age: number;
  }

  let tom: Person = {
    name: 'Tom',
    age: 25
  }

  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  // 类充当接口使用
  const cat: Animal = {
    name: 'cat',
    age: 2
  }
  console.log(cat) 

  // 实例化类
  const dog: Animal = new Animal('dog', 2)
  console.log(dog)


  // 类的继承
  class Animal2 extends Animal {
    constructor(name: string, age: number) {
      super(name, age)
    }
  }

  // 类充当接口使用
  const cat2: Animal2 = {
    name: 'cat2',
    age: 3
  }
  console.log(cat2)
  // 实例化类
  const dog2: Animal2 = new Animal2('dog2', 2)
  console.log(dog2)


  // 接口继承类
  interface Animal3 extends Animal{
    sex: string,
    printName(): void
  }

  const cat3: Animal3 = {
    name: '烩面',
    age: 18,
    sex: '女',
    printName() {
      console.log(this.name)
    }
  }
  console.log(cat3)
  cat3.printName()

  // 接口可以继承类，Animal3接口不能进行实例化类操作
  // const dog3: Animal3 = new Animal3('dog3', 4)
  // console.log(dog3)

  // // 类实现接口
  // class Animal4 implements Animal3 {
  //   name: string;
  //   age: number;
  //   sex: string;
  //   email: string;
  //   printName() {
  //     console.log(this.name)
  //   }; 
  // }

  // const cat4: Animal4 = {
  //   name: '豆包',
  //   age: 23,
  //   sex: 'female',
  //   email: '13@string.com',
  // }
  // console.log(cat4)

  
  // const dog4: Animal4 = new Animal4(
  //   name: '豆包',
  //   age: 23,
  //   sex: 'female',
  //   email: '13@string.com',
  // )
  // console.log(dog4)


  // 可选的属性
  interface Snooker {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: string | number
  }

  let tomtom: Snooker = {
    id: 1,
    name: 'Tom',
    age: 25,
    gender: 'male'
  }

  ///////////////
  // 类型断言
  interface Cat {
    name: string;
    run(): void;
  }

  interface Fish {
    name: string;
    swim(): void;
  }

  function getName(ani: Cat | Fish) {
    return ani.name
  }

  console.log(getName({name: 'Tom', swim() {}}))

  function isFish(ani: Cat | Fish) {
    if(typeof (ani as Fish).swim === 'function') {
      return true
    } else {
      return false
    }
  }

  console.log(isFish({name: 'Tom', run() {}}))


  // function getCacheData<T>(key: string): T {
  //   return (window as any).cache[key];
  // }

  // interface Catcat {
  //     name: string;
  //     run(): void;
  // }

  // const tomtomtom = getCacheData<Catcat>('tom');
  // tomtomtom.run();

  return tsMsg
}
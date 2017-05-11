/**
 * Created by lmy2534290808 on 2017/5/7.
 */
export default class Student {
    constructor(name, age, sex) {//注意ES6中类的属性应该在构造器中定义
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    getText(){
        return "name:"+this.name+",age:"+this.age+",sex:"+this.sex;
    }
}
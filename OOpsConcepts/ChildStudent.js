
import ParentPerson from './ParentPerson.js';

class ChildStudent extends ParentPerson{
constructor(name, age, grade){
    super(name, age);       
    this.grade=grade;
}

getStudentDetails(){
    return `${super.getDetails()}, Grade: ${this.grade}`;  
}       
}
export default ChildStudent;
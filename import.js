import {calculateGrade,criteria,group,addGrade,newGrade} from "./export.js"

console.log(calculateGrade([30,50,60,90],group));
console.log(calculateGrade([10,50,60,80],criteria,20));
console.log(calculateGrade([10, 50, 60], criteria, 90));
console.log(calculateGrade([10, 50, 20, 50, 30, 60], group));
console.log(calculateGrade([100, 20, 40, 50], criteria));

const studentGrade = addGrade("Teeradet Grade:");
console.log(studentGrade(4));

const studentGrade2 = addGrade("Warisara Grade:");
console.log(studentGrade(3.5));

const studentsGrade3 = addGrade("Montira Grade:");
console.log(studentGrade(3));

const studentGrade4 = addGrade("Preeyathorn Grade:");
console.log(studentGrade4(2.5));

const studentGrade5 = addGrade("Phunon Grade:");
console.log(studentGrade(3));

const studentUnknow = addGrade();
console.log(studentGrade4(2));

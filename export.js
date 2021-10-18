// Higher Order function
// function ที่รับ parameter เป็นค่า literal และ function
// ทำงานโดยเรียกใช้ function ที่ส่งเข้ามา
// โดยรับ rest parameter ด้วย และเอา rest ไปรวมกับข้อมูลหลักที่เป็น array
export var calculateGrade = function (score, method, ...rest) {
  return method(score.concat(rest));
};
// function ที่รับค่าคะแนนเข้ามาแล้ว return array ของ object ออกไป
//โดย จะตรวจสอบว่าคะแนนนั้นคิดได้เป็นเกรดอะไร และ นำเกรดไปสร้างเป็น
// property ของ object และมี property ที่เป็นคะแนน และชื่อวิชา
export var criteria = function (score) {
  let obj = [];
  let course = ["INT201", "INT202", "INT214"];
  let running_num = 0;

  //รับคะแนนมาเปรียบเทียบในรายวิชาที่ใส่ใน Array ว่ารายวิชานั้นๆได้เกรดเป็นอะไร
  for (i of score) {
    if (i >= 80) {
      obj.push({ course: course[running_num % 3], score: i, grade: "A" });
      running_num++;
    } else if (i >= 70) {
      obj.push({ course: course[running_num % 3], score: i, grade: "B" });
      running_num++;
    } else if (i >= 60) {
      obj.push({ course: course[running_num % 3], score: i, grade: "C" });
      running_num++;
    } else {
      obj.push({ course: course[running_num % 3], score: i, grade: "F" });
      running_num++;
    }
  }
  return obj;
};
// function ที่รับ array ของคะแนนและ return คะแนนเฉลี่ย
// เอาไปใช้ในการคำนวน function ถัดไป
export var mean = (score) => {
  let sum = 0;
  for (i of score) {
    sum += i;
  }
  return sum;
};
// function ที่รับค่าคะแนนที่เป็น array
// และนำคะแนนแต่ละค่าไปเปรียบเทียบกับคะแนนเฉลี่ย และสร้าง
//object ที่มี property เลขที่,คะแนนที่ได้,ผ่านสอบ
//โดยหากคะแนนต่ำกว่าค่าเฉลี่ย จะมี value pass เป็น false
export var group = function (score = []) {
  let running_num = 1;
  let passingScore = mean(score);
  let obj = [];

  for (i of score) {
    if (i >= passingScore) {
      obj.push({ number: running_num, score: i, pass: true });
      running_num++;
    } else {
      obj.push({ number: running_num, score: i, pass: false });
      running_num++;
    }
  }
  return obj;
};
console.log(calculateGrade([10, 50, 60], criteria, 90));
console.log(calculateGrade([10, 50, 20, 50, 30, 60], group));
console.log(calculateGrade([100, 20, 40, 50], criteria));

// Closure Functions
const newGrade = "Add new grade to you GPA";
export { newGrade };

export function addGrade(name = "unknown") {
  // เก็บ Parameter เป็นรายชื่อเป็น Array แล้วใช่ Method
  //unshift เพื่อใส้ค่าเข้าไปยัง Array และใช้ Default Parameter เพื่อกำหนดชื่อตั้งต้นเป็น unknown
  let grade = [];
  grade.unshift(name);

  function equalGrade(numberGrade) {
    // เพื่อรับค่า Parameter เป็นเกรดที่เป็นตัวเลขแล้วมาเปรียบเทียบเป็นตัวอักษรโดยการใช้ Switch case
    // แล้วนำไปใส่ใน Array grade
    switch (numberGrade) {
      case 1:
        console.log(newGrade);
        grade.push("D");
        return grade;
        break;
      case 1.5:
        console.log(newGrade);
        grade.push("D+");
        return grade;
        break;
      case 2:
        console.log(newGrade);
        grade.push("C");
        return grade;
        break;
      case 2.5:
        console.log(newGrade);
        grade.push("C+");
        return grade;
        break;
      case 3:
        console.log(newGrade);
        grade.push("B");
        return grade;
        break;
      case 3.5:
        console.log(newGrade);
        grade.push("B+");
        return grade;
        break;
      case 4:
        console.log(newGrade);
        grade.push("A");
        return grade;
        break;
    }
  }
  return equalGrade;
}

// เคสตัวอย่าง
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

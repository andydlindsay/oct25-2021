const studentName = 'Alice';
const studentGrade = 70;
const cohortName = 'Oct25 2021';

const studentOne = ['Alice', 70, 'Oct25 2021'];
const studentTwo = ['Bob', 65, 'Oct25 2021'];

const studentBob = {
  name: 'Bob',
  grade: 80
};

const studentObj = {
  grades: [80, 20, 70],
  'first name': 'Alice',
  cohort: 'Oct25 2021',
  friend: studentBob,

  newKey: "new value"
};

studentObj['first name']

// can I describe something then
// studentName['name'] = 'Alice';

const grades = 'grades';
const studentGrades = studentObj[grades] // [80, 20, 70]

const studentCohort = studentObj.cohort; // 'Oct25 2021'
console.log('cohort:', studentCohort);

console.log('grades:', studentGrades);

console.log(studentObj);

const arr = [1,2,3];
const num = arr[1 + 1] // 2

console['log']()
console.log()

const objOne = { one: 'two' };
const objTwo = { one: 'two' };
objOne !== objTwo

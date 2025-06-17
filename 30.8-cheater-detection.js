// # Cheater Detection

// You are given an array, `answers`, with the answers of a multi-choice test. The list has `k` characters (`'a'`, `'b'`, `'c'`, or `'d'`), where `k` is the number of questions in the exam.

// You are also given an array, `students`, of students' answers for the test. Each entry is a tuple `[student_id, desk, answers]`, where:

// - Student IDs are unique positive integers.
// - Desks are unique positive integers. Desks are arranged in rows of `m` desks, starting with desks `1` to `m` in the first row, `m+1` to `2m` in the second row, and so on. Not all desks may be occupied. E.g., there may be a student at desk `2` but none at desk `1`.
// - For each student, `answers` is an array of `k` characters (`'a'`, `'b'`, `'c'`, or `'d'`).

// Two students are considered _suspect_ if they have made **identical mistakes** and **sit next to each other** in the same row (we don't care about students in the front or behind one another).

// Return a list of all pairs of suspect students in any order (the order of the two students in a pair also doesn't matter).

// ```
// Example 1: answers = ['a', 'b', 'c', 'c'], m = 5, students = [
//     # student ID, desk, answers
//     (4, 10, ['a', 'b', 'c', 'd']),
//     (1, 6,  ['a', 'b', 'c', 'd']),
//     (3, 8,  ['a', 'b', 'd', 'd']),
//     (5, 11, ['a', 'b', 'c', 'd']),
//     (9, 7,  ['a', 'b', 'c', 'd']),
//     (6, 16, ['a', 'b', 'd', 'd'])
// ]
// Output: [[1, 9]]. Students 1 and 9 made the same mistakes and sit next to each other.

// Example 2: answers = ['a', 'b'], m = 2, students = [
//     (1, 1, ['a', 'b']),
//     (2, 2, ['a', 'b'])
// ]
// Output: []. Perfect scores are not suspicious.

// Example 3: answers = ['a', 'b'], m = 2, students = [
//     (1, 1, ['b', 'b']),
//     (2, 2, ['b', 'b'])
// ]
// Output: [[1, 2]]. Both students made the same mistake and sit next to each other.
// ```

// Constraints:

// - The length of answers is at most 10^5
// - The length of students is at most 10^5
// - All answers are 'a', 'b', 'c', or 'd'
// - All student IDs are unique positive integers
// - All desks are unique positive integers
// - m is a positive integer less than 10^5

function cheatDetection(ans, m, stus) {

  function arrsEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  function allCorrect(stuAnswers) {
    return arrsEqual(stuAnswers, ans);
  }

  function nextTo(a, b) {
    return Math.abs(a - b) === 1 && Math.trunc((a-1) / m) === Math.trunc((b-1) / m);
  }

  let wrongAns = {};
  let suspects = [];
  for (let stu of stus) {
    if (!allCorrect(stu[2])) {
      wrongAns[stu[1]] = { id: stu[0], answers: stu[2] };
      if (wrongAns[stu[1] - 1] && nextTo(stu[1], stu[1] - 1)) {
        if (arrsEqual(wrongAns[stu[1]].answers, wrongAns[stu[1] - 1].answers)) {
          suspects.push([wrongAns[stu[1]].id, wrongAns[stu[1] - 1].id]);
        }
      }
      if (wrongAns[stu[1] + 1] && nextTo(stu[1], stu[1] + 1)) {
        if (arrsEqual(wrongAns[stu[1]].answers, wrongAns[stu[1] + 1].answers)) {
          suspects.push([wrongAns[stu[1]].id, wrongAns[stu[1] + 1].id]);
        }
      }
    }
  }
  return suspects;
}

/*
Complexity:

Space: O(N), where N is the number of students.
We create extra space for the mapping of desk numbers to student id and answers, which worst case is size N if all students have wrong answers => O(N).
We create a suspects list, which worst case has N/2 elements => O(N).
O(2N) => O(N).

Time: O(N*K), where N is the number of students, and k is the number of answers.
With each iteration we compare the student's answer to the correct answers, and then potentially compare their answers to the answers of 1 or 2 students sitting next to them O(3k), and we do this for N student => O(N * 3k) = O(N * k).
*/

let answers = ['a', 'b', 'c', 'c'];
let m = 5;
let students = [
      [4, 10, ['a', 'b', 'c', 'd']],
      [1, 6,  ['a', 'b', 'c', 'd']],
      [3, 8,  ['a', 'b', 'd', 'd']],
      [5, 11, ['a', 'b', 'c', 'd']],
      [9, 7,  ['a', 'b', 'c', 'd']],
      [6, 16, ['a', 'b', 'd', 'd']]
  ];

console.log(cheatDetection(answers, m, students));

let answers2 = ['a', 'b'];
let m2 = 2;
let students2 = [
    [1, 1, ['a', 'b']],
    [2, 2, ['a', 'b']]
];

console.log(cheatDetection(answers2, m2, students2));

let answers3 = ['a', 'b'];
let m3 = 2;
let students3 = [
    [1, 1, ['b', 'b']],
    [2, 2, ['b', 'b']]
];

console.log(cheatDetection(answers3, m3, students3));


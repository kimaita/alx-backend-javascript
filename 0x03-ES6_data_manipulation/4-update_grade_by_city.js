function getScore(studentGrade) {
  if (studentGrade) {
    return studentGrade.grade;
  }
  return 'N/A';
}

export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: getScore(newGrades.find((stu) => stu.studentId === student.id)),
    }));
}

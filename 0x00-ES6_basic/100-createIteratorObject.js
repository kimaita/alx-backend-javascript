export default function createIteratorObject(report) {
  const depts = Object.values(report.allEmployees);
  return depts.flat();
}

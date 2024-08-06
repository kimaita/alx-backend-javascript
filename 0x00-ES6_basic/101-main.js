import createEmployeesObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';
import createIteratorObject from './100-createIteratorObject';
import iterateThroughObject from './101-iterateThroughObject';

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Mark', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie', 'Armie']),
  ...createEmployeesObject('hr', ['Margaret']),
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));

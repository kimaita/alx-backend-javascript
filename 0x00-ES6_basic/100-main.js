import createIteratorObject from './100-createIteratorObject';
import createEmployeesObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Mark', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie', 'Armie']),
  ...createEmployeesObject('hr', ['Margaret']),
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
  console.log(item);
}

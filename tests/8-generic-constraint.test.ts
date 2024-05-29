describe('Generic constraint', () => {
  interface Employee {
    id: string;
    name: string;
  }

  interface Manager extends Employee {
    totalEmployee: number;
  }

  interface VP extends Manager {
    totalManager: number;
  }

  class EmployeeData<T extends Employee> {
    constructor(public employee: T) {}
  }

  it('should support generic constraint', () => {
    const data1 = new EmployeeData<Employee>({
      id: '1',
      name: 'Felix',
    });

    const data2 = new EmployeeData<Manager>({
      id: '2',
      name: 'Vincent',
      totalEmployee: 10,
    });

    const data3 = new EmployeeData<VP>({
      id: '3',
      name: 'Renard',
      totalEmployee: 100,
      totalManager: 10,
    });
  });
});

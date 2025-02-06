export interface Employee {
    id: number;
    name: string;
    email: string;
    phone: string;
    company: {
      bs: string;
    };
  }
  
  export interface EmployeeCardProps {
    employee: Employee;
    loading: boolean;
  }
  
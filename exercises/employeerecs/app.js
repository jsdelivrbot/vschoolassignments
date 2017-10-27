

var employees = [];
function Employee (name, jobtitle, salary) {
  this.Name = name;
  this.Title = jobtitle;
  this.Salary =  salary;
  this.Status = "full time"
}

var employee1 = new Employee ("Bobby", "Director", "50k")
console.log(employee1);

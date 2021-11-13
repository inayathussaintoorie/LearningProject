'use strict'
const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
	
	
	//let person1 = new Person('Inayat', 'Hussain', 33);
	Student.prototype = Object.create(Person.prototype);
	Student.prototype.constructor = Student;
	let student1 = new Student('Inayat', 'khan', 33);
	
	console.log(student1.fullName);
	
	
	
});

function Person(fname, lname, age){
	this.firstName = fname;
	this.lastName = lname;
	this.age = age;
	Object.defineProperty(this, 'fullName', {
		get: function(){
			return this.firstName + ' ' + this.lastName;
		},
		set: function(name){
			let parts = name.split(' ');
			this.firstName = parts[0];
			this.lastName = parts[1];
		}
	});
}


function Student(fname, lname, age){
	Person.call(this, fname, lname, age);
	this.courses = [];
	this.getCourses = function(){
		console.log(courses);
	};
	this.addCourse = function(name){
		courses.push(name);
	}
}



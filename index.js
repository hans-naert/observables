import {Observable, Subject, map} from 'rxjs';
const subject = new Subject();
var observable = new Observable(function(observer) { 
	observer.next(1); 
	observer.next(2); 
	observer.next(3); 
	setTimeout(() => { observer.next(4); observer.complete(); }, 1000); 
});

var observable_byTen = observable.pipe(map(x => 10 * x));

console.log('just before subscribe'); 

subject.subscribe({ 
	next: x => console.log('got value ' + x), 
	error: err => console.error('something wrong occurred: '+err), 
	complete: () => console.log('done'), }); 
console.log('just after subscribe');

subject.subscribe({ 
	next: x => console.log('got value ' + x), 
	error: err => console.error('something wrong occurred: '+err), 
	complete: () => console.log('done'), });

observable_byTen.subscribe(subject);
var Observable = require('rxjs').Observable;
var map = require('rxjs/operators').map;

var observable = new Observable(function(observer) { 
	observer.next(1); 
	observer.next(2); 
	observer.next(3); 
	setTimeout(() => { observer.next(4); observer.complete(); }, 1000); 
});

var observable_byTen = observable.pipe(map(x => 10 * x));

console.log('just before subscribe'); 
observable_byTen.subscribe({ 
	next: x => console.log('got value ' + x), 
	error: err => console.error('something wrong occurred: '+err), 
	complete: () => console.log('done'), }); 
console.log('just after subscribe');


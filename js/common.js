function testGenerator() {
yield 'first';
document.write('first');

yield 'second';
document.write('second');

yield 'third';
document.write('third');
}

var g = testGenerator();
document.write(g.next());
document.write(g.next());
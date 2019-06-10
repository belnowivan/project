import readlineSync from 'readline-sync';

const user = () => { 
	const a = readlineSync.question('May I have your name? ');
	return console.log(`Hello, ${a} !`);
};
export default user;

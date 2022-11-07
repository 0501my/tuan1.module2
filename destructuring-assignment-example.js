// let profile = {
//     fname: 'Code',
//     lname: 'Gym',
//     bday: new Date('1979-01-02')
// }
// let fname = profile.fname;
// let lname = profile.lname;
// console.log(fname, lname);
// cải tiến
let {fname,lname,...rest}={fname : 'Code',lname : 'Gym',bday: new Date('1979-01-02')};
console.log(fname);
console.log(lname);
console.log(rest)
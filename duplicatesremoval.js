const numbers=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,10,11,12,13,14,15];
const name=["nanda","kumar","raja","rani","bishop","raja","roja","rani"];

const uniquenum = [... new Set(numbers)];
console.log(uniquenum);

const uniquename = [... new Set(name)];
console.log(uniquename);

const nota10 = (who) => `${who} tirou nota 10`;
const nota5 = (who) => `${who} tirou nota 5`;
const nota1 = (who) => `${who} tirou nota 1`;

const grouping = (callback, name) => {
  return callback(name);
}

console.log(grouping(nota10,'jamila'));
console.log(grouping(nota1,'Afolso'));
console.log(grouping(nota5,'Ubirajaba'));



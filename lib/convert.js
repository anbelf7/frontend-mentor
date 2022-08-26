let text = JSON.parse(process.argv[2]);
let split = text.map((e) => {
  let t = e.split(':');
  let name = t[0].replaceAll(' ', '-').toLowerCase();
  console.log(`'${name}':'${t[1]}',`);
  return e;
});

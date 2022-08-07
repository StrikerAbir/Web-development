const lyrics = 'but tishu didnt have to cut me off. and i dont need your love. but you treat me like a stranger. and that feels so rough.';
// spliting
const parts = lyrics.split(' ');
console.log(parts);
console.log(lyrics.split('')); 
console.log(lyrics.split('.')); 

// slicing
const partial = lyrics.slice(4, 9);
console.log(partial);
// substring 
const partial2 = lyrics.substring(4, 9);
console.log(partial2);
// join
const line = ['but tishu didnt have to cut me off.',
'and i dont need your love.',
'but you treat me like a stranger.',
'and that feels so rough.'];
const alljoin = line.join('::');
console.log(alljoin);
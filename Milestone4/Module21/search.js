const lyrics = 'but you didnt have to cut me off. and i dont need your love. but you treat me like a stranger. and that feels so rough.';

const exist = lyrics.includes('love');
console.log(exist);
// fix case-sensitive
const again = lyrics.toLowerCase().includes('Love'.toLowerCase());
console.log(again);

//indexOf
console.log(lyrics.indexOf('rough'));
console.log(lyrics.indexOf('you'));

// startswith
console.log(lyrics.startsWith('but'));
// endswith
console.log(lyrics.endsWith('.'));
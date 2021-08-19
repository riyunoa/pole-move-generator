const MOVES_LIST = [
  'front hook spin',
  'back hook spin',
  'inside leg spin',
  'jamilla',
  'pole sit',
  'layback',
  'handstand',
  'starfish',
  'fold over',
  'butterfly',
  'superman',
  'extended butterfly',
  'jade split',
  'twisted grip static v',
  'true grip static v',
  'elbow grip static v',
  'cup grip static v',
  'pistol grip static v',
  'candy',
  'shoulder mount',
  'pegasus',
  'iron x',
  'maxi',
  'ballerina',
  'allegra',
  'iron maiden',
  'middle split',
  'brass monkey',
  'fang',
  'sneaky v',
  'diva dive',
  'chopstick',
  'rainbow',
  'stargazer',
  'cupid',
  'flatline',
  'genie',
  'ice skater',
  'tick tock',
  'meathook',
  'porsche split',
  'ziggy split'
];

const NUM_MOVES = 5;

function generateMoves() {
  const shuffled = _.shuffle(MOVES_LIST);
  const result = shuffled.slice(0, NUM_MOVES);
  document.getElementById('container').innerHTML = result.join('<br/>');
  return result;
}

generateMoves();
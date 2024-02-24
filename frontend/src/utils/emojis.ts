const randomEmojis:string[] = [
    "😀", "🎉", "👻", "🍕", "🌈", "🚀", "🌟", "🍓", "🏀", "📚",
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯",
    "🦁", "🐮", "🐷", "🐸", "🐙", "🐵", "🦄", "🐞", "🦀", "🐠",
    "🐬", "🐳", "🍁", "🍀", "🍂", "🍃", "🌵", "🌴", "🌲", "🌺",
    "🌻", "🌼", "🌷", "🌹", "🥀", "🌾", "🍄", "🌍", "🌙", "⭐"
  ];
  
function getRandomEmojis(){
    return randomEmojis[Math.floor(Math.random() * randomEmojis.length)];
}

export default getRandomEmojis
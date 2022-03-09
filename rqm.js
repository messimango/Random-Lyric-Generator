let lyrics = 
[
    {
        lyric: '"You ain\'t ever made a birthday cake from digestive biscuits"',
        artist: '- Headie One', 
        link: "https://www.youtube.com/watch?v=IMPr9XXGymA"
    },
    {
        lyric: '"She got a light skin friend, look like Michael Jackson. Got a dark skin friend, look like Michael Jackson."',
        artist: '- Kanye West',
        link: "https://www.youtube.com/watch?v=raWSH1KrgFI"
    },
    {
        lyric: '"When I bust my nut I go and take a pee pee"',
        artist: '- M Huncho',
        link: "https://www.youtube.com/watch?v=7bZq9Kv8bic" 
    },
    {
        lyric: '"My little bro shitted out the pack and flushed it, Tell me how he could be so clumsy?"',
        artist: '- Headie One',
        link: "https://www.youtube.com/watch?v=x4jpQMUScUk" 
    },
    {
        lyric: '"Head to toe like a mannequin, Amiri denimz got them panickin"',
        artist: '- POP SMOKE',
        link: "https://www.youtube.com/watch?v=E-5rNHopqok" 
    },
    {
        lyric: '"CC bag look nice but the Birkin bag look way more heavy, That\'s just a big gyal ting, man ya get me?"',
        artist: '- Drake',
        link: "https://www.youtube.com/watch?v=znQriFAMBRs" 
    },
]

let button = document.getElementById("button")

let lyric = document.getElementById("lyric")

let artist = document.getElementById("artist")

let link = document.getElementById("youtube")

var audio = new Audio("./another-one.mp3")

button.addEventListener('click', () => {
    var random = Math.floor(Math.random() * lyrics.length)
    lyric.innerHTML = lyrics[random].lyric;
    artist.innerHTML = lyrics[random].artist;
    link.href = lyrics[random].link;
});

button.onclick = function() {
    audio.play();
  }


//upperCase
function shout(string) {
    return string.toUpperCase()
}

shout('hello')

//lowerCase
function whisper(string) {
    return string.toLowerCase()
}

whisper('hello')

//logShout
function logShout(string) {
    return console.log(string.toUpperCase())
}

logShout('Hello')

//logWhisper
function logWhisper(string) {
    return console.log(string.toLowerCase())
}

logWhisper('Hello')



//elseif
function sayHiToHeadphonedRoommate(string) {
 if (string === string.toLowerCase()) {
    return "I can\'t hear you!";
 } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
 } else if (string === "Let's have dinner together!") {
    return "I would love to!";
 }
}

console.log(sayHiToHeadphonedRoomate('hello'))
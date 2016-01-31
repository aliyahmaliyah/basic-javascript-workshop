//Running this file should output a random quote from a list of 10 different quotes.
//Make sure to add/commit this file and push it to your GitHub.

var quotes = ["Live as if you were to die tomorrow. Learn as if you were to live forever. –Mahatma Gandhi", "We must learn to live together as brothers or perish together as fools. –Martin Luther King, Jr.","Tell me and I forget. Teach me and I remember. Involve me and I learn. –Benjamin Franklin","Education is what remains after one has forgotten what one has learned in school. –Albert Einstein","Learning never exhausts the mind. –Leonardo da Vinci","I am always doing that which I cannot do, in order that I may learn how to do it. –Pablo Picasso","You don't learn to walk by following rules. You learn by doing, and by falling over. –Richard Branson","Your most unhappy customers are your greatest source of learning. –Bill Gates","Learn as much by writing as by reading. –Lord Acton","Try to learn something about everything and everything about something. –Thomas Huxley"];

function randomQuote(array){ 
    return array[Math.floor(Math.random()*array.length)];
}
randomQuote(quotes);
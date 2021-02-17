let entries = [
  {
    date: "01.20",
    entry: "Hello, my name is Xianyu and I'm from New York City and I live in Brooklyn. I'm currently in my 3rd year of Communication Design at Parsons. My first experience with coding was in my second year first semester with Creative Coding class where I learned HTML and CSS. Then I did some Javascript in Core Interaction class the next semester. In my third year first semester, I took a Javascript elective. Although I've had issues picking it up because I suck at online learning. I hope to get more experience in this class wtih coding and I would love to create some nice projects."
  },
  {
    date: "01.27",
    entry: "The three concepts I had were multitask, animations, and newsletter. One issue I have with the current style of this journal site is that I might be too attached to the idea of having scroll overflow on two sides as I always like the feeling of multi tasking. Although, I don't think journal entries as content is long enough to allow people to scroll on either sides. I might have to go with another idea or think up of content to fill this journal site with. For now I might just stick through with it to see where it goes."
  },
  {
    date: "02.03",
    entry: "For the site design, I've decided to go with the design where the dates are most visibile and will be an infinite scroll. The problem I have is setting up the infinite scroll. I'm kind of in a slump of what I want to also do with my site ."
  },
  {
    date: "02.10",
    entry: "I've used javascript for the onmouseover events that happen when you interact with the dates. Although I'm in a slump about what else I can add to my site. It definitely is missing something but I'm not sure what to add. In the end the site is a journal and I think I have all the essentials for a journal. I do still need to work on how to add the inifinite scrolll while making it easy to not get lost and hard to find the date."
  },
  {
    date: "02.17",
    entry: "entry 5"
  },
   {
    date: "02.24",
    entry: "entry 6"
  },
   {
    date: "03.03",
    entry: "entry 7"
  },
];

let Loop = document.getElementById("Loop");
let journalClass = document.getElementsByClassName("entry");
let entryNode = document.getElementById("entry");


function getColor(){
  return "#" + Math.floor(Math.random()*16777215).toString(16);

}

for (let i = 0; i < entries.length; i++) {
  let node = document.createElement("div");
  
  node.onmouseover = function(){
    entryNode.innerHTML = entries[i].entry
    
    document.getElementsByTagName("body")[0].style.backgroundColor = getColor();
    
   
  }
  
  
  node.classList.add("item");
  
  node.setAttribute("id", entries[i].entry)


  let textnode = document.createTextNode(entries[i].date);
  
  node.appendChild(textnode)
  Loop.appendChild(node)
  
}





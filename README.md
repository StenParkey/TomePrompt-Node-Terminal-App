# TomePrompt-Node-Terminal-App
Hello there! Welcome to Tome Prompt! The goal of this project is to build a little rpg fortune teller/game inventory manager. 
Everything except the magic8ball and a couple user specific features has been implemented. 

## How to use:
If you're familiar with node.js which im sure most of yall looking at this are gonna be way more experienced than I am lol. But just for a quick 
tutorial. 

step 1:
        Make sure you're in the right directory in your BASH prompt.
    cd 'whatever directory the tomeprompt folder is in. probably desktop"/TomePrompt

step 2:
        then just run the master script with node
    node tomePrompt

step 3: 
        Enjoy! During internal app use, type stop to return to the main interface at anytime
        And then type exit from the main interface to exit TomePrompt! (also just realizing now the exit command is kinda silly because you
        can just hit CTRL+C to stop the app) 


dev notes: Found this out when i tried to add a case 'exit' to the what is your name readline.question and implement some sort of
 exit there. I decided to just notify the user of using control break if a username is invalid. They way I setup the interface 
 function call and the readline.on is kinda goofy and needs to probably just be refactored into a function with readline.question again, 
 and then recall that function after each stop command. The way i have it set up now makes adding that exit case way more complicated 
 in my current opinion lol.
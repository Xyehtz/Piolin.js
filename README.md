# Piolin.js

**IMPORTANT: Some information of the images shown in this document, and in the different file of the project are in SPANISH**

**INDEX**

- [What is this bot about](#what-is-this-bot-about)
- [How to use the bot](#how-to-use-the-bot)
- [What's inside of this project](#whats-inside-of-this-project)
  - [SRC](#src)
  - [Node_modules](#node_modules)
  - [Commands](#commands)
    - [EmbedNeeds](#embedneeds)
  - [Validations](#validations)
  - [Events](#events)
  - [.ENV](#env)
- [LICENSE](#license)
- [Gratitudes](#gratitudes)

## What is this bot about

This is my first formal project as a complete newbie in programming. In this case, this project is a Discord bot called Piolin.js. This repository contains the source code of the bot. The bot is created with the intention of gaining experience with Discord's API, JavaScript, and Node.js.

This bot sends different greetings during the day, more specifically at, 7 AM, 12 PM and 7 PM, this is inspired by a very common meme on LATAM in which some members of the family,usually the aunt of the family, send a religious image with some text wishing blessings and a good day, evening or night to everyone. The messages sent by this bot contain the following information. Is important to note that the bot will ONLY send these messages in the channel where you ran the commands

  1. A title, this title will contain something related with the hour in which the message was send, for example, if it's 7 AM it will send something related to the morning or wakink up early, the same for 12 PM and 7 PM
  2. A description, also related to the hour in which the message was send
  3. A religious message that wishes a good day for everyone
  4. A thumbnail with the hour
  5. A footer that shows who send the message and the hour of it
  
  ![image](https://github.com/Xyehtz/Piolin.js/assets/33993070/0680342a-01a1-4b94-bd27-10fe6d079600)
  
## How to use the bot

Sadly if you want just to use this bot on your server you won't be able to because this bot isn't available to join servers because it can't be added by any user but me. If later I decide to make this bot a public one I will let now everyone posting an update related to it and where you'll be able to find the bot

**If you really want to have this bot on your Discord server please contact me on GitHub or in Discord, User: jajajacker halo#6754**

## What's inside of this project

This project is divided in a series of folders and files, here is a small summary of what you can find in each one
  1. src, short for source
  2. node_modules, inside this folder we have everything related to the different libraries used in the project
  3. commands, all the bot's commands are inside this folder
  4. embedNeeds, this folder has three more folders in which we have different files that are used by different commands of the bot
  5. validations, this folder has a file wich will validate one of the commands for developer use
  6. events, one file and one folder are inside this folder, one of the files will console.log that the bot is online and the other will be waiting for someone to say a specific word and answer with something else
  
Looking at every folder we'll found the following, starting with. 

### SRC

Inside of the src or source folder we have the main file of this project the index.js file, this file contains all the libraries that the bot needs to work, which are.
  
  1. Discord.js
  2. DJS-Commander
  3. Path
  4. Ws
  5. Dotenv

Following all the libraries is the intents of the bot, the intents of the bot are a way in which Discord can know what things the bot is going to be able to see and do, this bot uses four.

  `IntentsBitField.Flags.Guilds`, this allows the bot to know everything related to server events
  `IntentsBitField.Flags.GuildMembers`, lets the bot know everything related to the members of the server and events like when someone joins or leaves
  `IntentsBitField.Flags.GuildMessages`, allows the bot to see all of the server messages, even when the message is edited or deleted
  `IntentsBitField.Flags.MessageContent`, allows the bot to see what's the content of the message, like normal text, mentions or emojis

The next thing that we find is the status of the bot, in this case there are three different statuses, that translated to english reads, `Searching for good moring images`, `Searching for good evening images` and `Searching for good night images`

Then we found all the things related to server events and the imports used by the DJS-Commander which is the command handler used for this bot

### Node_modules

This folder contains all the information related to the libraries used in this bot

### Commands

In this folder you'll find all the .js files for the commands, this bot contains four different commands

  `ping.js`, sends the latency of the bot, this command is only for developers, to be able to use this command, download the project and create a .env file in which you'll enter the following code.

  ```
  .env
  TOKEN = 'The Token of your bot goes here'
  USER_ID = Your Discord user ID goes here
  ```
  
  Here is an example of what the command outputs

  ![image](https://github.com/Xyehtz/Piolin.js/assets/33993070/b1bcc9f3-6864-40c1-b7c4-4b744e3c2f1a)
  
  `saludo-buenos-dias`, this command will send a greeting message at 7 AM GMT-5
  
  ![image](https://github.com/Xyehtz/Piolin.js/assets/33993070/cdf56dc8-cc94-4cea-ae4d-7558df6a5c4b)

  `saludo-buenas-tardes`, this command will send a greeting message at 12 PM GMT-5
  
  ![image](https://github.com/Xyehtz/Piolin.js/assets/33993070/0e027e11-0b81-4f91-89ec-03f1d78b9c10)

  `saludo-buenas-noches`, this command will send a greetings message at 7 PM GMT-5
  
  ![ezgif com-resize](https://github.com/Xyehtz/Piolin.js/assets/33993070/7f711769-e4ed-4530-b200-018c5fbdd733)
  
Is very important to note that the commands of this bot are made using "/", thus every command inside of this project will use the `SlashCommandBuilder()` library from Discord.js, in the server this would look somthing like this.

![image](https://github.com/Xyehtz/Piolin.js/assets/33993070/bbb338ca-0ea7-4155-bd2f-7fee0b417dd8)

#### EmbedNeeds

Inside this folder you can find another three folders which have the same name as the three greeting types of commands, then inside of every folder you'll find three .js files with the same name, being the first one `embedDescription.js`, the second one `embedImages.js`, and the last one `embedTitles.js`, inside of these files you'll find a lot of information related to the title of the embeds, the description of the embeds and the images used in the embeds, these are stored inside an array that is being exported to be used inside the embed builder code of the three comands.

### Validations 

This folder contains only one file, `devOnly.js`, a file that is created with the porpouse of validating if a user can or cannot use a command, in this case the file will obtain the user's ID and compare to the ID that is store inside of `USER_ID` in the .env file, if it doesn't match the ID it will send a message letting know the user that the command can only be used by developers, to use this validation inside of a command you'll need to write the following

  ```
  commandfordevelopers.js
  const { SlashCommandBuilder } = require('discord.js');

  module.exports = {
    data: new SlashCommandBuilder() 
      .setName('name of the command') 
      .setDescription('description of the command'), 

    run: async ({ interaction, client, handler }) => {
      command code
    },
    devOnly: true, //devOnly: true is used to verify the ID of the user using the command if it doesn't match it will send an error message
  };
 ```

### Events

In this folder you can find, one folder with name `ready` and a file with name onMessage.js, the folder has a file with name console-log.js that is coded to log when the bot is online, the onMessage file will listen to every message inside of the server where the bot is and send a reply when a specific word is sent on the server, here's an example

![ezgif com-resize (1)](https://github.com/Xyehtz/Piolin.js/assets/33993070/14d47855-7761-41f5-bba4-76d837827f40)

In English this translates to "Iseta is a"

### .ENV

.env is the last file inside of this project, in this file you can save the most important information of your bot and yourself, like.

  ```
  .env
  TOKEN = 'Your bot's token provided by Discord'
  GUILD_ID = The ID of the test server
  CLIENT_ID = The ID of the bot
  USER_ID = Your ID
  ```
Making use of the `.gitignore` file you can make sure that this information is not uploaded when creating your own repository

### LICENSE

This project is created under the BSD License. Consult the LICENSE file for more details

### Gratitudes

I want to show my gratitude and respect for the person running the YouTube Channel "Under Ctrl", "notunderctrl" on GitHub for the creation of the DJS-Commander, and a great series of tutorials on how to create a Discord bot, which greatly improved the creation of this bot, making it easier to write and understand, I leave the links for his YouTube Channel, GitHub profile and Discord Server below.

- YouTube Channel: https://www.youtube.com/@underctrl
- GitHub Profile: https://github.com/notunderctrl
- Discord Server: https://discord.underctrl.io

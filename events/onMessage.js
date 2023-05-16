module.exports = message => { // Automatically sends a message when the iseta message is send
  if (message.author.bot) {
    return;
  }

  if (message.content.toLowerCase().includes('iseta')) {
    message.reply('Sabias que Iseta es un');
  }
};

module.exports = (interaction, commandObj) => {
  if (commandObj.devOnly) {
    if (interaction.member.id !== process.env.USER_ID) {
      interaction.reply('This command is only for developers only');
      return true;
    }
  }
};

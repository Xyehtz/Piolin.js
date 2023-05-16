// This validation will only allow the developer to use the commands were devOnly has the true boolean
module.exports = (interaction, commandObj) => {
  if (commandObj.devOnly) {
    if (interaction.member.id !== process.env.USER_ID) {
      interaction.reply('This command is only for developers only');
      return true;
    }
  }
};

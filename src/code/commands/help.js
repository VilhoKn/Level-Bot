const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder().setName("help").setDescription("Just a help command"),
	run: async ({ client, interaction }) => {

		// Create the embed
		const embed = new Discord.MessageEmbed()

		const desc = "TESTING"

		// Configuring the embed
		interaction.reply({
			embeds: [
				embed
				.setTitle("TESTING")
				.setDescription(desc)
				.addFields(
					{name: 'w', value: "w" },
					{name: 'w', value: "w" },
				)
			], ephemeral: true,
		})
	},
}
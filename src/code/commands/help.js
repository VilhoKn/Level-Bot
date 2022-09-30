const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder().setName("help").setDescription("Just a help command"),
	run: async ({ client, interaction }) => {

		// Create the embed
		const embed = new Discord.MessageEmbed()

		

		

		// 
		// 	.setColor(0x0099FF)
		// 	.setTitle('Some title')
		// 	.setURL('https://discord.js.org/')
		// 	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
		// 	.setDescription('Some description here')
		// 	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
		// 	.addFields(
		// 		{ name: 'Regular field title', value: 'Some value here' },
		// 		{ name: '\u200B', value: '\u200B' },
		// 		{ name: 'Inline field title', value: 'Some value here', inline: true },
		// 		{ name: 'Inline field title', value: 'Some value here', inline: true },
		// 	)
		// 	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
		// 	.setImage('https://i.imgur.com/AfFp7pu.png')
		// 	.setTimestamp()
		// 	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

		// Configuring the embed
		
		
		
		const title = "Easy Level Monitoring with Level Bot"
		const desc = "TESTING"

		interaction.reply({
			embeds: [
				embed
				.setTitle(title)
				.setAuthor({ name: 'Level Bot', iconURL: client.user.avatarURL(), url: 'https://level.bot' })
				//.setDescription(desc)
				.addFields(
					{ name: 'Setup', value: 'Setup your server with level monitoring in the Level Bot dashboard', inline: true },
					{ name: 'Start Monitoring', value: 'Start to monitor user levels and configure level awards', inline: true },
					{ name: 'Moderate', value: 'Add new awards along the way and build a strong community', inline: true },
					//{ name: 'w', value: 'w', inline: true },
					//{ name: 'w', value: 'w', inline: true }, // </kick:0>
				)
				.setColor(0x2f3136)
				
			], ephemeral: true,
		})
	},
}
const Discord = require("discord.js")
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { TOKEN, CLIENT_ID, GUILD_ID } = require('./info.js');
const fs = require('node:fs');

// Load slashcommands if you provide load as an argument: "node ./index.js load"
const LOAD_SLASH = process.argv[2] == "load"

// Store the commands and command files in lists
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Setup the client
const client = new Discord.Client({
	intents: ["GUILDS"],
    presence: {
        activities: [{
            name: "TESTING",
            type: "LISTENING",
        }]
    }
})

// Setup the slashcommands
client.slashcommands = new Discord.Collection()
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.slashcommands.set(command.data.name, command)
	if (LOAD_SLASH) commands.push(command.data.toJSON());
}

if (LOAD_SLASH) {
	// Refresh the slashcommands
    const rest = new REST({ version: "9" }).setToken(TOKEN)

    console.log("Started refreshing application (/) commands.")

    rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands })
    .then(() => {
        console.log("Successfully reloaded application (/) commands.")
        process.exit(0)
    })
    .catch((err) => {
        if (err){
            console.log(err)
            process.exit(1)
        }
    })
}
else if (require.main === module) {
	client.on("ready", () => {
        console.log(`Logged in as ${client.user.tag}`)
    })
	// Catch the command interaction
    client.on("interactionCreate", (interaction) => {
        async function handleCommand() {
            if (!interaction.isCommand()) return

            // Get the command name and check if its a valid slash command
            const command = client.slashcommands.get(interaction.commandName)
            if (!command) interaction.reply("Not a valid slash command")

            await command.run({ client, interaction })
        }
		// Handle the command
        handleCommand()
    })
	// Start the bot
    client.login(TOKEN)
}
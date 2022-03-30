const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login("OTUyMTM5NzUxNjUyMjAwNDQ4.YixrPg.UdX1CRQMOtUWf6vMop5Uekfk2So")


const prefix = "=";



Client.on ("messageCreate", message => {
    if (message.author.bot) return;

    else if (message.content === prefix + "help"){
        message.reply("**Hello, I am Clash Bot.**\n \n The Clash of Clans bot to help you to find the perfect composition from the Th7 to the Th14.\nType `=compo` to see the commands for the compositions.");
    }

    else if (message.content === prefix + "compo"){
        const embedcompo = new Discord.MessageEmbed()
        .setColor("#FF8F00")
        .setTitle("Commands list")
        .setDescription("There are the differents attacks compositions.\n \n \n Compositions for **th7** => `=compo7`\n \n Compositions for **th8** => `=compo8`\n \n Compositions for **th9** => `=compo9`")
        .setThumbnail("https://cdn-icons-png.flaticon.com/512/297/297806.png")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg");

        message.channel.send({  embeds: [embedcompo]});
    }



    //=compo7
    else if (message.content === prefix + "compo7"){
        const embedth7 = new Discord.MessageEmbed()
        .setColor("#FFCC20")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("CB - Town Hall 7 Compositions")
        .setThumbnail("https://static.wikia.nocookie.net/clashofclans/images/7/75/Town_Hall7.png/revision/latest/scale-to-width-down/100?cb=20170827051024")
        .setDescription("Compos Th7 available.\n \n **Hogs:**\n Full Hogs => `=c7fh`\n Mass Hogs => `=c7mh`\n Giants Hogs => `=c7gh`\n \n **Dragons:**\n Drag Rage => `=c7dr`\n Drag Loons => `=c7dl`\n Drag Zap => `=c7dz`\n \n **Loons:**\n Drag Loons => `=c7dl` \n \n **Giants:**\n Giants Hogs => `=c7gh`\n Giant Walk => `=c7gw`\n Giants Wizards => `=c7gwi`");
        
        message.channel.send({  embeds: [embedth7]});
    }

    //=compo8
    else if (message.content === prefix + "compo8"){
        const embedth8 = new Discord.MessageEmbed()
        .setColor("#BF7C00")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("CB - Town Hall 8 Compositions")
        .setThumbnail("https://static.wikia.nocookie.net/clashofclans/images/f/fa/Town_Hall8.png/revision/latest/scale-to-width-down/100?cb=20170827051039")
        .setDescription("Compos Th8 available.\n\n **Hogs:**\n Pekkas Hogs => `=c8ph`\n Mass Hogs => `=c8mh`\n GoHogs => `=c8gh`/GoHogs 2 => `=c8gh2`\n\n **Dragons:**\n Drag Zap => `=c8dz`\n Drag Rage => `=c8dr`\n\n **Loons:**\n Mass Loons => `=c8ml`\n\n **Pekkas:**\n Pekkas Wizards => `=c8pw`\n Pekkas Hogs => `=c8ph`\n GoWiVaPe => `=c8gwvp`\n\n **Golems:**\n GoHogs => `=c8gh`/GoHogs 2 => `=c8gh2`\n GoWiVaPe => `=c8gwvp`\n GoWiVa => `=c8gwv`\n\n **Valkyries:**\n GoWiVa => `=c8gwv`\n GoWiVaPe => `=c8gwvp`\n WiValk => `=c8wv`");
    
        message.channel.send({  embeds: [embedth8]});
    }

    //=compo9
    else if (message.content === prefix + "compo9"){
        const embedth9 = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("CB - Town Hall 9 Compositions")
        .setThumbnail("https://static.wikia.nocookie.net/clashofclans/images/e/e0/Town_Hall9.png/revision/latest/scale-to-width-down/100?cb=20170827045259")
        .setDescription("Compos Th9 available.\n\n **Queen Walk:**\n Qw MoBal => `=c9qwmb`\n Qw Hogs => `=c9qwh`\n Qw Pekka => `=c9qwp`\n Qw Falcon => `=c9qwf`\n Qw BB Drag => `=c9qwbd`\n Qw Lavaloonions => `=c9qwlli`\n Qw Dragons => `=c9qwd`\n Qw GoWiWi => `=c9qwgww`\n Qw Pekkas Hogs => `=c9qwph`\n Qw LavaMinions => `=c9qwlm`\n\n **Hogs:**\n GoHogs => `=c9gh`\n\n **Electro-Dragons:**\n Electro Smash => `=c9es`\n\n **Dragons:**\n Drag Zap => `=c9dz`\n BB DragBal => `=c9bdb`\n\n **Loons:**\n Electro Smash => `=c9es`\n BB DragBal => `=c9bdb`\n\n **Pekkas:**\n GoWiPe => `=c9gwp`\n GoVaPe => `=c9gvp`\n\n **Golems:**\n GoBoWitch => `=c9gbw`\n GoWiWi => `=c9gww`\n GoWiPe => `=c9gwp`\n GoVaPe => `=c9gvp`\n\n **Bowlers:**\n GoBoWitch => `=c9gbw`\n\n **Witchs:**\n GoBoWitch => `=c9gbw`\n GoWiWi => `=c9gww`\n GoWiPe => `=c9gwp`\n\n **Valkyries:**\n GoVaPe => `=c9gvp`");
    
        message.channel.send({  embeds: [embedth9]});
    }

   
});





Client.on ("messageCreate", message => {
    if (message.author.bot) return;

    else if (message.content === prefix + "c9"){
        const embedc9 = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**** Th9\n\n :white_check_mark: **Assets:**\n\n\n\n :x: **Default:**\n\n\n :warning: **Pay attention:**\n")
        .setImage("")
        .setURL("");
    
        message.channel.send({  embeds: [embedc9]});
    }

    else if (message.content === prefix + "c9bdb"){
        const embedc9bdb = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**BB DragBal** Th9\n\n :white_check_mark: **Assets:**\n- strong for multiplayer rush.\n- can do 2 stars easily.\n\n :x: **Default:**\n- hard to play.\n- bad against villages with high level air defenses.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the air dfenses.\n- pay attention to the direction of the air sweepers.")
        .setImage("http://image.noelshack.com/fichiers/2022/13/3/1648642470-bbdragbal.jpg")
        .setURL("https://link.clashofclans.com/en?action=CopyArmy&army=u8x5-8x23-4x8-5x4-4x1-3x10s2x2-4x0-1x10");
    
        message.channel.send({  embeds: [embedc9bdb]});
    }

    else if (message.content === prefix + "c9gvp"){
        const embedc9gvp = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**GoVaPe** Th9\n\n :white_check_mark: **Assets:**\n- strong for multiplayer rush.\n- can do 2 stars easily.\n\n :x: **Default:**\n- bad against villages with high level mortars.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the mortars.")
        .setImage("http://image.noelshack.com/fichiers/2022/13/3/1648640756-govape.jpg")
        .setURL("https://link.clashofclans.com/en?action=CopyArmy&army=u6x4-12x6-2x9-10x12-1x13s1x1-2x2-1x3-1x5");
    
        message.channel.send({  embeds: [embedc9gvp]});
    }

    else if (message.content === prefix + "c9gwp"){
        const embedc9gwp = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**GoWiPe** Th9\n\n :white_check_mark: **Assets:**\n- strong for clan wars attacks.\n- can perf easily.\n\n :x: **Default:**\n- bad against villages with high level wizards towers.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the wizards towers.\n- pay attention to putting a poison spell on the enemy clan castle troops.")
        .setImage("http://image.noelshack.com/fichiers/2022/13/1/1648494212-gowipe.jpg")
        .setURL("https://link.clashofclans.com/en?action=CopyArmy&army=u2x13-6x15-5x4-7x6-2x9s2x1-2x2-1x5");
    
        message.channel.send({  embeds: [embedc9gwp]});
    }

    else if (message.content === prefix + "c9gww"){
        const embedc9gww = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**GoWiWi** Th9\n\n :white_check_mark: **Assets:**\n- strong for multiplayer attacks.\n- can perf easily.\n\n :x: **Default:**\n- bad against villages with high level wizards towers.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the wizards towers.\n- pay attention to putting a poison spell on the enemy clan castle troops.")
        .setImage("http://image.noelshack.com/fichiers/2022/13/1/1648493607-gowiwi.jpg")
        .setURL("https://link.clashofclans.com/en?action=CopyArmy&army=u2x13-9x15-6x4-10x6s1x1-2x2-1x3-1x5");
    
        message.channel.send({  embeds: [embedc9gww]});
    }

    else if (message.content === prefix + "c9es"){
        const embedc9es = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Electro Smash** Th9\n\n :white_check_mark: **Assets:**\n- strong for clan wars attacks.\n- can perf many types of villages.\n\n :x: **Default:**\n- hard to play.\n- bad against expanded villages.\n\n :warning: **Pay attention:**\n- pay attention to putting a freeze spell on the air defenses when they starts attacking your Electro-dragon.\n- pay attention to putting a poison spell on the enemy clan castle troops.")
        .setImage("http://image.noelshack.com/fichiers/2022/13/1/1648492052-electro-smash.jpg")
        .setURL("https://link.clashofclans.com/en?action=CopyArmy&army=u3x17-6x5-5x4-9x23s3x2-2x5-1x9");
    
        message.channel.send({  embeds: [embedc9es]});
    }

    else if (message.content === prefix + "c9gbw"){
        const embedc9gbw = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**GoBoWitch** Th9\n\n :white_check_mark: **Assets:**\n- strong for clan wars attacks.\n- can do 3 stars easily.\n\n :warning: **Pay attention:**\n- pay attention to putting a poison spell on the enemy clan castle troops.")
        .setImage("http://image.noelshack.com/fichiers/2022/13/1/1648489981-gobowitch.jpg")
        .setURL("https://link.clashofclans.com/en?action=CopyArmy&army=u3x13-8x15-6x6-4x4-2x1s2x1-1x2-1x3-1x9");
    
        message.channel.send({  embeds: [embedc9gbw]});
    }

    else if (message.content === prefix + "c9dz"){
        const embedc9dz = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Drag Zap** Th9\n\n :white_check_mark: **Assets:**\n- strong for multiplayer attacks.\n- can do 1 star easily.\n\n :x: **Default:**\n- bad against villages with high level air defenses.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the air defenses.\n- pay attention to the direction of the air sweepers.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/7/1648375849-drag-zap.jpg")
        .setURL("https://link.clashofclans.com/en?action=CopyArmy&army=u8x8-5x6-1x23-6x5s7x0-1x2");
    
        message.channel.send({  embeds: [embedc9dz]});
    }

    else if (message.content === prefix + "c9gh"){
        const embedc9gh = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**GoHogs** Th9\n\n :white_check_mark: **Assets:**\n- strong for multiplayer attacks.\n- can perf many types of villages.\n\n :x: **Default:**\n- bad against villages with high level wizards towers and mortars.\n- hard to play.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the wizards tower and mortars.\n- pay attention to put a healing spell when the hogs riders arrive on a wizard tower and when they are in the mortar area.\n- pay attention to putting a poison spell on the enemy clan castle troops.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/6/1648318939-gohog.jpg")
        .setURL("https://link.clashofclans.com/en?action=CopyArmy&army=u12x6-5x4-2x1-2x13-20x11s1x2-3x1-1x9");
    
        message.channel.send({  embeds: [embedc9gh]});
    }
    
    else if (message.content === prefix + "c9qwmb"){
        const embedc9qwmb = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Queen Walk MoBal** Th9\n\n :white_check_mark: **Assets:**\n- strong for clan wars attacks.\n- can perf many types of villages.\n\n :x: **Default:**\n- hard to play.\n- bad against villages with high level wizards towers and archers towers.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the wizards towers and archers towers.\n- pay attention to put a freeze spell when the loons arrive on a bwizard tower.\n- pay attention to putting a freeze spell on the enemy archer queen when she starts attacking your archer queen.\n- pay attention to the direction of the air sweepers.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/6/1648288779-qw-mobal.jpg")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u1x17-20x5-4x7-6x4-6x10-1x23s2x11-2x2-3x5");
    
        message.channel.send({  embeds: [embedc9qwmb]});
    }

    else if (message.content === prefix + "c9qwh"){
        const embedc9qwh = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Queen Walk Hogs** Th9\n\n :white_check_mark: **Assets:**\n- strong for clan wars attacks.\n- can perf easily.\n\n :x: **Default:**\n- bad against villages with high level bombs towers.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the bombs towers.\n- pay attention to put a healing spell when the hogs riders arrive on a bomb tower and when there are a giant bomb.\n- pay attention to putting a poison spell on the enemy clan castle troops.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/6/1648290335-qw-hogs.jpg")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u9x4-4x6-4x7-24x11-1x23s3x1-1x2-1x9");
    
        message.channel.send({  embeds: [embedc9qwh]});
    }

    else if (message.content === prefix + "c9qwp"){
        const embedc9qwp = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Queen Walk Pekka** Th9\n\n :white_check_mark: **Assets:**\n- strong for clan wars attacks.\n- can perf easily.\n\n :warning: **Pay attention:**\n- pay attention to putting a poison spell on the enemy archer queen when she starts attacking your troops.\n- pay attention to putting a poison spell on the enemy clan castle troops.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/6/1648291082-qw-pekka.jpg")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u4x7-3x9-2x23-6x6-9x11s1x3-3x2-1x9");
    
        message.channel.send({  embeds: [embedc9qwp]});
    }

    else if (message.content === prefix + "c9qwf"){
        const embedc9qwf = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Queen Walk Falcon** Th9\n\n :white_check_mark: **Assets:**\n- strong for multiplayer attacks.\n- can do 2 stars easily.\n\n :x: **Default:**\n- bad against expanded villages.\n\n :warning: **Pay attention:**\n- pay attention to putting a freeze and poison spell on the enemy clan castle troops when he starts attacking your archer queen.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/6/1648292445-qw-falcon.jpg")
        .setURL("https://link.clashofclans.com/en?action=CopyArmy&army=u5x7-2x11-14x12-7x6s2x2-2x1-1x9");
    
        message.channel.send({  embeds: [embedc9qwf]});
    }

    else if (message.content === prefix + "c9qwbd"){
        const embedc9qwbd = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Queen Walk BB Drag** Th9\n\n :white_check_mark: **Assets:**\n- strong for multiplayer rush.\n- can do 1 star easily.\n\n :x: **Default:**\n- hard to play.\n\n :warning: **Pay attention:**\n- pay attention that the Town hall isn't centered to be able to easily make 1 star.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/6/1648292977-qw-bb-drag.jpg")
        .setURL("https://link.clashofclans.com/en?action=CopyArmy&army=u4x6-4x4-4x5-4x7-12x23s3x1-1x2-1x9");
    
        message.channel.send({  embeds: [embedc9qwbd]});
    }

    else if (message.content === prefix + "c9qwlli"){
        const embedc9qwlli = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Queen Walk Lavaloonions** Th9\n\n :white_check_mark: **Assets:**\n- strong for clan wars attacks.\n- can perf many types of villages.\n\n :x: **Default:**\n- hard to play.\n- bad against villages with high level wizards towers.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the wizards towers.\n- pay attention to putting a poison spell on the enemy clan castle troops.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/6/1648294652-qw-lavaloonions.jpg")
        .setURL("https://link.clashofclans.com/en?action=CopyArmy&army=u10x5-4x7-1x17-22x10-9x4-3x6-1x23s2x0-2x2-2x11-1x9");
    
        message.channel.send({  embeds: [embedc9qwlli]});
    }

    else if (message.content === prefix + "c9qwd"){
        const embedc9qwd = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Queen Walk Dragons** Th9\n\n :white_check_mark: **Assets:**\n- strong for multiplayer attacks.\n- can do 2 stars easily.\n\n :x: **Default:**\n- bad against expanded villages.\n- bad against villages with high level air defenses.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the air defenses.\n- pay attention to putting a freeze spell on the enemy archer queen when she starts attacking your archer queen.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/6/1648305889-qw-dragons.jpg")
        .setURL("https://link.clashofclans.com/en?action=CopyArmy&army=u2x5-5x7-7x8s1x1-3x2-1x5");
    
        message.channel.send({  embeds: [embedc9qwd]});
    }

    else if (message.content === prefix + "c9qwgww"){
        const embedc9qwgww = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Queen Walk GoWiWi** Th9\n\n :white_check_mark: **Assets:**\n- strong for clan wars attacks.\n- can perf many types of villages.\n\n :x: **Default:**\n- hard to play.\n- bad against villages with high level mortars.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the mortars.\n- pay attention to put a healing spell when the witchs arrive in the mortar area.\n- pay attention to putting a poison spell on the enemy clan castle troops.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/6/1648306661-qw-gowiwi.jpg")
        .setURL("https://link.clashofclans.com/en?action=CopyArmy&army=u4x7-1x13-8x15-7x6-5x4s2x1-1x2-1x3-1x9");
    
        message.channel.send({  embeds: [embedc9qwgww]});
    }

    else if (message.content === prefix + "c9qwph"){
        const embedc9qwph = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Queen Walk Pekkas Hogs** Th9\n\n :white_check_mark: **Assets:**\n- strong for clan wars attacks.\n- can perf easily.\n\n :x: **Default:**\n- bad against villages with high level mortars and wizards towers.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the mortars and wizards towers.\n- pay attention to put a healing spell when the hogs riders arrive in the mortar area and when there are a giant bomb.\n- pay attention to putting a poison spell on the enemy clan castle troops.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/6/1648307416-qw-pekkas-hogs.jpg")
        .setURL("https://link.clashofclans.com/en?action=CopyArmy&army=u4x7-2x9-16x11-6x6-5x4s4x1-1x5");
    
        message.channel.send({  embeds: [embedc9qwph]});
    }

    else if (message.content === prefix + "c9qwlm"){
        const embedc9qwlm = new Discord.MessageEmbed()
        .setColor("#555555")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Queen Walk LavaMinions** Th9\n\n :white_check_mark: **Assets:**\n- strong for multiplayer attacks.\n- can do 1 star easily.\n\n :x: **Default:**\n- bad against villages with high level wizards towers.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the wizards towers.\n- pay attention to put a freeze spell when the minions arrive on a wizard tower.\n- pay attention to putting a poison spell on the enemy clan castle troops.\n- pay attention to the direction of the air sweepers.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/6/1648308229-qw-lavaminions.jpg")
        .setURL("https://link.clashofclans.com/en?action=CopyArmy&army=u4x7-63x10-1x17-4x4s1x2-7x5");
    
        message.channel.send({  embeds: [embedc9qwlm]});
    }
});







Client.on ("messageCreate", message => {
    if (message.author.bot) return;

    else if (message.content === prefix + "c8pw"){
        const embedc8pw = new Discord.MessageEmbed()
        .setColor("#BF7C00")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Pekkas Wizards** Th8\n\n :white_check_mark: **Assets:**\n- strong for multiplayer attacks.\n- can perf easily.\n\n :x: **Default:**\n- bad against villages with high level mortars.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the mortars.\n- pay attention to putting a poison spell on the enemy clan castle troops.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/5/1648229992-pekkas-wizards.jpg")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u2x13-3x9-13x6-5x4-3x1s2x2-1x1-1x9");
    
        message.channel.send({  embeds: [embedc8pw]});
    }

    else if (message.content === prefix + "c8ph"){
        const embedc8ph = new Discord.MessageEmbed()
        .setColor("#BF7C00")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Pekkas Hogs** Th8\n\n :white_check_mark: **Assets:**\n- strong for clan wars attacks.\n- can perf easily.\n\n :x: **Default:**\n- bad against expanded villages.\n- bad against villages with high level wizards tower.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the wizards towers.\n- pay attention to put a healing spell when the hogs riders arrive on a wizard tower and when there are a giant bomb.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/5/1648231775-pekkas-hogs.jpg")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u3x9-24x11-1x6-1x1s2x2-1x1-1x9");
    
        message.channel.send({  embeds: [embedc8ph]});
    }

    else if (message.content === prefix + "c8mh"){
        const embedc8mh = new Discord.MessageEmbed()
        .setColor("#BF7C00")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Mass Hogs** Th8\n\n :white_check_mark: **Assets:**\n- strong for clan wars attacks.\n- can perf easily.\n\n :x: **Default:**\n- bad against villages with high level wizards towers.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the wizards towers.\n- pay attention to put a healing spell when the hogs riders arrive on a wizard tower and when there are a giant bomb.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/5/1648238576-mass-hogs.jpg")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u7x2-12x6-1x9-24x11s3x1-1x9");
    
        message.channel.send({  embeds: [embedc8mh]});
    }

    else if (message.content === prefix + "c8dz"){
        const embedc8dz = new Discord.MessageEmbed()
        .setColor("#BF7C00")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Drag Zap** Th8\n\n :white_check_mark: **Assets:**\n - strong for multiplayer attacks.\n - can do 2 stars easily.\n\n :x: **Default:**\n - bad against villages with high level air defenses.\n\n :warning: **Pay attention:**\n - pay attention to the levels of the air defenses.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/5/1648241746-drag-zap.jpg")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u10x8s7x0");
    
        message.channel.send({  embeds: [embedc8dz]});
    }

    else if (message.content === prefix + "c8gh"){
        const embedc8gh = new Discord.MessageEmbed()
        .setColor("#BF7C00")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**GoHogs** Th8\n\n :white_check_mark: **Assets:**\n- strong for multiplayer attacks.\n- can perf many types of villages.\n\n :x: **Default:**\n- bad against villages with high level wizards towers and mortars.\n- hard to play.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the wizards tower and mortars.\n- pay attention to put a healing spell when the hogs riders arrive on a wizard tower and when they are in the mortar area.\n- pay attention to putting a poison spell on the enemy clan castle troops.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/5/1648243078-go-hog.jpg")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u2x9-1x13-15x11-8x6-5x1-4x4s2x1-1x2-1x9");
    
        message.channel.send({  embeds: [embedc8gh]});
    }

    else if (message.content === prefix + "c8gh2"){
        const embedc8gh2 = new Discord.MessageEmbed()
        .setColor("#BF7C00")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**GoHogs 2** Th8\n\n :white_check_mark: **Assets:**\n- strong for multiplayer attacks.\n- can perf many types of villages.\n\n :x: **Default:**\n- bad against villages with high level wizards towers and mortars.\n- hard to play.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the wizards tower and mortars.\n- pay attention to put a healing spell when the hogs riders arrive on a wizard tower and when they are in the mortar area.\n- pay attention to putting a poison spell on the enemy clan castle troops.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/5/1648246552-go-hog-2.jpg")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u3x1-4x4-10x6-23x11-1x13-2x10s2x1-1x2-1x9");
    
        message.channel.send({  embeds: [embedc8gh2]});
    }

    else if (message.content === prefix + "c8gwv"){
        const embedc8gwv = new Discord.MessageEmbed()
        .setColor("#BF7C00")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**GoWiVa** Th8\n\n :white_check_mark: **Assets:**\n- strong for multiplayer attacks.\n- can do 2 stars easily.\n\n :x: **Default:**\n- bad against villages with high level mortars.\n\n :warning: **Pay attention:**\n- pay attention to the levels of the mortars.\n- pay attention to put a healing spell when the hogs riders arrive in the mortar area.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/5/1648247274-gowiva.jpg")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u4x4-9x6-2x13-12x12s1x1-1x2-3x10");
    
        message.channel.send({  embeds: [embedc8gwv]});
    }

    else if (message.content === prefix + "c8gwvp"){
        const embedc8gwvp = new Discord.MessageEmbed()
        .setColor("#BF7C00")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**GoWiVaPe** Th8\n\n :white_check_mark: **Assets:**\n- strong for multiplayer rush.\n- can do 1 star easily.\n\n :x: **Default:**\n- hard to play.\n\n :warning: **Pay attention:**\n- pay attention that the Town hall isn't centered to be able to easily make 1 star.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/5/1648248714-gowivape.jpg")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u10x6-6x12-2x13-1x10-2x9s1x1-1x2-3x10");
    
        message.channel.send({  embeds: [embedc8gwvp]});
    }

    else if (message.content === prefix + "c8dr"){
        const embedc8dr = new Discord.MessageEmbed()
        .setColor("#BF7C00")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Drag Rage** Th8\n \n :white_check_mark: **Assets:**\n - strong for multiplayer rush.\n - can do 2 stars easily.\n\n :x: **Default:**\n - bad against villages with high level air defenses.\n - bad against villages with air defenses in the center of the village.\n\n :warning: **Pay attention**\n - pay attention to the levels of the air defenses.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/6/1648250032-drag-rage.jpg")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u10x8s3x2-1x0");
    
        message.channel.send({  embeds: [embedc8dr]});
    }

    else if (message.content === prefix + "c8ml"){
        const embedc8ml = new Discord.MessageEmbed()
        .setColor("#BF7C00")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**Mass Loons** Th8\n \n :white_check_mark: **Assets:**\n - strong for clan wars attacks.\n- can do 1 star easily.\n\n :x: **Default:**\n- bad against expanded villages.\n- bad against villages with high level air defenses.\n\n :warning: **Pay attention**\n - pay attention to the levels of the air defenses.\n- pay attention to the direction of the air sweepers.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/6/1648279321-mass-loon.jpg")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u10x6-32x5s2x2-1x1-1x9");
    
        message.channel.send({  embeds: [embedc8ml]});
    }

    else if (message.content === prefix + "c8wv"){
        const embedc8wv = new Discord.MessageEmbed()
        .setColor("#BF7C00")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setTitle("Download compo")
        .setDescription("**WiValk** Th8\n \n :white_check_mark: **Assets:**\n - strong for multiplayer attacks.\n- can do 1 star easily.\n\n :x: **Default:**\n- bad against villages with high level mortars.\n\n :warning: **Pay attention**\n - pay attention to the levels of the mortars.\n- pay attention to put a healing spell when the valkyries are in the mortar area.\n- pay attention to putting a poison spell on the enemy clan castle troops.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/6/1648280056-wivalk.jpg")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u20x12-10x6s2x1-1x2-1x9");
    
        message.channel.send({  embeds: [embedc8wv]});
    }
});







Client.on ("messageCreate", message => {
    if (message.author.bot) return;

    else if (message.content === prefix + "c7dr"){
        const embedc7dr = new Discord.MessageEmbed()
        .setColor("#FFCC20")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setDescription("**Drag Rage** Th7\n \n :white_check_mark: **Assets:**\n - strong for multiplayer rush.\n - can do 2 stars easily.\n\n :x: **Default:**\n - bad against villages with high level air defenses.\n - bad against villages with air defenses in the center of the village.\n\n :warning: **Pay attention**\n - pay attention to the levels of the air defenses.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/4/1648141187-dragon-rage.jpg")
        .setTitle("Download compo")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u9x8-6x1-7x10s3x2");
        
        message.channel.send({  embeds: [embedc7dr]});
    }

    else if (message.content === prefix + "c7dl"){
        const embedc7dl = new Discord.MessageEmbed()
        .setColor("#FFCC20")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setDescription("**Drag Loons** Th7\n \n :white_check_mark: **Assets:**\n - strong for multiplayer attacks.\n - can perf easily.\n\n :x: **Default:**\n - bad against villages with high level air defenses.\n - bad against villages with air defenses in the center of the village.\n\n :warning: **Pay attention:**\n - pay attention to the levels of the air defenses.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/4/1648141278-dragon-balloon.jpg")
        .setTitle("Download compo")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u8x8-8x5s3x2");
        
        message.channel.send({  embeds: [embedc7dl]});
    }

    else if (message.content === prefix + "c7gh"){
        const embedc7gh = new Discord.MessageEmbed()
        .setColor("#FFCC20")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setDescription("**Giants Hogs** Th7\n \n :white_check_mark: **Assets:**\n- strong for multiplayer attacks.\n- can perf easily.\n\n :x: **Default:**\n- bad against expanded villages.\n\n :warning: **Pay attention:**\n- pay attention to put a healing spell when the hogs riders arrive on a wizard tower and when there are a giant bomb.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/4/1648141309-giant-hog.jpg")
        .setTitle("Download compo")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u12x11-13x3-13x6-8x1-5x4-1x5s3x1");
        
        message.channel.send({  embeds: [embedc7gh]});
    }

    else if (message.content === prefix + "c7gw"){
        const embedc7gw = new Discord.MessageEmbed()
        .setColor("#FFCC20")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setDescription("**Giant Walk** Th7\n \n :white_check_mark: **Assets:**\n- strong for clan wars attacks.\n- can perf easily.\n\n :x: **Default:**\n- bad against villages with high level mortars.\n\n :warning: **Pay attention:**\n- pay attention to put a healing spell when the giants are in the mortar area and when there are a giant bomb.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/4/1648141331-giant-walk.jpg")
        .setTitle("Download compo")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u15x3-17x6-3x7-3x1-2x10-4x4s3x1");
        
        message.channel.send({  embeds: [embedc7gw]});
    }

    else if (message.content === prefix + "c7fh"){
        const embedc7fh = new Discord.MessageEmbed()
        .setColor("#FFCC20")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setDescription("**Full Hogs** Th7\n \n :white_check_mark: **Assets:**\n- strong for clan wars attacks.\n- can perf easily.\n\n :x: **Default:**\n- bad against expanded villages.\n- bad against villages with high level wizards towers and giant bomb.\n\n :warning: **Pay attention:**\n- pay attention to put a healing spell when the hogs riders arrive on a wizard tower and when there are a giant bomb.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/4/1648141352-mass-hog.jpg")
        .setTitle("Download compo")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u32x11-10x6s3x1");
        
        message.channel.send({  embeds: [embedc7fh]});
    }

    else if (message.content === prefix + "c7gwi"){
        const embedc7gwi = new Discord.MessageEmbed()
        .setColor("#FFCC20")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setDescription("**Giants Wizards** Th7\n \n :white_check_mark: **Assets:**\n- strong for multiplayer attacks.\n- can perf easily.\n\n :x: **Default:**\n- bad against villages with high level mortars.\n\n :warning: **Pay attention:**\n- pay attention to put a healing spell when the giants are in the mortar area and when there are a giant bomb.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/4/1648149809-giants-wizard.jpg")
        .setTitle("Download compo")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u47x1-18x3-12x6-5x4-1x11s2x1-1x2");
        
        message.channel.send({  embeds: [embedc7gwi]});
    }

    else if (message.content === prefix + "c7mh"){
        const embedc7mh = new Discord.MessageEmbed()
        .setColor("#FFCC20")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setDescription("**Mass Hogs** Th7\n \n :white_check_mark: **Assets:**\n- strong for clan wars attacks.\n- can perf easily.\n\n :x: **Default:**\n- bad against expanded villages.\n- bad against villages with high level wizards towers and giant bomb.\n\n :warning: **Pay attention:**\n- pay attention to put a healing spell when the hogs riders arrive on a wizard tower and when there are a giant bomb.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/4/1648149818-mass-hogs.jpg")
        .setTitle("Download compo")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u10x6-2x3-5x4-28x11s2x1-1x2");
        
        message.channel.send({  embeds: [embedc7mh]});
    }

    else if (message.content === prefix + "c7dz"){
        const embedc7dz = new Discord.MessageEmbed()
        .setColor("#FFCC20")
        .setFooter("Clash Bot by Ilan","https://cdn.discordapp.com/attachments/951721735890300961/956230997375057980/Picsart_22-03-22_20-52-06-470.jpg")
        .setDescription("**Drag Zap** Th7\n \n :white_check_mark: **Assets:**\n - strong for clan wars attacks.\n - can perf easily.\n\n :x: **Default:**\n - bad against villages with high level air defenses.\n\n :warning: **Pay attention:**\n - pay attention to the levels of the air defenses.")
        .setImage("http://image.noelshack.com/fichiers/2022/12/4/1648149822-drag-zap.jpg")
        .setTitle("Download compo")
        .setURL("https://link.clashofclans.com/fr?action=CopyArmy&army=u10x8s6x0");
        
        message.channel.send({  embeds: [embedc7dz]});
    }
});






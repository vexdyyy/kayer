const { EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

const akaneko = require('akaneko');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nsfw')
        .setDescription('Get some +18 pictures.')
    .addStringOption(stringOption => stringOption.setName('category').setDescription('Select Category.').setRequired(true).addChoices(
      { name: 'Ass', value: 'ass' },
      { name: 'BDSM', value: 'bdsm' },
      { name: 'Blow Job', value: 'blowjob' },
      { name: 'Cum', value: 'cum' },
      { name: 'Doujin', value: 'doujin' },
      { name: 'Feet', value: 'feet' },
      { name: 'Femdom', value: 'femdom' },
      { name: 'Fox girl', value: 'foxgirl' },
      { name: 'Gifs', value: 'gifs' },
      { name: 'Glasses', value: 'glasses' },
      { name: 'Hentai', value: 'hentai' },
      { name: 'Netorare', value: 'netorare' },
      { name: 'Maid', value: 'maid' },
      { name: 'Masturbation', value: 'masturbation' },
      { name: 'Orgy', value: 'orgy' },
      { name: 'Panties', value: 'panties' },
      { name: 'Pussy', value: 'pussy' },
      { name: 'School', value: 'school' },
      { name: 'Succubus', value: 'succubus' },
      { name: 'Tentacles', value: 'tentacles' },
      { name: 'Thighs', value: 'thighs' },
      { name: 'Uglybastard', value: 'uglybastard' },
      { name: 'Uniform', value: 'uniform' },
      { name: 'Yuri', value: 'yuri' },
      { name: 'Zettai Ryouiki', value: 'zettairyouiki' }
    ))
    .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
    run: async (client, interaction) => {
    const category = interaction.options.getString('category');

    if (category == 'ass') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Ass')
      .setImage(await akaneko.nsfw.ass());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'bdsm') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('BDSM')
      .setImage(await akaneko.nsfw.bdsm());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'blowjob') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Blow Job')
      .setImage(await akaneko.nsfw.blowjob());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'cum') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Cum')
      .setImage(await akaneko.nsfw.cum());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'doujin') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Doujin')
      .setImage(await akaneko.nsfw.doujin());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'feet') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Feet')
      .setImage(await akaneko.nsfw.feet());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'femdom') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Femdom')
      .setImage(await akaneko.nsfw.femdom());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'foxgirl') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Fox Girl')
      .setImage(await akaneko.nsfw.foxgirl());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'gifs') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Gifs')
      .setImage(await akaneko.nsfw.gifs());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'glasses') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Glasses')
      .setImage(await akaneko.nsfw.glasses());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'hentai') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Hentai')
      .setImage(await akaneko.nsfw.hentai());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'netorare') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Netorare')
      .setImage(await akaneko.nsfw.netorare());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'maid') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Maid')
      .setImage(await akaneko.nsfw.maid());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'masturbation') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Masturbation')
      .setImage(await akaneko.nsfw.masturbation());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'orgy') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Orgy')
      .setImage(await akaneko.nsfw.orgy());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'panties') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Panties')
      .setImage(await akaneko.nsfw.panties());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'pussy') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Pussy')
      .setImage(await akaneko.nsfw.pussy());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'school') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('School')
      .setImage(await akaneko.nsfw.school());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'succubus') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Succubus')
      .setImage(await akaneko.nsfw.succubus());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'tentacles') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Tentacles')
      .setImage(await akaneko.nsfw.tentacles());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'thighs') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Thighs')
      .setImage(await akaneko.nsfw.thighs());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'uglybastard') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Ugly Bastard')
      .setImage(await akaneko.nsfw.uglyBastard());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'uniform') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Uniform')
      .setImage(await akaneko.nsfw.uniform());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'yuri') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Yuri')
      .setImage(await akaneko.nsfw.yuri());
      interaction.reply({ embeds: [embedMessage] });
    } else if (category == 'zettairyouiki') {
      const embedMessage = new EmbedBuilder()
      .setColor('Red')
      .setTitle('Zettai Ryouiki')
      .setImage(await akaneko.nsfw.zettaiRyouiki());
      interaction.reply({ embeds: [embedMessage] });
    }
    },
};

const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Tamim", //don't change my credit
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞    : 𝐌𝐝 𝐓𝐚𝐦𝐢𝐦
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫   : 𝐌𝐚𝐥𝐞
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : 𝐍𝐨𝐭 𝐢𝐧𝐭𝐫𝐞𝐬𝐭𝐞𝐝
┃ 🎂 𝐀𝐠𝐞     : 𝟏𝟕+বুইড়া হয়নি
┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝐜𝐡𝐢𝐭𝐭𝐚𝐠𝐨𝐧𝐠,𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🎭 𝐓𝐢𝐤𝐭𝐨𝐤   : 𝐒𝐦𝐢𝐥𝐲𝐡𝐞𝐚𝐫𝐭𝟏𝟎𝟎𝐤
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `
    }, event.threadID);
};

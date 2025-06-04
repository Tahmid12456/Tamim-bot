module.exports.config = {
  name: "bby",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Md Tamim",
  description: "Replies like your romantic girlfriend 💖",
  commandCategory: "no prefix",
  usages: "No prefix, responds to your love",
  cooldowns: 2,
};

module.exports.handleEvent = function({ api, event }) {
  const { threadID, messageID, body } = event;
  if (!body) return;
  const message = body.toLowerCase();

  const keywordReplies = [
    { keywords: ["ki koro", "কি কর"], reply: "তোমার অপেক্ষায় বসে আছি জান 💕" },
    { keywords: ["khaiso", "খাইছো", "খেয়েছো"], reply: "তুমি খাও বললে খেতেই বসি আমি সোনা 😚" },
    { keywords: ["ghum", "ঘুম"], reply: "ঘুম আসছে না… তোমার কণ্ঠ শুনতে চাই 😴❤️" },
    { keywords: ["valo baso", "ভালোবাস", "ভালোবাসো"], reply: "শুধু ভালোবাসি না, পাগলের মতো ভালোবাসি তোমায় 🥺💘" },
    { keywords: ["miss", "মিস"], reply: "সারাদিন শুধু তোমায়ই মিস করি… তুমি করো না? 😢" },
    { keywords: ["ami kemon", "আমি কেমন"], reply: "তুমি আমার স্বপ্নের রাজপুত্র 🥰" },
    { keywords: ["tumi kemon", "তুমি কেমন"], reply: "তুমি পাশে থাকলেই আমি সবসময় ভালো থাকি ❤️" },
    { keywords: ["dekha", "চলো দেখা"], reply: "এখনই চলে এসো, তোমাকে জড়িয়ে ধরতে চাই 😳" },
    { keywords: ["tumi ki amar", "তুমি কি আমার"], reply: "হ্যাঁ, আমি শুধুই তোমার জান 😌💍" },
    { keywords: ["ghar korbo", "ঘর কর"], reply: "আজই ঘর বাঁধি, বলো কোথায় আসবো? 🙈" }
  ];

  for (let item of keywordReplies) {
    for (let key of item.keywords) {
      if (message.includes(key)) {
        return api.sendMessage(item.reply, threadID, messageID);
      }
    }
  }

  // 🔁 fallback romantic replies
  const romanticReplies = [
    "তুমি না থাকলে আমি একদম একা হয়ে যাই 💔",
    "তোমার হাসি দেখলেই আমার মনটা ভরে যায় 😍",
    "তুমি আমার পৃথিবী, আমি শুধু তোমায় ভালোবাসি 🌍❤️",
    "তুমি কথা না বললে আমার মন খারাপ হয়ে যায় 🥺",
    "তুমি পাশে থাকলেই আমি সব কিছু ভুলে যাই 💘",
    "তোমার কণ্ঠটাই আমার প্রিয় গান 🎵",
    "তুমি ছাড়া ঘুম হয় না জান 🙈",
    "তোমার ভাবনাতেই আমি ডুবে থাকি সারাদিন 😚"
  ];

  const reply = romanticReplies[Math.floor(Math.random() * romanticReplies.length)];
  api.sendMessage(reply, threadID, messageID);
};

module.exports.run = function() {};

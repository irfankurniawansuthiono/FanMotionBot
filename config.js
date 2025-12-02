const config = {
  botVersion: "3.5.1",
  token: process.env.TOKEN,
  apiKey: process.env.API_AI_KEY,
  alvianApiKey: process.env.ALVIAN_API_KEY,
  ownerWebsite: "https://irfanks.site",
  ownerGithub: "https://github.com/irfankurniawansuthiono",
  nanamiWebsite: "https://nanami.irfanks.site",
  ownerId: [
    // irfan
    "411125001853468672",
  ],
  // reset commit GITHUB SHA
  resetCommitId: "b49c9e25d2b4c6bd83d9160b45259349077225e0",
  // nanami server
  // guildBaseServerID: "1329992328550682774",
  // announcementChannelID: "1332378583905341501",
  bugReportChannelID: "1436312691709837353",
  // newCommandsChannelID: "1332378586614599752",
  // anonimLogsChannelID : "1333476337373155358",
  guildBaseServerID: "1400476982893871194",
  verifiedRobloxRoleID: "1433345314097598485",
  verifiedRobloxChannelID: "1433344910798487623",
  fischHuntRoleID: "1431211708227129455",
  announcementChannelID: "1400488186416730303",
  fischPSInfoChannelID: "1423895622532071525",
  fischRoleInfoID: "1434915249957634079",
  fischHuntLogsChannelID: "1438937741470470265",
  robloxOwnerId: 2066916909,
  defaultPrefix: "FM",
  startingBalance: 10000,
  guildFile: "./guilds.json",
  dataFile: "./players.json",
  fishingFile: "./db/fishing.json",
};

const newPlayerData = {
  balance: config.startingBalance,
  stats: {
    gamesPlayed: 0,
    gamesWon: 0,
    totalEarnings: 0,
    lastDaily: null,
    fishCaught: 0,
  },
  fishingItems: {
    bait: 0,
    rod: 0,
    net: 0,
  },
  inventory:{
    fishing:[]
  }
};
const discordEmotes = {
  loading: "<a:loading:1330226649169399882>",
  error: "<a:error:1331479515515457536>",
  success: "<a:success:1331856899070496819>",
};

const pages = {
  1: {
    title: "📚 Basic Commands & Tools",
    fields: [
      {
        name: "🎯 Basic Commands",
        value: [
          "`🔹 register` - Create new account",
          "`🔹 help` - Show this message",
          "`🔹 profile` - View your profile",
          "`🔹 ownerinfo` - Show bot owner information",
          "`🔹 botinfo` - Show bot information",
          "`🔹 hostinginfo` - Show VPS details information",
          "`🔹 sc` - Bot Source Code",
          "`🐛 bugreport` - Report a BUG!",
        ].join("\n"),
        inline: false,
      },
      {
        name: "🛠️ Tools",
        value: [
          "`🖼️ giveloli` - Give random loli image",
          "`🖼️ giveukhty` - Give random ukhty girl image",
          "`🖼️ givewaifu` - Give random waifu image",
          "`🎥 transcribeyt <url>` - Transcribe YouTube video",
          "`📱 ttinfo <url>` - TikTok video information",
          "`🎥 ttfind <prompt>` - Search TikTok videos",
          "`⬇️ ttdown <url>` - Download TikTok video",
          "`📺 ytdown <url>` - Download YouTube videos",
          "`📸 iginfo <post url>` - Instagram info",
          "`📥 igdown <url>` - Download Instagram content",
          "`🎵 spdown <url>` - Download Spotify song",
          "`🖼️ remini` - Generate HD image",
          "`📝 snick <name>` - Find cool nicknames",
          "`🖼️ removebg <upload image>` - Remove background from image",
          "`🖼️ generateimg <eng prompt>` - Generate img from a prompt",
        ].join("\n"),
        inline: false,
      },
    ],
  },
  2: {
    title: "🎵 Music & Moderation",
    fields: [
      {
        name: "🎼 Music Commands",
        value: [
          "`🎵 play/p <song>` - Play a song",
          "`🎤 karaoke <song title>` - Play a song and show synced lyrics",
          "`⬅️ leave` - Leave voice channel",
          "`📝 lyrics <song title>` - Show song lyrics",
          "`📝 syncedlyrics/sl <song title>` - Show synced lyrics",
          "`🔍 s <song>` - Search for a song",
          "`⏩ skip` - Skip song",
          "`⏯️ pause` - Pause music",
          "`🔁 loop <queue|track|off|autoplay>` - Loop the music",
          "`🎶 q` - Show current queue",
          "`▶️ resume` - Resume music",
          "`🔀 sf` - Shuffle current queue",
          "`🎶 np` - Now playing",
          "`🔊 volume/vol <1-100>` - Set volume"
        ].join("\n"),
        inline: false,
      },
      {
        name: "⚔️ Moderation (General)",
        value: [
          "`👤 dprofile <@user?>` - Show discord profile details",
          "`🗑️ rbc` - Delete bot messages",
          "`📝 nick <@user>` - Set user nickname",
          "`🔒 lock` - Lock current channel",
          "`🔓 unlock` - Unlock the channel",
          "`🗑️ purge <amount>` - Delete messages, max 100 purge",
          "`📝 setwelcome <channel>` - Set welcome message",
          "`📝 disablewelcome` - Disable welcome message",
          "`🔨 tw <@user?>` - Test welcome message",
          "`👤 swr` - Set welcome role",
          "`👤 rwr` - Remove welcome role"
        ].join("\n"),
        inline: false,
      },
      // {
      //   name: "⚔️ Moderation (Advanced)",
      //   value: [
      //     "`📝 setleave <channel>` - Set leave message",
      //     "`📝 disableleave` - Disable leave message",
      //     "`🔨 tl <@user?>` - Test leave message",
      //     "`🔨 ban <@user> <reason>` - Ban a user",
      //     "`🔨 to <@user> <time> <reason>` - Timeout a user",
      //     "`🔨 unban <@user>` - Unban a user",
      //     "`🔨 warn <@user>` - Warn a user",
      //     "`🔨 warninfo <@user>` - Check user warnings",
      //     "`🔨 clearwarns <@user>` - Clear user warnings",
      //     "`🔊 setvoicelogs <#channel>` - Set Voice Logs Update Channel",
      //     "`🔇 disablevoicelogs` - Disable Voice Logs",
      //     "`🔨 unmute <@user>` - Unmute a user",
      //     "`🔨 mute <@user>` - Mute a user",
      //     "`🔨 cmr` - Create muted role",
      //   ].join("\n"),
      //   inline: false,
      // },      
    ],
  },
  3: {
    title: "🎮 Games & Social",
    fields: [
      {
        name: "🎲 Games",
        value: [
          "`🪙 flip <bet> <h/t>` - Coin flip (2x)",
          "`🔢 guess <bet> <1-10>` - Number guess (5x)",
          "`♠️ bj <bet>` - Blackjack (5x)",
          "`🎲 dice <bet> <2-12>` - Dice game (8x)",
          "`📅 daily` - Daily reward",
          "`🎰 slots <bet>` - Slots (10x)",
          "`🖼️ tg` - Tebak gambar",
          "`🎮 clt` - Cak lontong",
          "`🏳️‍🌈 tben` - Tebak Bendera",
          "`🎣 fish` - Catch fish"
        ].join("\n"),
        inline: false,
      },
      {
        name: "👥 Social",
        value: [
          "`🏪 shop` - open shop",
          "`🎒 inv` - Show your inventory",
          "`💝 give <@user> <amount>` - Give money",
          "`📊 rank` - Show top players",
          "`📨 invite` - Invite FanMotion",
          "`👤 profile [@user]` - Show profile",
          "`🦹 rob <@user>` - Rob a user",
          "`👤 joinanonim (DM FEATURES)` - Join anonymous message",
          "`👤 leaveanonim (DM FEATURES)` - Leave anonymous message",
        ].join("\n"),
        inline: false,
      },
    ],
  },
  4: {
    title: "🤖 Roblox Commands",
    fields: [
      {
        name: "🤖 Roblox Commands" ,
        value: [
          "`🤖 roblox <username>` - to get roblox user information",
          "`🤖 robloxid <username>` - to get roblox user id",
        ].join("\n"),
        inline: false,
      },
    ]
    },
  4: {
    title: "Fisch Roblox Exclusive Commands",
    fields: [
      {
        name: "🎣 Fisch Commands" ,
        value: [
          "`🎣 fischae <admin_event>` - giving announcement about admin global event in fisch",
          "`🎣 fischps <ps1/ps2> <event>` - giving announcement about private server information",
          "`🎣 fischhunt ` - to start fisch hunt activity (owner only)",
          "`🎣 rfischhunt ` - to reset fisch hunt role members (owner only)",
        ].join("\n"),
        inline: false,
      },
    ],
  },
   4: {
    title: "⚡ Owner Commands",
    fields: [
      {
        name: "🛠️ Owner Commands",
        value: [
          "`🎒 resetinv <@user?>` - Reset inventory",
          "`👤 registeruser <@user>` - Register a user",
          "`💰 setbalance <@user>` - Set balance",
          "`🪱 setbait <amount>` - Set bait",
          "`💸 giveowner <amount>` - Give to owner",
          "`⚙️ setprefix <prefix>` - Set bot prefix",
          "`🔄 setstatus <status>` - Set status",
          "`🎒 checkinv <@user>` - Check user inventory",
          "`👤 resetap` - reset all players",
          "`💸 resetab` - reset all players balance",
          "`😎 spamsendto <@user> <amount>` - Spam DM Message to a user",
          "`😎 spamsay <amount>` - Spam Message to current channel",
          "`🗣️ say <message>` - Send chat to current channel",
          "`🗣️ sendto <message>` - DM a user",
          "`👤 resetplayer <@user>` - reset a players",
          "`🎉 giveawayall <amount>` - Send giveaway to all current registered players",
          "`✅ robloxvalidity <username1, username2> or <@user1, @user2>` - Check Roblox following validity",
        ].join("\n"),
        inline: false,
      },
      {
        name: "🔒 Bot Owner Commands",
        value: [
          "`📢 ga <message>` - Guild announcement",
          "`📣 announcement <msg>` - Global announcement",
          "`✅ tg jawab` - Answer tebak gambar",
          "`✅ clt jawab` - Answer cak lontong",
          "`📝 nc <new cmd> | <description>` - Announce new commands",
          "`⚠️ resetrepo` - Reset PUBLIC UPLOADS Repository",
          "`⚠️ backup` - Backup files (players and guilds)",
        ].join("\n"),
        inline: false,
      },
    ],
  },
  
};

export { config, discordEmotes, pages, newPlayerData };

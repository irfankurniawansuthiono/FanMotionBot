import noblox from "noblox.js";
import { config } from "../config.js";

class RobloxFunction {
  constructor() {
    this.name = "RobloxFunction";
    this.description = "Base class for Roblox functions.";
  }

  async getUserFollowing(username) {
    try {
      const userId = await noblox.getIdFromUsername(username);
      const following = await noblox.getFollowings(userId);
      
      return following;
    } catch (error) {
      console.error(`Error fetching followings for userId ${userId}:`, error);
      throw error;
    }
  }
  async getUserId(username) {
    try {
      const userId = await noblox.getIdFromUsername(username);
      return userId;
    } catch (error) {
      console.error("Error fetching user ID:", error);
    }
  }
  async getUserProfileStats(message, username) {
    try {
      const userId = await this.getUserId(username);
      const profileStats = await noblox.getUserInfo(userId);
      const friendsCount = await noblox.getFriendCount(userId);
      const followersCount = await noblox.getFollowerCount(userId);
      const followingCount = await noblox.getFollowingCount(userId);
      const profileThumbnail = await noblox.getPlayerThumbnail(
        userId,
        420,
        "png",
        false,
        "headshot"
      );
      const embed = {
        color: 0xff0000,
        title: `📊 Roblox Profile — ${
          profileStats.displayName || profileStats.name
        }`,
        thumbnail: {
          url: profileThumbnail?.[0]?.imageUrl || null,
        },
        fields: [
          {
            name: "🧑 Username",
            value: profileStats.name || "N/A",
            inline: true,
          },
          {
            name: "🆔 User ID",
            value: profileStats.id.toString(),
            inline: true,
          },
          {
            name: "✨ Display Name",
            value: profileStats.displayName || "N/A",
            inline: true,
          },

          {
            name: "📄 Description",
            value: profileStats.description?.trim() || "No description.",
            inline: false,
          },

          {
            name: "👥 Friends",
            value: friendsCount.toString(),
            inline: true,
          },
          {
            name: "👀 Followers",
            value: followersCount.toString(),
            inline: true,
          },
          {
            name: "➡️ Following",
            value: followingCount.toString(),
            inline: true,
          },

          {
            name: "📅 Account Created",
            value: new Date(profileStats.created).toDateString(),
            inline: false,
          },
        ],
        footer: {
          text: "Roblox Profile Lookup",
        },
        timestamp: new Date(),
      };

      return await message.reply({ embeds: [embed] });
    } catch (error) {
      console.error("Error fetching user profile stats:", error);
    }
  }

  async checkUserFollowingValidity(username) {
  try {
    // Ambil userId dari username
    const userId = await noblox.getIdFromUsername(username);
    if (!userId) {
      console.warn("UserId not found for:", username);
      return false;
    }

    const following = await noblox.getFollowings(userId);
    const followingIds = following.data.map(user => user.id);
    return followingIds.includes(config.robloxOwnerId);
  } catch (error) {
    console.error("Error checking user following validity:", error);
    return false;
  }
}


}

export default RobloxFunction;

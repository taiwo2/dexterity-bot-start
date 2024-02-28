import TelegramBot from "node-telegram-bot-api";
import { cancelTraderSub } from "./bot-utils/cancelTraderSubHandler";
import { newTraderSubHandler } from "./bot-utils/newTraderSubHandler";

const token = "";
const chatId = 1000000;

const bot = new TelegramBot(token, { polling: true });

console.log("Bot is live");

bot.onText(/\/start/, (msg) => {
  const welcomeMessage = `Welcome to the Trade Copy Bot! 🤖 Here's how you can get started:
  
  - Use /help to view all the commands.
  - Use /newcopy {trg-pubkey} to subscribe to a new trader.
  - Use /cancelcopy to cancel the subscription.
  
  Feel free to explore and let me know if you have any questions!`;

  bot.sendMessage(msg.chat.id, welcomeMessage);
});

bot.onText(/\/help/, (msg) => {
  const helpMessage = `Here's how to use the bot commands:
  
  - Use /help to view all the commands.
  - Use /newcopy {trg-pubkey} to subscribe to a new trader.
  - Use /cancelcopy to cancel the subscription.
  
  If you have any questions or need further assistance, please reach out!`;

  bot.sendMessage(msg.chat.id, helpMessage);
});

bot.onText(/\/newcopy (.+)/, async (msg, match) => {
  if (msg.chat.id !== chatId) return;

  if (!match || !match[1]) {
    return bot.sendMessage(
      chatId,
      "Please provide the trader's TRG pubkey in the correct format: /newcopy {trg-pubkey}"
    );
  }

  bot.sendMessage(chatId, "Subscribing to trader...");

  // handle subscribe to trader
  // send response to user
});

bot.onText(/\/cancelcopy/, async (msg, match) => {
  if (msg.chat.id != chatId) return;

  if (!match) return bot.sendMessage(chatId, "Wrong format");

  // handle cancel subscription
  // send response to user
});

export const sendTradeMessageToUser = async (tradeInfo: any) => {
  // parse tradeInfo into message
  // send response to user
};

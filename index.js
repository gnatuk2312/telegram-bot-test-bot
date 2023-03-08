const TelegramApi =  require("node-telegram-bot-api");

const token = "5938125964:AAFlubdnRty4o8iMD6FInYfPcgd3n769Z5w";

const bot = new TelegramApi(token, { polling: true });

bot.on("message", async (message) => {
    const text = message.text;
    const chatId = message.chat.id;
    
    if (text === "/start") {
        return await bot.sendMessage(chatId, `Привіт! Я асистент Гната, радий вам допомогти.`);
    } 
    return await bot.sendMessage(chatId, `Не розумію вашого запитання`);
})
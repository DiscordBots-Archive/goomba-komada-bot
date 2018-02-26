var TicTacToe = require('tictactoejs');

/*
client.ttt = {
  status: [],
}
*/

exports.run = async (client, msg, [command, move]) => {
  var game;
  if (command == "new") {
    if (client.ttt.status[msg.author.id]) {
      return msg.reply("finish the started game before starting a new one.")
    }
    game = new TicTacToe.TicTacToe();
    msg.channel.send(`\`\`\`${game.ascii()}\`\`\``); // check board
    return client.ttt.status[msg.author.id] = game;
  }
  game = client.ttt.status[msg.author.id];
  const moves = move.split(","); 
  // console.log(moves);
  const col = parseInt(moves[0]), row = parseInt(moves[1])
  if (game.status() != "in progress") {
    // client.ttt.status.delete(msg.author.id)
    delete client.ttt.status[msg.author.id]
    if (game.status() != "draw") {
      if (game.status() == "X") {
        msg.reply(`X (you) won!`);
      } else {
        msg.reply(`O (the AI) won!`);
      }
    } else {
      msg.reply(`It's a draw!`);
    }
    return msg.channel.send(`\`\`\`${game.ascii()}\`\`\``); // check board
  }
  game.turn(); // first move will be X
  game.move(col, row);
  if (game.status() != "in progress") {
    // client.ttt.status.delete(msg.author.id)
    delete client.ttt.status[msg.author.id]
    if (game.status() != "draw") {
      if (game.status() == "X") {
        msg.reply(`X (you) won!`);
      } else {
        msg.reply(`O (the AI) won!`);
      }
    } else {
      msg.reply(`It's a draw!`);
    }
    return msg.channel.send(`\`\`\`${game.ascii()}\`\`\``); // check board
  }
  game.turn(); // will be O
  game.randomMove();
  if (game.status() != "in progress") {
    // client.ttt.status.delete(msg.author.id)
    delete client.ttt.status[msg.author.id]
    if (game.status() != "draw") {
      if (game.status() == "X") {
        msg.reply(`X (you) won!`);
      } else {
        msg.reply(`O (the AI) won!`);
      }
    } else {
      msg.reply(`It's a draw!`);
    }
    return msg.channel.send(`\`\`\`${game.ascii()}\`\`\``); // check board
  }
  msg.channel.send(`\`\`\`${game.ascii()}\`\`\``); // check board
  client.ttt.status[msg.author.id] = game;
  if (game.status() != "in progress") {
    // client.ttt.status.delete(msg.author.id)
    delete client.ttt.status[msg.author.id]
    if (game.status() != "draw") {
      if (game.status() == "X") {
        msg.reply(`X (you) won!`);
      } else {
        msg.reply(`O (the AI) won!`);
      }
    } else {
      msg.reply(`It's a draw!`);
    }
    return msg.channel.send(`\`\`\`${game.ascii()}\`\`\``); // check board
  }
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["ttt"],
  permLevel: 0,
  botPerms: ["SEND_MESSAGES"],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "tictactoe",
  description: "A very basic tic-tac-toe command.",
  usage: "<new|move> [move:str]",
  usageDelim: " ",
  extendedHelp: `- start                 Starts a new game\n- move <move(col,row)>  Moves your symbol through the board
BOARD:
Y
3   1,3 | 2,3 | 3,3
    ---------------
2   1,2 | 2,2 | 3,2
    ---------------
1   1,1 | 2,1 | 3,1

     1     2     3	X`
};
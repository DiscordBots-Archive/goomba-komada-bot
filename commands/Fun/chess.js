var TicTacToe = require('tictactoejs');
var Chess = require('./chess');

/*
client.chess = {
  status: [],
}
*/

exports.run = async (client, msg, [command, move]) => {
  /*var game;
  if (command == "new") {
    if (client.ttt.status[msg.author.id]) {
      return msg.reply("finish the started game before starting a new one.")
    }
    game = new TicTacToe.TicTacToe();
    msg.channel.send(`\`\`\`${game.ascii()}\`\`\``); // check board
    return client.ttt.status[msg.author.id] = game;
  }*/
  var chess = new Chess.Chess();

  while (!chess.game_over()) {
    var moves = chess.moves();
    var move = moves[Math.floor(Math.random() * moves.length)];
    chess.move(move);
  }
  console.log(chess.pgn());
  // if(!move || move == undefined) return msg.reply("hey, where do you want to move?")
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 10,
  botPerms: ["SEND_MESSAGES"],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "chess",
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
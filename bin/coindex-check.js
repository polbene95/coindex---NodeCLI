const program = require('commander'); 
const check = require('../commands/check');

program
    .command('price')
    .description('Check price of coins')
    .option('--coin <type>', 'Add specific coin types in CSV format', 'BTC,ETH,USDT,XRP,BCH')
    .option('--cur <currency>', 'Change the curency', 'USD')
    .action(cmd => check.price(cmd))

program.parse(process.argv)
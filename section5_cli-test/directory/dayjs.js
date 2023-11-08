const dayjs = require('dayjs');

const str = dayjs(new Date().now).format('YYYY/MM/DD HH:mm:ss');

console.log(str);
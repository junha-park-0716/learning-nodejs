const fs = require('fs');
const { writeFile } = require('fs/promises');
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const writeFileName = `${__filename}-${Date.now()}`

const write = async (chunk) =>{
    await sleep(Math.random * 1000);
    await writeFile(writeFileName, chunk, { flag: 'a'});
}

const main = async () => {
    const stream = fs.createReadStream(__filename, { encoding: 'utf8', highWaterMark: 64});
    let counter = 0;

    // async iterator
    for await (const chunk of stream) {
        console.log(counter);
        counter++;
        await write(chunk);
    }

}
main().catch((e) => console.error(e));

// Only ECMAScript modules
import { readFile } from 'fs/promises';

const data = await readFile(new URL(import.meta.url), { encording: 'utf-8'})

console.log(data);
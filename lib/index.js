import fs from 'fs';
import {chromAndPosMatcher} from './matchers.js';
import {lineMatchStreamProcessor} from './processors.js';

// Simple function to search VCF file given chrom and pos
export async function findRefInVcfFile(filename, chrom, pos) {
    const {found, columns} = await lineMatchStreamProcessor(fs.createReadStream(filename), chromAndPosMatcher, [chrom, pos]);
    if (found) {
        console.log(`${chrom}:${pos} is "${columns[3]}"`);
    } else {
        console.log(`${chrom}:${pos} not found`);
    }
}
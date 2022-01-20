import readline from 'readline';
import {once} from 'events';

// Responsibility: mechanism of reading file
// Designed to take any sort of matcher with any list of args
async function lineMatchStreamProcessor(instream, matcher, args) {
    const reader = readline.createInterface({
        input: instream,
        crlfDelay: Infinity
    });

    let found = false;
    let columns = {};
    reader.on('line', function(line) {
        // Calling `close()` does not immediately stop other events (including `'line'`)
        if (!found) {
            ({ found, columns } = matcher(line, ...args));
            if (found) {
                reader.close();
            }
        }
    });

    await once(reader, 'close');
    return {found, columns};
}

export {
    lineMatchStreamProcessor,
};

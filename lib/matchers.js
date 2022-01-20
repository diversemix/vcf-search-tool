
// Responsibility matching line to chrom and pos
const chromAndPosMatcher = (line, chrom, pos) => {
    const columns = line.split('\t');
    const found = columns?.length > 2 &&
        columns[0] === String(chrom) &&
        columns[1] === String(pos);
    return { found, columns };
 };

 export {
     chromAndPosMatcher,
 };
import {findRefInVcfFile} from './lib/index.js';

console.log('Running...');
findRefInVcfFile('input_tiny.vcf', 'chr1', 16837);
findRefInVcfFile('input_tiny.vcf', 'chr1', 17655);

// Load test
//findRefInVcfFile("data/ALL.chr22.phase3_shapeit2_mvncall_integrated_v5a.20130502.genotypes.vcf", 22,51244237);
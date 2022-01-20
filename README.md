# vcf-search-tool
Search tool for VCF files
-----

## TL;DR

- Clone the repo
- Run `make`

## Tooling
- node.js v16.13.2 - https://nodejs.org/en/download/
- npm v8.3.1 - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- nvm v0.39.1 - https://github.com/nvm-sh/nvm

## Discussion

### Approach
- Do not needlessly use dependencies
- SOLID approach - separating responsibilites
    - processors.js - will only be changed if you change the way a file is processed
    - matchers.js - will only be changed if you chnage the way the line matching is done
- Functional code (as opposed to OO)
- Designed to be extended any matcher containing any arg list can be passed to a processor.
- VCF files can get very large - so chosen to process the file as a stream.

### Limitation/problems with this solution
- The file is opened and processed for each match needed
    - this can be solved by writing another matcher that take a list of CHROM,POS pairs to match on.

### How does it scale?
Seems ok ...
- I've tested this with large ~11Gb VCF files it matches the last line in 3min 30 sec taking no more than 600Mb of memory.
- 
### How to test efficiently
- Unit test with something like the Jest framework, 
    - check it works in known cases, when good data is used (found and not found)
    - check it fails as expected when bad data is used, e.g.
        - bad args for chrom and pos
        - non-existent file and non-VCF file
- Integration test with an appropriate framework if being used as part of an API, CLI, frontend lib etc
- Load test with large VCF files (see next point)
- Use representitive data, for example see for example: https://ftp-trace.ncbi.nih.gov/1000genomes/ftp/release/20130502/

## References

- https://www.internationalgenome.org/wiki/Analysis/vcf4.0/
- https://samtools.github.io/hts-specs/VCFv4.3.pdf

1.6 Data lines
All data lines are tab-delimited with no tab character at the end of the line. The last data line must end with a line
separator. In all cases, missing values are specified with a dot (‘.’)

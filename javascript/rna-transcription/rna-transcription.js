//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const toRna = (DNA) => {
    let mappingsDNAtoRNA = new Map();
    mappingsDNAtoRNA.set('G', 'C');
    mappingsDNAtoRNA.set('C', 'G');
    mappingsDNAtoRNA.set('T', 'A');
    mappingsDNAtoRNA.set('A', 'U');

    let RNA = '';
    for (let nucleotide = 0; nucleotide < DNA.length; nucleotide++) {
        RNA += (mappingsDNAtoRNA.get(DNA[nucleotide]));
    }
    return RNA;
};

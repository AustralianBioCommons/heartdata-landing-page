export interface Cohort {
  name: string;
  outcomes: string;
  subjects: number;
  clinical: number;
  genomic: number | null;
  lipidomic: number | null;
}

export const cohorts: Cohort[] = [
  // Priority cohorts (shown by default)
  { name: "AusDiab", outcomes: "CVD (>15 yr)", subjects: 11000, clinical: 11000, genomic: null, lipidomic: 10000 },
  { name: "Caught-CAD", outcomes: "CTCA/CVD (<3 yr)", subjects: 1000, clinical: 1000, genomic: 1000, lipidomic: 1000 },
  { name: "EDCAD-PMS", outcomes: "CTCA/CVD (<3 yr)", subjects: 1000, clinical: 1000, genomic: 1000, lipidomic: 1000 },
  { name: "Baker Biobank", outcomes: "CVD (>15 yr)", subjects: 6000, clinical: 6000, genomic: 6000, lipidomic: null },
  { name: "CDAH", outcomes: "CVD (>20 yr)", subjects: 4947, clinical: 4947, genomic: null, lipidomic: null },
  // Remaining cohorts
  { name: "FIELD", outcomes: "CVD (>10 yr)", subjects: 10000, clinical: 10000, genomic: 5000, lipidomic: 5000 },
  { name: "BioHEART-CT", outcomes: "CTCA/CVD (<3 yr)", subjects: 5000, clinical: 5000, genomic: 2000, lipidomic: 2000 },
  { name: "Busselton", outcomes: "CVD (>20 yr)", subjects: 4492, clinical: 4492, genomic: 4492, lipidomic: 4492 },
  { name: "ASPREE", outcomes: "CVD (~5 yr)", subjects: 14000, clinical: 14000, genomic: 14000, lipidomic: 4000 },
  { name: "LIPID", outcomes: "CVD (>20 yr)", subjects: 10000, clinical: 10000, genomic: null, lipidomic: 6000 },
  { name: "45 and Up", outcomes: "CVD", subjects: 267000, clinical: 267000, genomic: 5000, lipidomic: null },
  { name: "BioHEART-MI", outcomes: "CVD (<3 yr)", subjects: 2000, clinical: 2000, genomic: 2000, lipidomic: 2000 },
  { name: "MCCS", outcomes: "CVD (>20 yr)", subjects: 41513, clinical: 41513, genomic: 12105, lipidomic: 3000 },
  { name: "PREDICT", outcomes: "CVD", subjects: 2500, clinical: 2500, genomic: null, lipidomic: null },
  { name: "ADVANCE", outcomes: "CVD (<5 yr)", subjects: 11140, clinical: 11140, genomic: null, lipidomic: 3779 },
  { name: "PROPHECY", outcomes: "CVD (<3 yr)", subjects: 1386, clinical: 1386, genomic: 1386, lipidomic: null },
  { name: "BIRCH", outcomes: "CVD (<3 yr)", subjects: 490, clinical: 490, genomic: null, lipidomic: 466 },
  { name: "DaVinci", outcomes: "CVD (<3 yr)", subjects: 600, clinical: 600, genomic: 600, lipidomic: null },
];

export const totalSubjects = cohorts.reduce((sum, c) => sum + c.subjects, 0);
export const totalClinical = cohorts.reduce((sum, c) => sum + c.clinical, 0);
export const totalGenomic = cohorts.reduce((sum, c) => sum + (c.genomic ?? 0), 0);
export const totalLipidomic = cohorts.reduce((sum, c) => sum + (c.lipidomic ?? 0), 0);

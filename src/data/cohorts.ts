export interface Cohort {
  name: string;
  subjects: number;
  genomic: boolean;
  lipidomic: boolean;
  proteomic: boolean;
  metabolomic: boolean;
}

export const cohorts: Cohort[] = [
  { name: "AusDiab", subjects: 11247, genomic: true, lipidomic: true, proteomic: false, metabolomic: true },
  { name: "FIELD", subjects: 9795, genomic: true, lipidomic: true, proteomic: true, metabolomic: true },
  { name: "BioHEART-CT", subjects: 5000, genomic: true, lipidomic: true, proteomic: true, metabolomic: true },
  { name: "ASPREE", subjects: 19114, genomic: true, lipidomic: false, proteomic: false, metabolomic: false },
  { name: "45 & Up (Subset)", subjects: 267000, genomic: true, lipidomic: false, proteomic: false, metabolomic: false },
];

export const totalSubjects = cohorts.reduce((sum, c) => sum + c.subjects, 0);

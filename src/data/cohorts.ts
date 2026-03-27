export interface Cohort {
  name: string;
  subjects: number;
  clinical: boolean;
  genomic: boolean;
  lipidomic: boolean;
  proteomic: boolean;
  metabolomic: boolean;
}

export const cohorts: Cohort[] = [
  { name: "AusDiab", subjects: 11247, clinical: true, genomic: true, lipidomic: true, proteomic: false, metabolomic: false },
  { name: "Baker Biobank", subjects: 8622, clinical: true, genomic: false, lipidomic: false, proteomic: false, metabolomic: false },
  { name: "CDAH", subjects: 3965, clinical: true, genomic: false, lipidomic: false, proteomic: false, metabolomic: false },
  { name: "EDCAD", subjects: 2251, clinical: true, genomic: true, lipidomic: true, proteomic: false, metabolomic: false },
  { name: "CAUGHT-CAD", subjects: 1092, clinical: true, genomic: false, lipidomic: true, proteomic: false, metabolomic: false },
];

export const totalSubjects = cohorts.reduce((sum, c) => sum + c.subjects, 0);

export interface Cohort {
  name: string;
  outcomes: string;
  subjects: number;
  clinical: number;
  genomic: number | null;
  lipidomic: number | null;
  status: "onboarded" | "coming";
  genomicComing?: boolean; // genomic flagged "coming soon" (vs simply not available)
}

export const cohorts: Cohort[] = [
  // Onboarded cohorts (live on the platform; shown by default)
  { name: "AusDiab", outcomes: "CVD (>15 yr)", subjects: 11247, clinical: 11247, genomic: null, lipidomic: 10339, status: "onboarded" },
  { name: "Caught-CAD", outcomes: "CTCA/CVD (<3 yr)", subjects: 1092, clinical: 1092, genomic: null, lipidomic: 1052, status: "onboarded", genomicComing: true },
  { name: "EDCAD-PMS", outcomes: "CTCA/CVD (<3 yr)", subjects: 2251, clinical: 2251, genomic: null, lipidomic: 1556, status: "onboarded", genomicComing: true },
  { name: "Baker Biobank", outcomes: "CVD (>15 yr)", subjects: 5311, clinical: 5311, genomic: null, lipidomic: null, status: "onboarded", genomicComing: true },
  { name: "CDAH", outcomes: "CVD (>20 yr)", subjects: 3965, clinical: 3965, genomic: null, lipidomic: null, status: "onboarded" },
  // To-be-onboarded cohorts (scheduled; revealed on expand)
  { name: "FIELD", outcomes: "CVD (>10 yr)", subjects: 10000, clinical: 10000, genomic: 5000, lipidomic: 5000, status: "coming" },
  { name: "BioHEART-CT", outcomes: "CTCA/CVD (<3 yr)", subjects: 5000, clinical: 5000, genomic: 2000, lipidomic: 2000, status: "coming" },
  { name: "Busselton", outcomes: "CVD (>20 yr)", subjects: 4492, clinical: 4492, genomic: 4492, lipidomic: 4492, status: "coming" },
  { name: "ASPREE", outcomes: "CVD (~5 yr)", subjects: 14000, clinical: 14000, genomic: 14000, lipidomic: 4000, status: "coming" },
  { name: "LIPID", outcomes: "CVD (>20 yr)", subjects: 10000, clinical: 10000, genomic: null, lipidomic: 6000, status: "coming" },
  { name: "45 and Up", outcomes: "CVD", subjects: 267000, clinical: 267000, genomic: 5000, lipidomic: null, status: "coming" },
  { name: "BioHEART-MI", outcomes: "CVD (<3 yr)", subjects: 2000, clinical: 2000, genomic: 2000, lipidomic: 2000, status: "coming" },
  { name: "MCCS", outcomes: "CVD (>20 yr)", subjects: 41513, clinical: 41513, genomic: 12105, lipidomic: 3000, status: "coming" },
  { name: "PREDICT", outcomes: "CVD", subjects: 2500, clinical: 2500, genomic: null, lipidomic: null, status: "coming" },
  { name: "ADVANCE", outcomes: "CVD (<5 yr)", subjects: 11140, clinical: 11140, genomic: null, lipidomic: 3779, status: "coming" },
  { name: "PROPHECY", outcomes: "CVD (<3 yr)", subjects: 1386, clinical: 1386, genomic: 1386, lipidomic: null, status: "coming" },
  { name: "BIRCH", outcomes: "CVD (<3 yr)", subjects: 490, clinical: 490, genomic: null, lipidomic: 466, status: "coming" },
];

export const onboardedCohorts = cohorts.filter((c) => c.status === "onboarded");
export const comingCohorts = cohorts.filter((c) => c.status === "coming");

// Full federated scope (all cohorts) — used by the hero and About page.
export const totalSubjects = cohorts.reduce((sum, c) => sum + c.subjects, 0);
export const totalClinical = cohorts.reduce((sum, c) => sum + c.clinical, 0);
export const totalGenomic = cohorts.reduce((sum, c) => sum + (c.genomic ?? 0), 0);
export const totalLipidomic = cohorts.reduce((sum, c) => sum + (c.lipidomic ?? 0), 0);

// Onboarded-only totals — used by the Datasets table summary + footer.
export const onboardedClinical = onboardedCohorts.reduce((sum, c) => sum + c.clinical, 0);
export const onboardedGenomic = onboardedCohorts.reduce((sum, c) => sum + (c.genomic ?? 0), 0);
export const onboardedLipidomic = onboardedCohorts.reduce((sum, c) => sum + (c.lipidomic ?? 0), 0);

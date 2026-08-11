// Canonical CTA model for the researcher access journey.
// Keep header and hero consistent by referencing these constants everywhere.
//
// Journey: Explore -> Understand -> Apply
//
//   Explore the Data Commons (hero, primary)  -> DATA_COMMONS_URL        explore datasets
//   Learn more (hero, secondary)              -> LEARN_MORE_URL          what ACDC is + how access works
//   Login (header, blue button)               -> DATA_COMMONS_LOGIN_URL  returning users sign in
//   Start your application (About page)       -> DATA_COMMONS_URL        apply via REMS
//   Contact (About page + footer)             -> CONTACT_URL             email the team
//   Data Harmonisation bar (platform)         -> DATA_DICTIONARY_URL     live data dictionary
//   User Guide (platform link + footer)       -> USER_GUIDE_URL          in-app guide.html stub
//
// Distinct truthful destinations: portal root (explore), /login (sign in), about.html (learn).

const base = import.meta.env.BASE_URL;

/** Gen3 Data Commons portal — explore datasets and apply via REMS (hero primary CTA). */
export const DATA_COMMONS_URL = "https://commons.heartdata.baker.edu.au";

/** Returning approved researchers sign in to the portal (header Login). */
export const DATA_COMMONS_LOGIN_URL = "https://commons.heartdata.baker.edu.au/login";

/** About page — what ACDC is and how access works (hero + header "Learn more"). */
export const LEARN_MORE_URL = `${base}about.html`;

/** ACDC support email (About page + footer). */
export const CONTACT_URL = "mailto:heartdata-support@biocommons.org.au";

/** ACDC Platform Terms of Use V1.1 — Drive-hosted PDF (footer). */
export const TERMS_OF_USE_URL =
  "https://drive.google.com/file/d/1lHG8TadHGjJbUSvWdwxczgDOtdHLSVfz/view";

/** ACDC Privacy Policy V1.1 — Drive-hosted PDF (footer). */
export const PRIVACY_POLICY_URL =
  "https://drive.google.com/file/d/15HQsPknjWPt11E3Bme9fZyXc9ZfLe29O/view";

/** Live harmonised data dictionary on the portal. */
export const DATA_DICTIONARY_URL = "https://commons.heartdata.baker.edu.au/DD";

/** In-app User Guide stub (platform-flow link + footer). */
export const USER_GUIDE_URL = `${base}guide.html`;

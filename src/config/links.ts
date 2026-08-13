// Canonical CTA model for the researcher access journey.
// Keep header and hero consistent by referencing these constants everywhere.
//
// Journey: Explore -> Understand -> Apply
//
//   Explore (nav + hero primary CTA)          -> DATA_COMMONS_URL        explore datasets
//   About (nav)                               -> about.html              what ACDC is
//   Login (header, blue button)               -> DATA_COMMONS_LOGIN_URL  returning users sign in
//   Apply (nav + About page banner)           -> APPLY_URL               how access works
//   Start your application (Apply page)       -> DATA_COMMONS_URL        apply via REMS
//   Contact / Contact the team (site-wide)    -> CONTACT_URL             email support
//   Terms of Use / Privacy Policy (footer)    -> TERMS_OF_USE_URL / PRIVACY_POLICY_URL
//   Data Harmonisation bar (platform)         -> DATA_DICTIONARY_URL     live data dictionary
//   User Guide (nav + footer)                 -> USER_GUIDE_URL          guide.html
//
// Distinct truthful destinations: portal root (explore), /login (sign in),
// about.html (learn), apply.html (access process).

const base = import.meta.env.BASE_URL;

/** Gen3 Data Commons portal — explore datasets and apply via REMS (hero primary CTA). */
export const DATA_COMMONS_URL = "https://commons.heartdata.baker.edu.au";

/** Returning approved researchers sign in to the portal (header Login). */
export const DATA_COMMONS_LOGIN_URL = "https://commons.heartdata.baker.edu.au/login";

/** Apply page — the data access process, plus contributing a cohort (nav + About banner). */
export const APPLY_URL = `${base}apply.html`;

/** ACDC support email (About page + footer). */
export const CONTACT_URL = "mailto:guerdon@biocommons.org.au";

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

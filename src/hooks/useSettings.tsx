import useSWR from 'swr';
import useSdk from './useSdk';
// import useSWRImmutable from 'swr/immutable';
// import useSdk from './useSdk';

/* [markdown]
 * Returns [settings entry](https://e.cachena.entrecode.de/stage/data/eb8f8709-25de-45a4-826d-8676b761fe70/model/187f5684-3b05-489e-b2e5-aeab138d1590/entry/27vq3_4228) as SWR request.
 */

function useSettings(options: any = { revalidateOnFocus: false, dedupingInterval: 30000 }) {
  const { api } = useSdk();
  return useSWR(api ? ['resource/settings', api?.shortID] : null, () => fetchSettings(api), options);
}

export async function fetchSettings(api) {
  const settingsList = await api.entryList('settings', { _count: 1, sort: ['_created'] });
  return settingsList.items[0];
}

export default useSettings;

/* 
export interface File {
  url: string;
  size: number;
  resolution: Resolution;
}

export interface Resolution {
  width: number;
  height: number;
}

export interface FileVariant {
  url: string;
  size: number;
  resolution: Resolution;
}

export interface Thumbnail {
  url: string;
  dimension: number;
}

export interface Thumbnail {
  url: string;
  dimension: number;
}

export interface DMAssetResource {
  assetID: string;
  caption: string;
  file: File;
  fileVariants: FileVariant[];
  mimetype: string;
  thumbnails: Thumbnail[];
  title: string;
  type: string;
}

export interface GoogleConversionID {
  membership: string;
}

export interface App {
  text: string;
  minor: string;
  super: string;
  highlight: string;
  background: string;
}

export interface FontFace {}

export interface TypeScale {
  p: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  'is-lead': number;
}

export interface TypeScaleBp {
  md: number;
  xs: number;
}

export interface Typo {
  fontFace: FontFace;
  typeScale: TypeScale;
  typeScaleBp: TypeScaleBp;
  baseFontSize: number;
}

export interface Style {
  app: App;
  typo: Typo;
  fonts: string[];
  linkColor: string;
  textColor: string;
  minorColor: string;
  superColor: string;
  highlightColor: string;
  backgroundColor: string;
}

export interface Homepage {
  _entryTitle: string;
  _id: string;
  _modelTitle: string;
  id: string;
}

export interface Header {
  _entryTitle: string;
  _id: string;
  _modelTitle: string;
  id: string;
}

export interface Footer {
  _entryTitle: string;
  _id: string;
  _modelTitle: string;
  id: string;
}

export interface ClubsMapping {}

export interface MainContract {
  price: number;
  title: string;
  features: any[];
  interval: string;
  footnotes: any[];
  sepaTerms: string;
  offerDescription: string;
}

export interface ContractConfig {}

export interface ContractMapping {}

export interface Config {
  options: any[];
  features: any[];
  headline: string;
  headlineCta: string;
  clubsMapping: ClubsMapping;
  mainContract: MainContract;
  internalTitle: string;
  contractConfig: ContractConfig;
  contractMapping: ContractMapping;
  headlineSelectedClub: string;
  headlineClubSelection: string;
}

export interface Default {
  config: Config;
}

export interface MembershipSetting {
  default: Default;
}

export interface Country {
  name: string;
  value: string;
}

export interface App {
  referralText: string;
  referralTitle: string;
}

export interface Seo {
  appTitle: string;
  appKeywords: string;
  registerTitle: string;
  appDescription: string;
  registerKeywords: string;
  registerDescription: string;
  membershipReferralFeatures: any[];
}

export interface DiscountValue {
  title: string;
  amountInCent: number;
}

export interface Discount {
  [key: string]: DiscountValue;
}

export interface Shp {
  url: string;
  shopID: string;
  discounts: Discount;
}

export interface Seca {
  addon: string[];
  roles: string[];
  default: string[];
  premium: string[];
  premiumBook: string;
  premiumHint: string;
  noValuesHint: string;
}

export interface Comeback {
  enabled: boolean;
  landingpage: string;
}

export interface Visibility {
  shp: boolean;
  abos: boolean;
  seca: boolean;
  sepa: boolean;
  addons: boolean;
  bistro: boolean;
  aboDebt: boolean;
  classes: boolean;
  profile: boolean;
  checkins: boolean;
  messages: boolean;
  referral: boolean;
  register: boolean;
  counseling: boolean;
  membership: boolean;
  voucherBuy: boolean;
  covidUpload: boolean;
  fitnessraum: boolean;
  liveClasses: boolean;
  appointments: boolean;
  bistroCharge: boolean;
  clickAndMeet: boolean;
}

export interface Global {
  mode: string;
  text: string;
  infoURL: string;
}

export interface NCQ$100000000 {
  mode: string;
}

export interface CovidUpload {
  global: Global;
  NCQ$100000000: NCQ$100000000;
}

export interface VisibilityApp {
  shp: boolean;
  abos: boolean;
  seca: boolean;
  sepa: boolean;
  addons: boolean;
  bistro: boolean;
  aboDebt: boolean;
  classes: boolean;
  profile: boolean;
  actinate: boolean;
  appAudio: boolean;
  checkins: boolean;
  messages: boolean;
  referral: boolean;
  register: boolean;
  checkinQR: boolean;
  counseling: boolean;
  membership: boolean;
  voucherBuy: boolean;
  covidUpload: boolean;
  fitnessraum: boolean;
  liveClasses: boolean;
  appointments: boolean;
  bistroCharge: boolean;
  checkinCount: boolean;
  clickAndMeet: boolean;
  knowledgeBase: boolean;
}

export interface ModuleSetting {
  app: App;
  seo: Seo;
  shp: Shp;
  seca: Seca;
  comeback: Comeback;
  visibility: Visibility;
  covidUpload: CovidUpload;
  visibilityApp: VisibilityApp;
}

export interface Activation {
  addonBookedSuccess: string;
}

export interface Text {
  activation: Activation;
}

export interface Width {}

export interface Page {
  width: Width;
}

export interface Scs {
  general: string;
}

export interface Footer {}

export interface Header {}

export interface Navbar {
  breakpoint: string;
}

export interface GoogleConversionID {
  membership: string;
}

export interface NCQ {
  googleAdsID: string;
  googleTagID: string;
  facebookMarketingID: string;
  googleConversionIDs: GoogleConversionID;
}

export interface Tracking {
  nCQ: NCQ;
}

export interface MembersArea {
  showCompany: boolean;
  editableCompany: boolean;
}

export interface ClickAndMeet {
  nCQ: string;
}

export interface Config {
  page: Page;
  scss: Scs;
  footer: Footer;
  header: Header;
  navbar: Navbar;
  tplType: string;
  tracking: Tracking;
  logoWidth?: any;
  logoHeight?: any;
  membersArea: MembersArea;
  clickAndMeet: ClickAndMeet;
  loginRedirect: string;
}

export interface Settings {
  _entryTitle: string;
  _id: string;
  _modelTitle: string;
  id: string;
  private: boolean;
  _created: string;
  created: string;
  _creator?: any;
  _modified: string;
  modified: string;
  _modelTitleField: string;
  title: string;
  logo: DMAssetResource;
  appLogo: DMAssetResource;
  favicon: DMAssetResource;
  keywords: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: any;
  enableCrawling: boolean;
  googleAnalyticsID: string;
  googleAnalyticsViewID?: any;
  googleAdsID: string;
  googleTagID: string;
  googleConversionIDs: GoogleConversionID;
  facebookMarketingID: string;
  facebookDomainVerification: string;
  styles: Style;
  yextID?: any;
  homepage: Homepage;
  header: Header;
  footer: Footer;
  centerfoldImages: any[];
  socialButtonsActive: boolean;
  youtubeUrl?: any;
  facebookUrl?: any;
  instagramUrl?: any;
  customButtonActive: boolean;
  customButtonImage?: any;
  customButtonTitle?: any;
  customButtonUrl?: any;
  enableChat: boolean;
  zendeskID?: any;
  usercentricsID: string;
  membershipSettings: MembershipSetting;
  showAppBanner: boolean;
  generateAppPage: boolean;
  iOSAppID?: any;
  androidAppID?: any;
  appsiteUrl: string;
  frontendUrl: string;
  countries: Country[];
  moduleSettings: ModuleSetting;
  text: Text;
  config: Config;
  mapsKey?: any;
  cancelAddons: boolean;
  disablePassword: boolean;
  useDeprecatedMembershipConfigForAppsite: boolean;
  subdomain: string;
  streamingArchive3qProjectID: string;
  liveClassesFromExternalAppsite?: any;
  streamingArchiveDefaultDays: number;
  disableStreamingArchive: boolean;
}
 */

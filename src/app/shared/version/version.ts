import {VERSION} from '@angular/material/typings';

/** This material version will be used in footer and stackblitz. */
export const materialVersion = VERSION.full;

/** Version information with title and redirect url */
export interface VersionInfo {
  url: string;
  title: string;
}

import { RemoteConfig } from '@angular-architects/module-federation';

export type CustomRemoteConfig = RemoteConfig & {
  exposedModule: string;
  displayName: string;
  routePath: string;
  exportName: string;
};

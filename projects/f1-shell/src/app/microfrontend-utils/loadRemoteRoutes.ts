import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { CustomRemoteConfig } from './remote-config.model';

export async function buildRemoteRoutes(
  options: CustomRemoteConfig[]
): Promise<Routes> {
  const guardModule = await import('login/LoginGuard');
  const lazyRoutes: Routes = options.map((o) => ({
    path: o.routePath,
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: o.remoteEntry!,
        exposedModule: o.exposedModule,
      }).then((m) => m[o.exportName]),
    canActivate: [guardModule.loginGuard],
  }));
  return [...lazyRoutes];
}

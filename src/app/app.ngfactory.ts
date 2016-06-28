/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from './app';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/di/injector';
import * as import5 from '@angular/core/src/linker/element';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
const styles_App:any[] = [];
var renderType_App:import0.RenderComponentType = null;
class _View_App0 extends import1.AppView<import2.App> {
  _text_0:any;
  constructor(viewUtils:import3.ViewUtils,parentInjector:import4.Injector,declarationEl:import5.AppElement) {
    super(_View_App0,renderType_App,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectionStrategy.CheckAlways);
  }
  createInternal(rootSelector:string):import5.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'hi',null);
    this.init([],[this._text_0],[],[]);
    return null;
  }
}
export function viewFactory_App0(viewUtils:import3.ViewUtils,parentInjector:import4.Injector,declarationEl:import5.AppElement):import1.AppView<import2.App> {
  if ((renderType_App === null)) { (renderType_App = viewUtils.createRenderComponentType('/Users/joshthomas/Workspace/tree-shake-ionic2/src/app/app.ts class App - inline template',0,import8.ViewEncapsulation.None,styles_App)); }
  return new _View_App0(viewUtils,parentInjector,declarationEl);
}
const styles_App_Host:any[] = [];
var renderType_App_Host:import0.RenderComponentType = null;
class _View_App_Host0 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import5.AppElement;
  _App_0_4:import2.App;
  constructor(viewUtils:import3.ViewUtils,parentInjector:import4.Injector,declarationEl:import5.AppElement) {
    super(_View_App_Host0,renderType_App_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectionStrategy.CheckAlways);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ion-app',rootSelector,null);
    this._appEl_0 = new import5.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_App0(this.viewUtils,this.injector(0),this._appEl_0);
    this._App_0_4 = new import2.App();
    this._appEl_0.initComponent(this._App_0_4,[],compView_0);
    compView_0.create(this._App_0_4,this.projectableNodes,null);
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import2.App) && (0 === requestNodeIndex))) { return this._App_0_4; }
    return notFoundResult;
  }
}
function viewFactory_App_Host0(viewUtils:import3.ViewUtils,parentInjector:import4.Injector,declarationEl:import5.AppElement):import1.AppView<any> {
  if ((renderType_App_Host === null)) { (renderType_App_Host = viewUtils.createRenderComponentType('',0,null,styles_App_Host)); }
  return new _View_App_Host0(viewUtils,parentInjector,declarationEl);
}
export const AppNgFactory:import9.ComponentFactory<import2.App> = new import9.ComponentFactory<import2.App>('ion-app',viewFactory_App_Host0,import2.App);
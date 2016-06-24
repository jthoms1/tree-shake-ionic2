/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from './about';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/template_ref';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from 'ionic-angular/components/nav/nav-controller';
import * as import11 from '@angular/core/src/linker/component_factory';
const styles_AboutPage:any[] = [];
var renderType_AboutPage:import0.RenderComponentType = null;
class _View_AboutPage0 extends import1.AppView<import2.AboutPage> {
  _text_0:any;
  _anchor_1:any;
  private _appEl_1:import3.AppElement;
  _TemplateRef_1_4:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AboutPage0,renderType_AboutPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectionStrategy.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n  ',null);
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,null);
    this._appEl_1 = new import3.AppElement(1,null,this,this._anchor_1);
    this._TemplateRef_1_4 = new import8.TemplateRef_(this._appEl_1,viewFactory_AboutPage1);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n\n  ',null);
    this._el_3 = this.renderer.createElement(parentRenderNode,'ion-content',null);
    this.renderer.setElementAttribute(this._el_3,'class','about');
    this.renderer.setElementAttribute(this._el_3,'padding','');
    this._text_4 = this.renderer.createText(this._el_3,'\n  ',null);
    this._text_5 = this.renderer.createText(parentRenderNode,'\n  ',null);
    this.init([],[
      this._text_0,
      this._anchor_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5
    ]
    ,[],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import8.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_4; }
    return notFoundResult;
  }
}
export function viewFactory_AboutPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import2.AboutPage> {
  if ((renderType_AboutPage === null)) { (renderType_AboutPage = viewUtils.createRenderComponentType('/Users/joshthomas/Workspace/tree-shake-ionic2/typescript-only-es2015-jsnext-ionic/src/app/pages/about/about.ts class AboutPage - inline template',0,import9.ViewEncapsulation.None,styles_AboutPage)); }
  return new _View_AboutPage0(viewUtils,parentInjector,declarationEl);
}
class _View_AboutPage1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AboutPage1,renderType_AboutPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectionStrategy.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement(null,'ion-navbar',null);
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',null);
    this._el_2 = this.renderer.createElement(this._el_0,'ion-title',null);
    this._text_3 = this.renderer.createText(this._el_2,'\n      About\n    ',null);
    this._text_4 = this.renderer.createText(this._el_0,'\n  ',null);
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[],[]);
    return null;
  }
}
function viewFactory_AboutPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_AboutPage1(viewUtils,parentInjector,declarationEl);
}
const styles_AboutPage_Host:any[] = [];
var renderType_AboutPage_Host:import0.RenderComponentType = null;
class _View_AboutPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import3.AppElement;
  _AboutPage_0_4:import2.AboutPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AboutPage_Host0,renderType_AboutPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectionStrategy.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('undefined',rootSelector,null);
    this._appEl_0 = new import3.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_AboutPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AboutPage_0_4 = new import2.AboutPage(this.parentInjector.get(import10.NavController));
    this._appEl_0.initComponent(this._AboutPage_0_4,[],compView_0);
    compView_0.create(this._AboutPage_0_4,this.projectableNodes,null);
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import2.AboutPage) && (0 === requestNodeIndex))) { return this._AboutPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_AboutPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_AboutPage_Host === null)) { (renderType_AboutPage_Host = viewUtils.createRenderComponentType('',0,null,styles_AboutPage_Host)); }
  return new _View_AboutPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const AboutPageNgFactory:import11.ComponentFactory<import2.AboutPage> = new import11.ComponentFactory<import2.AboutPage>(null,viewFactory_AboutPage_Host0,import2.AboutPage);
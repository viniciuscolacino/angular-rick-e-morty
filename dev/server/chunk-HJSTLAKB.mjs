import './polyfills.server.mjs';
import{s as Z}from"./chunk-I4XBTHV6.mjs";import{a as he,j as fe}from"./chunk-GNX7K4GQ.mjs";import{$b as ce,F as re,Jb as z,K as se,La as y,Q as w,Ra as u,S as B,T as H,U as m,Ub as ue,W as f,Xa as W,Y as V,aa as D,ab as b,ca as v,da as _,ec as q,i as te,ib as $,ic as Y,j as p,ja as oe,k as ne,lc as de,ma as ae,n as h,pa as L,ra as S,sa as N,t as M,tb as le,y as ie}from"./chunk-UFIA264M.mjs";import{a as d,b as g}from"./chunk-K7YHPIF3.mjs";var Ve=(()=>{let e=class e{constructor(n,i){this._renderer=n,this._elementRef=i,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,i){this._renderer.setProperty(this._elementRef.nativeElement,n,i)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(i){return new(i||e)(u(W),u(S))},e.\u0275dir=_({type:e});let t=e;return t})(),Ge=(()=>{let e=class e extends Ve{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=ae(e)))(s||e)}})(),e.\u0275dir=_({type:e,features:[b]});let t=e;return t})(),De=new f("");var Be={provide:De,useExisting:B(()=>be),multi:!0};function He(){let t=Y()?Y().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Le=new f(""),be=(()=>{let e=class e extends Ve{constructor(n,i,s){super(n,i),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!He())}writeValue(n){let i=n??"";this.setProperty("value",i)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(i){return new(i||e)(u(W),u(S),u(Le,8))},e.\u0275dir=_({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,s){i&1&&le("input",function(a){return s._handleInput(a.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(a){return s._compositionEnd(a.target.value)})},features:[z([Be]),b]});let t=e;return t})();var We=new f(""),$e=new f("");function Ie(t){return t!=null}function Ee(t){return ue(t)?te(t):t}function Ae(t){let e={};return t.forEach(r=>{e=r!=null?d(d({},e),r):e}),Object.keys(e).length===0?null:e}function Fe(t,e){return e.map(r=>r(t))}function ze(t){return!t.validate}function Me(t){return t.map(e=>ze(e)?e:r=>e.validate(r))}function qe(t){if(!t)return null;let e=t.filter(Ie);return e.length==0?null:function(r){return Ae(Fe(r,e))}}function we(t){return t!=null?qe(Me(t)):null}function Ye(t){if(!t)return null;let e=t.filter(Ie);return e.length==0?null:function(r){let n=Fe(r,e).map(Ee);return M(n).pipe(h(Ae))}}function Se(t){return t!=null?Ye(Me(t)):null}function ge(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ze(t){return t._rawValidators}function Ke(t){return t._rawAsyncValidators}function K(t){return t?Array.isArray(t)?t:[t]:[]}function x(t,e){return Array.isArray(t)?t.includes(e):t===e}function pe(t,e){let r=K(e);return K(t).forEach(i=>{x(r,i)||r.push(i)}),r}function me(t,e){return K(e).filter(r=>!x(t,r))}var P=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=we(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Se(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,r){return this.control?this.control.hasError(e,r):!1}getError(e,r){return this.control?this.control.getError(e,r):null}},X=class extends P{get formDirective(){return null}get path(){return null}},A=class extends P{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},J=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Xe={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Rt=g(d({},Xe),{"[class.ng-submitted]":"isSubmitted"}),jt=(()=>{let e=class e extends J{constructor(n){super(n)}};e.\u0275fac=function(i){return new(i||e)(u(A,2))},e.\u0275dir=_({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,s){i&2&&$("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[b]});let t=e;return t})();var I="VALID",O="INVALID",C="PENDING",E="DISABLED";function Je(t){return(T(t)?t.validators:t)||null}function Qe(t){return Array.isArray(t)?we(t):t||null}function et(t,e){return(T(e)?e.asyncValidators:t)||null}function tt(t){return Array.isArray(t)?Se(t):t||null}function T(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var Q=class{constructor(e,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===I}get invalid(){return this.status===O}get pending(){return this.status==C}get disabled(){return this.status===E}get enabled(){return this.status!==E}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(pe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(pe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(me(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(me(e,this._rawAsyncValidators))}hasValidator(e){return x(this._rawValidators,e)}hasAsyncValidator(e){return x(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=C,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=E,this.errors=null,this._forEachChild(n=>{n.disable(g(d({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(g(d({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(n=>{n.enable(g(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(g(d({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===C)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;let r=Ee(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,r={}){this.errors=e,this._updateControlsErrors(r.emitEvent!==!1)}get(e){let r=e;return r==null||(Array.isArray(r)||(r=r.split(".")),r.length===0)?null:r.reduce((n,i)=>n&&n._find(i),this)}getError(e,r){let n=r?this.get(r):this;return n&&n.errors?n.errors[e]:null}hasError(e,r){return!!this.getError(e,r)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?O:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(O)?O:I}_anyControlsHaveStatus(e){return this._anyControls(r=>r.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){T(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let r=this._parent&&this._parent.dirty;return!e&&!!r&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Qe(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=tt(this._rawAsyncValidators)}};var ee=new f("CallSetDisabledState",{providedIn:"root",factory:()=>k}),k="always";function nt(t,e){return[...e.path,t]}function it(t,e,r=k){st(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||r==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),ot(t,e),lt(t,e),at(t,e),rt(t,e)}function ve(t,e){t.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(e)})}function rt(t,e){if(e.valueAccessor.setDisabledState){let r=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(r),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(r)})}}function st(t,e){let r=Ze(t);e.validator!==null?t.setValidators(ge(r,e.validator)):typeof r=="function"&&t.setValidators([r]);let n=Ke(t);e.asyncValidator!==null?t.setAsyncValidators(ge(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let i=()=>t.updateValueAndValidity();ve(e._rawValidators,i),ve(e._rawAsyncValidators,i)}function ot(t,e){e.valueAccessor.registerOnChange(r=>{t._pendingValue=r,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ne(t,e)})}function at(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ne(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Ne(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function lt(t,e){let r=(n,i)=>{e.valueAccessor.writeValue(n),i&&e.viewToModelUpdate(n)};t.registerOnChange(r),e._registerOnDestroy(()=>{t._unregisterOnChange(r)})}function ut(t,e){if(!t.hasOwnProperty("model"))return!1;let r=t.model;return r.isFirstChange()?!0:!Object.is(e,r.currentValue)}function ct(t){return Object.getPrototypeOf(t.constructor)===Ge}function dt(t,e){if(!e)return null;Array.isArray(e);let r,n,i;return e.forEach(s=>{s.constructor===be?r=s:ct(s)?n=s:i=s}),i||n||r||null}function _e(t,e){let r=t.indexOf(e);r>-1&&t.splice(r,1)}function ye(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ht=class extends Q{constructor(e=null,r,n){super(Je(r),et(n,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),T(r)&&(r.nonNullable||r.initialValueIsDefault)&&(ye(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,r={}){this.value=this._pendingValue=e,this._onChange.length&&r.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,r.emitViewToModelChange!==!1)),this.updateValueAndValidity(r)}patchValue(e,r={}){this.setValue(e,r)}reset(e=this.defaultValue,r={}){this._applyFormState(e),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){_e(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){_e(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ye(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ft={provide:A,useExisting:B(()=>gt)},Ce=Promise.resolve(),gt=(()=>{let e=class e extends A{constructor(n,i,s,o,a,l){super(),this._changeDetectorRef=a,this.callSetDisabledState=l,this.control=new ht,this._registered=!1,this.name="",this.update=new N,this._parent=n,this._setValidators(i),this._setAsyncValidators(s),this.valueAccessor=dt(this,o)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let i=n.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),ut(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){it(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Ce.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let i=n.isDisabled.currentValue,s=i!==0&&q(i);Ce.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?nt(n,this._parent):[n]}};e.\u0275fac=function(i){return new(i||e)(u(X,9),u(We,10),u($e,10),u(De,10),u(ce,8),u(ee,8))},e.\u0275dir=_({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[D.None,"disabled","isDisabled"],model:[D.None,"ngModel","model"],options:[D.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[z([ft]),b,oe]});let t=e;return t})();var pt=new f("");var Oe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=m({});let t=e;return t})();var Gt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:ee,useValue:n.callSetDisabledState??k}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=m({imports:[Oe]});let t=e;return t})(),Bt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:pt,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:ee,useValue:n.callSetDisabledState??k}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=m({imports:[Oe]});let t=e;return t})();var R;function mt(){if(R===void 0&&(R=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(R=t.trustedTypes.createPolicy("angular#components",{createHTML:e=>e}))}return R}function F(t){return mt()?.createHTML(t)||t}function xe(t){return Error(`Unable to find icon with the name "${t}"`)}function vt(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}function Pe(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function Te(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var c=class{constructor(e,r,n){this.url=e,this.svgText=r,this.options=n}},vn=(()=>{let e=class e{constructor(n,i,s,o){this._httpClient=n,this._sanitizer=i,this._errorHandler=o,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=s}addSvgIcon(n,i,s){return this.addSvgIconInNamespace("",n,i,s)}addSvgIconLiteral(n,i,s){return this.addSvgIconLiteralInNamespace("",n,i,s)}addSvgIconInNamespace(n,i,s,o){return this._addSvgIconConfig(n,i,new c(s,null,o))}addSvgIconResolver(n){return this._resolvers.push(n),this}addSvgIconLiteralInNamespace(n,i,s,o){let a=this._sanitizer.sanitize(y.HTML,s);if(!a)throw Te(s);let l=F(a);return this._addSvgIconConfig(n,i,new c("",l,o))}addSvgIconSet(n,i){return this.addSvgIconSetInNamespace("",n,i)}addSvgIconSetLiteral(n,i){return this.addSvgIconSetLiteralInNamespace("",n,i)}addSvgIconSetInNamespace(n,i,s){return this._addSvgIconSetConfig(n,new c(i,null,s))}addSvgIconSetLiteralInNamespace(n,i,s){let o=this._sanitizer.sanitize(y.HTML,i);if(!o)throw Te(i);let a=F(o);return this._addSvgIconSetConfig(n,new c("",a,s))}registerFontClassAlias(n,i=n){return this._fontCssClassesByAlias.set(n,i),this}classNameForFontAlias(n){return this._fontCssClassesByAlias.get(n)||n}setDefaultFontSetClass(...n){return this._defaultFontSetClass=n,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(n){let i=this._sanitizer.sanitize(y.RESOURCE_URL,n);if(!i)throw Pe(n);let s=this._cachedIconsByUrl.get(i);return s?p(j(s)):this._loadSvgIconFromConfig(new c(n,null)).pipe(w(o=>this._cachedIconsByUrl.set(i,o)),h(o=>j(o)))}getNamedSvgIcon(n,i=""){let s=ke(i,n),o=this._svgIconConfigs.get(s);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,n),o)return this._svgIconConfigs.set(s,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(n,a):ne(xe(s))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(n){return n.svgText?p(j(this._svgElementFromConfig(n))):this._loadSvgIconFromConfig(n).pipe(h(i=>j(i)))}_getSvgFromIconSetConfigs(n,i){let s=this._extractIconWithNameFromAnySet(n,i);if(s)return p(s);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(ie(l=>{let G=`Loading icon set URL: ${this._sanitizer.sanitize(y.RESOURCE_URL,a.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(G)),p(null)})));return M(o).pipe(h(()=>{let a=this._extractIconWithNameFromAnySet(n,i);if(!a)throw xe(n);return a}))}_extractIconWithNameFromAnySet(n,i){for(let s=i.length-1;s>=0;s--){let o=i[s];if(o.svgText&&o.svgText.toString().indexOf(n)>-1){let a=this._svgElementFromConfig(o),l=this._extractSvgIconFromSet(a,n,o.options);if(l)return l}}return null}_loadSvgIconFromConfig(n){return this._fetchIcon(n).pipe(w(i=>n.svgText=i),h(()=>this._svgElementFromConfig(n)))}_loadSvgIconSetFromConfig(n){return n.svgText?p(null):this._fetchIcon(n).pipe(w(i=>n.svgText=i))}_extractSvgIconFromSet(n,i,s){let o=n.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,s);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),s);let l=this._svgElementFromString(F("<svg></svg>"));return l.appendChild(a),this._setSvgAttributes(l,s)}_svgElementFromString(n){let i=this._document.createElement("DIV");i.innerHTML=n;let s=i.querySelector("svg");if(!s)throw Error("<svg> tag not found");return s}_toSvgElement(n){let i=this._svgElementFromString(F("<svg></svg>")),s=n.attributes;for(let o=0;o<s.length;o++){let{name:a,value:l}=s[o];a!=="id"&&i.setAttribute(a,l)}for(let o=0;o<n.childNodes.length;o++)n.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(n.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(n,i){return n.setAttribute("fit",""),n.setAttribute("height","100%"),n.setAttribute("width","100%"),n.setAttribute("preserveAspectRatio","xMidYMid meet"),n.setAttribute("focusable","false"),i&&i.viewBox&&n.setAttribute("viewBox",i.viewBox),n}_fetchIcon(n){let{url:i,options:s}=n,o=s?.withCredentials??!1;if(!this._httpClient)throw vt();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(y.RESOURCE_URL,i);if(!a)throw Pe(i);let l=this._inProgressUrlFetches.get(a);if(l)return l;let U=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(h(G=>F(G)),re(()=>this._inProgressUrlFetches.delete(a)),se());return this._inProgressUrlFetches.set(a,U),U}_addSvgIconConfig(n,i,s){return this._svgIconConfigs.set(ke(n,i),s),this}_addSvgIconSetConfig(n,i){let s=this._iconSetConfigs.get(n);return s?s.push(i):this._iconSetConfigs.set(n,[i]),this}_svgElementFromConfig(n){if(!n.svgElement){let i=this._svgElementFromString(n.svgText);this._setSvgAttributes(i,n.options),n.svgElement=i}return n.svgElement}_getIconConfigFromResolvers(n,i){for(let s=0;s<this._resolvers.length;s++){let o=this._resolvers[s](i,n);if(o)return _t(o)?new c(o.url,null,o.options):new c(o,null)}}};e.\u0275fac=function(i){return new(i||e)(V(he,8),V(fe),V(de,8),V(L))},e.\u0275prov=H({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function j(t){return t.cloneNode(!0)}function ke(t,e){return t+":"+e}function _t(t){return!!(t.url&&t.options)}var _n=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=m({imports:[Z,Z]});let t=e;return t})();export{be as a,jt as b,gt as c,Gt as d,Bt as e,vn as f,_n as g};

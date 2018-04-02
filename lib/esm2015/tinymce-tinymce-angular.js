import { Output, EventEmitter, Component, Input, ElementRef, forwardRef, NgZone, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

class Events {
    constructor() {
        this.onBeforePaste = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onContextMenu = new EventEmitter();
        this.onCopy = new EventEmitter();
        this.onCut = new EventEmitter();
        this.onDblclick = new EventEmitter();
        this.onDrag = new EventEmitter();
        this.onDragDrop = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDragGesture = new EventEmitter();
        this.onDragOver = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onFocusIn = new EventEmitter();
        this.onFocusOut = new EventEmitter();
        this.onKeyDown = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onKeyUp = new EventEmitter();
        this.onMouseDown = new EventEmitter();
        this.onMouseEnter = new EventEmitter();
        this.onMouseLeave = new EventEmitter();
        this.onMouseMove = new EventEmitter();
        this.onMouseOut = new EventEmitter();
        this.onMouseOver = new EventEmitter();
        this.onMouseUp = new EventEmitter();
        this.onPaste = new EventEmitter();
        this.onSelectionChange = new EventEmitter();
        this.onActivate = new EventEmitter();
        this.onAddUndo = new EventEmitter();
        this.onBeforeAddUndo = new EventEmitter();
        this.onBeforeExecCommand = new EventEmitter();
        this.onBeforeGetContent = new EventEmitter();
        this.onBeforeRenderUI = new EventEmitter();
        this.onBeforeSetContent = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onClearUndos = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.onDirty = new EventEmitter();
        this.onExecCommand = new EventEmitter();
        this.onGetContent = new EventEmitter();
        this.onHide = new EventEmitter();
        this.onInit = new EventEmitter();
        this.onLoadContent = new EventEmitter();
        this.onNodeChange = new EventEmitter();
        this.onPostProcess = new EventEmitter();
        this.onPostRender = new EventEmitter();
        this.onPreInit = new EventEmitter();
        this.onPreProcess = new EventEmitter();
        this.onProgressState = new EventEmitter();
        this.onRedo = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onReset = new EventEmitter();
        this.onSaveContent = new EventEmitter();
        this.onSetAttrib = new EventEmitter();
        this.onObjectResizeStart = new EventEmitter();
        this.onObjectResized = new EventEmitter();
        this.onObjectSelected = new EventEmitter();
        this.onSetContent = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onSubmit = new EventEmitter();
        this.onUndo = new EventEmitter();
        this.onVisualAid = new EventEmitter();
    }
}
Events.propDecorators = {
    "onBeforePaste": [{ type: Output },],
    "onBlur": [{ type: Output },],
    "onClick": [{ type: Output },],
    "onContextMenu": [{ type: Output },],
    "onCopy": [{ type: Output },],
    "onCut": [{ type: Output },],
    "onDblclick": [{ type: Output },],
    "onDrag": [{ type: Output },],
    "onDragDrop": [{ type: Output },],
    "onDragEnd": [{ type: Output },],
    "onDragGesture": [{ type: Output },],
    "onDragOver": [{ type: Output },],
    "onDrop": [{ type: Output },],
    "onFocus": [{ type: Output },],
    "onFocusIn": [{ type: Output },],
    "onFocusOut": [{ type: Output },],
    "onKeyDown": [{ type: Output },],
    "onKeyPress": [{ type: Output },],
    "onKeyUp": [{ type: Output },],
    "onMouseDown": [{ type: Output },],
    "onMouseEnter": [{ type: Output },],
    "onMouseLeave": [{ type: Output },],
    "onMouseMove": [{ type: Output },],
    "onMouseOut": [{ type: Output },],
    "onMouseOver": [{ type: Output },],
    "onMouseUp": [{ type: Output },],
    "onPaste": [{ type: Output },],
    "onSelectionChange": [{ type: Output },],
    "onActivate": [{ type: Output },],
    "onAddUndo": [{ type: Output },],
    "onBeforeAddUndo": [{ type: Output },],
    "onBeforeExecCommand": [{ type: Output },],
    "onBeforeGetContent": [{ type: Output },],
    "onBeforeRenderUI": [{ type: Output },],
    "onBeforeSetContent": [{ type: Output },],
    "onChange": [{ type: Output },],
    "onClearUndos": [{ type: Output },],
    "onDeactivate": [{ type: Output },],
    "onDirty": [{ type: Output },],
    "onExecCommand": [{ type: Output },],
    "onGetContent": [{ type: Output },],
    "onHide": [{ type: Output },],
    "onInit": [{ type: Output },],
    "onLoadContent": [{ type: Output },],
    "onNodeChange": [{ type: Output },],
    "onPostProcess": [{ type: Output },],
    "onPostRender": [{ type: Output },],
    "onPreInit": [{ type: Output },],
    "onPreProcess": [{ type: Output },],
    "onProgressState": [{ type: Output },],
    "onRedo": [{ type: Output },],
    "onRemove": [{ type: Output },],
    "onReset": [{ type: Output },],
    "onSaveContent": [{ type: Output },],
    "onSetAttrib": [{ type: Output },],
    "onObjectResizeStart": [{ type: Output },],
    "onObjectResized": [{ type: Output },],
    "onObjectSelected": [{ type: Output },],
    "onSetContent": [{ type: Output },],
    "onShow": [{ type: Output },],
    "onSubmit": [{ type: Output },],
    "onUndo": [{ type: Output },],
    "onVisualAid": [{ type: Output },],
};
const validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreInit',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
const bindHandlers = (ctx, editor) => {
    validEvents.forEach((eventName) => {
        const /** @type {?} */ eventEmitter = ctx[eventName];
        if (eventEmitter.observers.length > 0) {
            editor.on(eventName.substring(2), ctx.ngZone.run(() => (event) => eventEmitter.emit({ event, editor })));
        }
    });
};
let unique = 0;
const uuid = (prefix) => {
    const /** @type {?} */ date = new Date();
    const /** @type {?} */ time = date.getTime();
    const /** @type {?} */ random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
const isTextarea = (element) => {
    return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
};
const normalizePluginArray = (plugins) => {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
const mergePlugins = (initPlugins, inputPlugins) => normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 * @record
 */

const injectScriptTag = (scriptId, doc, url, callback) => {
    const /** @type {?} */ scriptTag = doc.createElement('script');
    scriptTag.type = 'application/javascript';
    scriptTag.id = scriptId;
    scriptTag.addEventListener('load', callback);
    scriptTag.src = url;
    doc.head.appendChild(scriptTag);
};
const create = () => {
    return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
    };
};
const load = (state, doc, url, callback) => {
    if (state.scriptLoaded) {
        callback();
    }
    else {
        state.listeners.push(callback);
        if (!doc.getElementById(state.scriptId)) {
            injectScriptTag(state.scriptId, doc, url, () => {
                state.listeners.forEach((fn) => fn());
                state.scriptLoaded = true;
            });
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
const getGlobal = () => (typeof window !== 'undefined' ? window : global);
const getTinymce = () => {
    global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const scriptState = create();
const EDITOR_COMPONENT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EditorComponent),
    multi: true
};
class EditorComponent extends Events {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     */
    constructor(elementRef, ngZone) {
        super();
        this.element = undefined;
        this.id = '';
        this.toolbar = null;
        this.onTouchedCallback = () => { };
        this.onChangeCallback = (x) => { };
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.initialise = this.initialise.bind(this);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.initialValue = value || this.initialValue;
        if (this.editor && this.editor.initialized && typeof value === 'string') {
            this.editor.setContent(value);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (this.editor) {
            this.editor.setMode(isDisabled ? 'readonly' : 'design');
        }
        else if (isDisabled) {
            this.init = Object.assign({}, this.init, { readonly: true });
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.id = this.id || uuid('tiny-react');
        this.inline = typeof this.inline !== 'undefined' ? this.inline : this.init && this.init["inline"];
        this.createElement();
        if (getTinymce() !== null) {
            this.initialise();
        }
        else if (this.element) {
            const /** @type {?} */ doc = this.element.ownerDocument;
            const /** @type {?} */ channel = this.cloudChannel || 'stable';
            const /** @type {?} */ apiKey = this.apiKey || '';
            load(scriptState, doc, `https://cloud.tinymce.com/${channel}/tinymce.min.js?apiKey=${apiKey}`, this.initialise);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        getTinymce().remove(this.editor);
    }
    /**
     * @return {?}
     */
    createElement() {
        const /** @type {?} */ tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
        this.element = document.createElement(this.inline ? tagName : 'textarea');
        if (this.element) {
            this.element.id = this.id;
            if (isTextarea(this.element)) {
                this.element.style.visibility = 'hidden';
            }
            this.elementRef.nativeElement.appendChild(this.element);
        }
    }
    /**
     * @return {?}
     */
    initialise() {
        const /** @type {?} */ finalInit = Object.assign({}, this.init, { selector: `#${this.id}`, inline: this.inline, plugins: mergePlugins(this.init && this.init["plugins"], this.plugins), toolbar: this.toolbar || (this.init && this.init["toolbar"]), setup: (editor) => {
                this.editor = editor;
                editor.on('init', () => {
                    this.initEditor(editor);
                });
                if (this.init && typeof this.init["setup"] === 'function') {
                    this.init["setup"](editor);
                }
            } });
        if (isTextarea(this.element)) {
            this.element.style.visibility = '';
        }
        this.ngZone.runOutsideAngular(() => {
            getTinymce().init(finalInit);
        });
    }
    /**
     * @param {?} editor
     * @return {?}
     */
    initEditor(editor) {
        if (typeof this.initialValue === 'string') {
            this.ngZone.run(() => editor.setContent(this.initialValue));
        }
        editor.once('blur', () => this.ngZone.run(() => this.onTouchedCallback()));
        editor.on('setcontent', ({ content, format }) => format === 'html' && content && this.ngZone.run(() => this.onChangeCallback(content)));
        editor.on('change keyup', () => this.ngZone.run(() => this.onChangeCallback(editor.getContent())));
        bindHandlers(this, editor);
    }
}
EditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'editor',
                template: '<ng-template></ng-template>',
                styles: [':host { display: block; }'],
                providers: [EDITOR_COMPONENT_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
EditorComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: NgZone, },
];
EditorComponent.propDecorators = {
    "cloudChannel": [{ type: Input },],
    "apiKey": [{ type: Input },],
    "init": [{ type: Input },],
    "id": [{ type: Input },],
    "initialValue": [{ type: Input },],
    "inline": [{ type: Input },],
    "tagName": [{ type: Input },],
    "plugins": [{ type: Input },],
    "toolbar": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EditorModule {
}
EditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [EditorComponent],
                exports: [EditorComponent]
            },] },
];
/** @nocollapse */
EditorModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { EditorModule, Events as ɵb, EditorComponent as ɵa };
//# sourceMappingURL=tinymce-tinymce-angular.js.map

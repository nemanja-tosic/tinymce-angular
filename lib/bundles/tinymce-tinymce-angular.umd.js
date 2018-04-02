(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
	(factory((global.tinymce = global.tinymce || {}, global.tinymce['tinymce-angular'] = {}),global.ng.core,global.ng.forms,global.ng.common));
}(this, (function (exports,core,forms,common) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var Events = (function () {
    function Events() {
        this.onBeforePaste = new core.EventEmitter();
        this.onBlur = new core.EventEmitter();
        this.onClick = new core.EventEmitter();
        this.onContextMenu = new core.EventEmitter();
        this.onCopy = new core.EventEmitter();
        this.onCut = new core.EventEmitter();
        this.onDblclick = new core.EventEmitter();
        this.onDrag = new core.EventEmitter();
        this.onDragDrop = new core.EventEmitter();
        this.onDragEnd = new core.EventEmitter();
        this.onDragGesture = new core.EventEmitter();
        this.onDragOver = new core.EventEmitter();
        this.onDrop = new core.EventEmitter();
        this.onFocus = new core.EventEmitter();
        this.onFocusIn = new core.EventEmitter();
        this.onFocusOut = new core.EventEmitter();
        this.onKeyDown = new core.EventEmitter();
        this.onKeyPress = new core.EventEmitter();
        this.onKeyUp = new core.EventEmitter();
        this.onMouseDown = new core.EventEmitter();
        this.onMouseEnter = new core.EventEmitter();
        this.onMouseLeave = new core.EventEmitter();
        this.onMouseMove = new core.EventEmitter();
        this.onMouseOut = new core.EventEmitter();
        this.onMouseOver = new core.EventEmitter();
        this.onMouseUp = new core.EventEmitter();
        this.onPaste = new core.EventEmitter();
        this.onSelectionChange = new core.EventEmitter();
        this.onActivate = new core.EventEmitter();
        this.onAddUndo = new core.EventEmitter();
        this.onBeforeAddUndo = new core.EventEmitter();
        this.onBeforeExecCommand = new core.EventEmitter();
        this.onBeforeGetContent = new core.EventEmitter();
        this.onBeforeRenderUI = new core.EventEmitter();
        this.onBeforeSetContent = new core.EventEmitter();
        this.onChange = new core.EventEmitter();
        this.onClearUndos = new core.EventEmitter();
        this.onDeactivate = new core.EventEmitter();
        this.onDirty = new core.EventEmitter();
        this.onExecCommand = new core.EventEmitter();
        this.onGetContent = new core.EventEmitter();
        this.onHide = new core.EventEmitter();
        this.onInit = new core.EventEmitter();
        this.onLoadContent = new core.EventEmitter();
        this.onNodeChange = new core.EventEmitter();
        this.onPostProcess = new core.EventEmitter();
        this.onPostRender = new core.EventEmitter();
        this.onPreInit = new core.EventEmitter();
        this.onPreProcess = new core.EventEmitter();
        this.onProgressState = new core.EventEmitter();
        this.onRedo = new core.EventEmitter();
        this.onRemove = new core.EventEmitter();
        this.onReset = new core.EventEmitter();
        this.onSaveContent = new core.EventEmitter();
        this.onSetAttrib = new core.EventEmitter();
        this.onObjectResizeStart = new core.EventEmitter();
        this.onObjectResized = new core.EventEmitter();
        this.onObjectSelected = new core.EventEmitter();
        this.onSetContent = new core.EventEmitter();
        this.onShow = new core.EventEmitter();
        this.onSubmit = new core.EventEmitter();
        this.onUndo = new core.EventEmitter();
        this.onVisualAid = new core.EventEmitter();
    }
    return Events;
}());
Events.propDecorators = {
    "onBeforePaste": [{ type: core.Output },],
    "onBlur": [{ type: core.Output },],
    "onClick": [{ type: core.Output },],
    "onContextMenu": [{ type: core.Output },],
    "onCopy": [{ type: core.Output },],
    "onCut": [{ type: core.Output },],
    "onDblclick": [{ type: core.Output },],
    "onDrag": [{ type: core.Output },],
    "onDragDrop": [{ type: core.Output },],
    "onDragEnd": [{ type: core.Output },],
    "onDragGesture": [{ type: core.Output },],
    "onDragOver": [{ type: core.Output },],
    "onDrop": [{ type: core.Output },],
    "onFocus": [{ type: core.Output },],
    "onFocusIn": [{ type: core.Output },],
    "onFocusOut": [{ type: core.Output },],
    "onKeyDown": [{ type: core.Output },],
    "onKeyPress": [{ type: core.Output },],
    "onKeyUp": [{ type: core.Output },],
    "onMouseDown": [{ type: core.Output },],
    "onMouseEnter": [{ type: core.Output },],
    "onMouseLeave": [{ type: core.Output },],
    "onMouseMove": [{ type: core.Output },],
    "onMouseOut": [{ type: core.Output },],
    "onMouseOver": [{ type: core.Output },],
    "onMouseUp": [{ type: core.Output },],
    "onPaste": [{ type: core.Output },],
    "onSelectionChange": [{ type: core.Output },],
    "onActivate": [{ type: core.Output },],
    "onAddUndo": [{ type: core.Output },],
    "onBeforeAddUndo": [{ type: core.Output },],
    "onBeforeExecCommand": [{ type: core.Output },],
    "onBeforeGetContent": [{ type: core.Output },],
    "onBeforeRenderUI": [{ type: core.Output },],
    "onBeforeSetContent": [{ type: core.Output },],
    "onChange": [{ type: core.Output },],
    "onClearUndos": [{ type: core.Output },],
    "onDeactivate": [{ type: core.Output },],
    "onDirty": [{ type: core.Output },],
    "onExecCommand": [{ type: core.Output },],
    "onGetContent": [{ type: core.Output },],
    "onHide": [{ type: core.Output },],
    "onInit": [{ type: core.Output },],
    "onLoadContent": [{ type: core.Output },],
    "onNodeChange": [{ type: core.Output },],
    "onPostProcess": [{ type: core.Output },],
    "onPostRender": [{ type: core.Output },],
    "onPreInit": [{ type: core.Output },],
    "onPreProcess": [{ type: core.Output },],
    "onProgressState": [{ type: core.Output },],
    "onRedo": [{ type: core.Output },],
    "onRemove": [{ type: core.Output },],
    "onReset": [{ type: core.Output },],
    "onSaveContent": [{ type: core.Output },],
    "onSetAttrib": [{ type: core.Output },],
    "onObjectResizeStart": [{ type: core.Output },],
    "onObjectResized": [{ type: core.Output },],
    "onObjectSelected": [{ type: core.Output },],
    "onSetContent": [{ type: core.Output },],
    "onShow": [{ type: core.Output },],
    "onSubmit": [{ type: core.Output },],
    "onUndo": [{ type: core.Output },],
    "onVisualAid": [{ type: core.Output },],
};
var validEvents = [
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
var bindHandlers = function (ctx, editor) {
    validEvents.forEach(function (eventName) {
        var /** @type {?} */ eventEmitter = ctx[eventName];
        if (eventEmitter.observers.length > 0) {
            editor.on(eventName.substring(2), ctx.ngZone.run(function () { return function (event) { return eventEmitter.emit({ event: event, editor: editor }); }; }));
        }
    });
};
var unique = 0;
var uuid = function (prefix) {
    var /** @type {?} */ date = new Date();
    var /** @type {?} */ time = date.getTime();
    var /** @type {?} */ random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) { return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins)); };
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
var injectScriptTag = function (scriptId, doc, url, callback) {
    var /** @type {?} */ scriptTag = doc.createElement('script');
    scriptTag.type = 'application/javascript';
    scriptTag.id = scriptId;
    scriptTag.addEventListener('load', callback);
    scriptTag.src = url;
    doc.head.appendChild(scriptTag);
};
var create = function () {
    return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
    };
};
var load = function (state, doc, url, callback) {
    if (state.scriptLoaded) {
        callback();
    }
    else {
        state.listeners.push(callback);
        if (!doc.getElementById(state.scriptId)) {
            injectScriptTag(state.scriptId, doc, url, function () {
                state.listeners.forEach(function (fn) { return fn(); });
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
var getGlobal = function () { return (typeof window !== 'undefined' ? window : global); };
var getTinymce = function () {
    global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var scriptState = create();
var EDITOR_COMPONENT_VALUE_ACCESSOR = {
    provide: forms.NG_VALUE_ACCESSOR,
    useExisting: core.forwardRef(function () { return EditorComponent; }),
    multi: true
};
var EditorComponent = (function (_super) {
    __extends(EditorComponent, _super);
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     */
    function EditorComponent(elementRef, ngZone) {
        var _this = _super.call(this) || this;
        _this.element = undefined;
        _this.id = '';
        _this.toolbar = null;
        _this.onTouchedCallback = function () { };
        _this.onChangeCallback = function (x) { };
        _this.elementRef = elementRef;
        _this.ngZone = ngZone;
        _this.initialise = _this.initialise.bind(_this);
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    EditorComponent.prototype.writeValue = function (value) {
        this.initialValue = value || this.initialValue;
        if (this.editor && this.editor.initialized && typeof value === 'string') {
            this.editor.setContent(value);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EditorComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    EditorComponent.prototype.setDisabledState = function (isDisabled) {
        if (this.editor) {
            this.editor.setMode(isDisabled ? 'readonly' : 'design');
        }
        else if (isDisabled) {
            this.init = Object.assign({}, this.init, { readonly: true });
        }
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.ngAfterViewInit = function () {
        this.id = this.id || uuid('tiny-react');
        this.inline = typeof this.inline !== 'undefined' ? this.inline : this.init && this.init["inline"];
        this.createElement();
        if (getTinymce() !== null) {
            this.initialise();
        }
        else if (this.element) {
            var /** @type {?} */ doc = this.element.ownerDocument;
            var /** @type {?} */ channel = this.cloudChannel || 'stable';
            var /** @type {?} */ apiKey = this.apiKey || '';
            load(scriptState, doc, "https://cloud.tinymce.com/" + channel + "/tinymce.min.js?apiKey=" + apiKey, this.initialise);
        }
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.ngOnDestroy = function () {
        getTinymce().remove(this.editor);
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.createElement = function () {
        var /** @type {?} */ tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
        this.element = document.createElement(this.inline ? tagName : 'textarea');
        if (this.element) {
            this.element.id = this.id;
            if (isTextarea(this.element)) {
                this.element.style.visibility = 'hidden';
            }
            this.elementRef.nativeElement.appendChild(this.element);
        }
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.initialise = function () {
        var _this = this;
        var /** @type {?} */ finalInit = Object.assign({}, this.init, { selector: "#" + this.id, inline: this.inline, plugins: mergePlugins(this.init && this.init["plugins"], this.plugins), toolbar: this.toolbar || (this.init && this.init["toolbar"]), setup: function (editor) {
                _this.editor = editor;
                editor.on('init', function () {
                    _this.initEditor(editor);
                });
                if (_this.init && typeof _this.init["setup"] === 'function') {
                    _this.init["setup"](editor);
                }
            } });
        if (isTextarea(this.element)) {
            this.element.style.visibility = '';
        }
        this.ngZone.runOutsideAngular(function () {
            getTinymce().init(finalInit);
        });
    };
    /**
     * @param {?} editor
     * @return {?}
     */
    EditorComponent.prototype.initEditor = function (editor) {
        var _this = this;
        if (typeof this.initialValue === 'string') {
            this.ngZone.run(function () { return editor.setContent(_this.initialValue); });
        }
        editor.once('blur', function () { return _this.ngZone.run(function () { return _this.onTouchedCallback(); }); });
        editor.on('setcontent', function (_a) {
            var content = _a.content, format = _a.format;
            return format === 'html' && content && _this.ngZone.run(function () { return _this.onChangeCallback(content); });
        });
        editor.on('change keyup', function () { return _this.ngZone.run(function () { return _this.onChangeCallback(editor.getContent()); }); });
        bindHandlers(this, editor);
    };
    return EditorComponent;
}(Events));
EditorComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'editor',
                template: '<ng-template></ng-template>',
                styles: [':host { display: block; }'],
                providers: [EDITOR_COMPONENT_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
EditorComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.NgZone, },
]; };
EditorComponent.propDecorators = {
    "cloudChannel": [{ type: core.Input },],
    "apiKey": [{ type: core.Input },],
    "init": [{ type: core.Input },],
    "id": [{ type: core.Input },],
    "initialValue": [{ type: core.Input },],
    "inline": [{ type: core.Input },],
    "tagName": [{ type: core.Input },],
    "plugins": [{ type: core.Input },],
    "toolbar": [{ type: core.Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditorModule = (function () {
    function EditorModule() {
    }
    return EditorModule;
}());
EditorModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, forms.FormsModule],
                declarations: [EditorComponent],
                exports: [EditorComponent]
            },] },
];
/** @nocollapse */
EditorModule.ctorParameters = function () { return []; };

exports.EditorModule = EditorModule;
exports.ɵb = Events;
exports.ɵa = EditorComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tinymce-tinymce-angular.umd.js.map

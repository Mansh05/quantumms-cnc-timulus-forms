"use strict";var rxjs=require("rxjs");function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ownKeys(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function _objectSpread2(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(r),!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _createSuper(r){var n=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(r);return _possibleConstructorReturn(this,n?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}var validateForm=function(e,t){t.errors={};var r=!0;return e.forEach(function(e){e=e(t);e&&(t.errors=_objectSpread2(_objectSpread2({},t.errors),e),r=!1)}),r},AbstractResource=function(){function e(){var t=this;_classCallCheck(this,e),_defineProperty(this,"_value",void 0),_defineProperty(this,"_errors",void 0),_defineProperty(this,"_childrenValidity",{}),_defineProperty(this,"name",void 0),_defineProperty(this,"valid",!1),_defineProperty(this,"touched",!1),_defineProperty(this,"validators",[]),_defineProperty(this,"valueChanges",new rxjs.Subject),_defineProperty(this,"statusChanges",new rxjs.Subject),_defineProperty(this,"options",{change:function(e){t.onChange(e)},keyup:function(){t.onChange(event)},blur:function(e){return t.onTouch(e)}})}return _createClass(e,[{key:"onChange",value:function(e){e&&e.currentTarget&&(this.setValue(e.currentTarget.value),this.changeStatus())}},{key:"setValue",value:function(e){this._value=e,this.updateValidators(),this.valueChanges.next(e)}},{key:"changeStatus",value:function(){this.statusChanges.next(!0),this._parent&&this._parent.onTouch({})}},{key:"touchChildren",value:function(){Object.values(this.controls).forEach(function(e){e.onTouch()})}},{key:"addValidator",value:function(e){e instanceof Array?this.validators=this.validators.concat(e):this.validators.push(e)}},{key:"updateValidators",value:function(e){e=!(0<arguments.length&&void 0!==e)||e;this.valid=e&&validateForm(this.validators,this),this._parent&&(this._parent._childrenValidity[this.name]=this.valid,this._parent.updateValidators(!this.checkParentsValidations()))}},{key:"checkParentsValidations",value:function(){return Object.values(this._parent._childrenValidity).some(function(e){return!e})}},{key:"onTouch",value:function(e,t){t=!(1<arguments.length&&void 0!==t)||t;this.touched=t,this.changeStatus()}},{key:"setOnlyValues",value:function(e){this._value=e,this.updateParent()}},{key:"patchValue",value:function(e,t){this._value[t]=e,this.updateParent(),this.valueChanges.next(this._value),this.statusChanges.next(!1)}},{key:"updateParent",value:function(){this._parent?this._parent.patchValue(this.value,this.name):this.statusChanges.next(!0)}},{key:"get",value:function(e){return this.controls[e]}},{key:"value",get:function(){return this._value}},{key:"errors",set:function(e){this._errors=e},get:function(){return this._errors}},{key:"parent",set:function(e){this._parent=e}}]),e}(),ControlResource=function(){_inherits(i,AbstractResource);var o=_createSuper(i);function i(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=2<arguments.length?arguments[2]:void 0;return _classCallCheck(this,i),_defineProperty(_assertThisInitialized(e=o.call(this)),"_parent",void 0),e._parent=r,e.name=n,e.setOnlyValues(t),e}return _createClass(i,[{key:"setValue",value:function(e){this.setOnlyValues(e),this.updateValidators(),this.valueChanges.next(e)}}]),i}(),GroupResource=function(){_inherits(i,AbstractResource);var o=_createSuper(i);function i(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=2<arguments.length?arguments[2]:void 0;return _classCallCheck(this,i),_defineProperty(_assertThisInitialized(e=o.call(this)),"_parent",void 0),_defineProperty(_assertThisInitialized(e),"controls",{}),e._parent=r,e.name=n,e.setOnlyValues(t),e}return _createClass(i,[{key:"setControl",value:function(e,t,r){return this.controls[e]=new t(r,this,e),this.controls[e]}}]),i}(),ArrayResource=function(){_inherits(i,AbstractResource);var o=_createSuper(i);function i(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],r=1<arguments.length?arguments[1]:void 0,n=2<arguments.length?arguments[2]:void 0;return _classCallCheck(this,i),_defineProperty(_assertThisInitialized(e=o.call(this)),"_parent",void 0),_defineProperty(_assertThisInitialized(e),"length",0),_defineProperty(_assertThisInitialized(e),"controls",{}),e._parent=r,e.name=n,e.setOnlyValues(t),e}return _createClass(i,[{key:"setControl",value:function(e,t){return this.updateLength(new t(e,this,this.length.toString())),this.controls[(this.length-1).toString()]}},{key:"updateLength",value:function(e){this.controls[this.length.toString()]=e,this.length++}},{key:"push",value:function(e){this.updatePushedData(e),e.updateParent()}},{key:"concat",value:function(e){var t=this;e.forEach(function(e){t.updatePushedData(e),e.updateParent()})}},{key:"updatePushedData",value:function(e){e.name=this.length.toString(),(e.parent=this).updateLength(e)}},{key:"removeAt",value:function(e){delete this.controls[e],this.length--,this.value.splice(e,1),this.updateParent()}},{key:"array_controls",get:function(){return Object.values(this.controls)}}]),i}(),requiredValidator=function(e){return e.value&&""!==e.value||!1===e.value?null:{required:!0}},patternValidator=function(t,e){var r=1<arguments.length&&void 0!==e?e:"pattern";return function(e){return t.test(e.value)?null:_defineProperty({},r,!0)}},QuantumValidators={required:requiredValidator,pattern:patternValidator},FormBuilder=function(){function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"root";return _classCallCheck(this,r),_defineProperty(this,"group",new GroupResource),_defineProperty(this,"current_object",{}),this.build_object(e,this.group,t),this.updateAllValidators(this.group.controls),this.group}return _createClass(r,[{key:"updateAllValidators",value:function(t){var r=this;Object.keys(t).forEach(function(e){t[e]instanceof GroupResource?r.updateAllValidators(t[e].controls):t[e].updateValidators()})}},{key:"build_object",value:function(r,n){var o=this;this.current_object=r,Object.keys(r).forEach(function(e){var t;"validators_reference"!==e&&(r[e]instanceof Array?(t=n.setControl(e,ArrayResource),o.build_array(r[e],t)):r[e]instanceof Object?(t=n.setControl(e,GroupResource),o.addValidators(t,e),o.build_object(r[e],t)):o.build_control(e,n,r[e]))})}},{key:"build_array",value:function(r,n){var o=this;r.forEach(function(e){var t;r[e]instanceof Array?(t=n.setControl(void 0,ArrayResource),o.build_array(e,t)):e instanceof Object?(t=n.setControl(void 0,GroupResource),o.addValidators(t,e),o.build_object(e,t)):o.build_control(e,n,e)})}},{key:"build_control",value:function(e,t,r){r=t.setControl(e,ControlResource,r);this.addValidators(r,e)}},{key:"addValidators",value:function(e,t){if(this.current_object.validators_reference){var r=this.current_object.validators_reference;return r.neglect&&("all"===r.neglect||r.neglect[t])||e.addValidator(QuantumValidators.required),r[t]&&e.addValidator(r[t]),!0}}}]),r}(),index={FormBuilder:FormBuilder,ArrayResource:ArrayResource,ControlResource:ControlResource,GroupResource:GroupResource,AbstractResource:AbstractResource,QuantumValidators:QuantumValidators};module.exports=index;

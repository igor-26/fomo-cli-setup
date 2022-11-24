'use strict'

function _typeof(obj) {
	'@babel/helpers - typeof'
	return (
		(_typeof =
			'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
				? function (obj) {
						return typeof obj
				  }
				: function (obj) {
						return obj &&
							'function' == typeof Symbol &&
							obj.constructor === Symbol &&
							obj !== Symbol.prototype
							? 'symbol'
							: typeof obj
				  }),
		_typeof(obj)
	)
}
Object.defineProperty(exports, '__esModule', {
	value: true,
})
exports['default'] = void 0
var _react = _interopRequireWildcard(require('react'))
function _getRequireWildcardCache(nodeInterop) {
	if (typeof WeakMap !== 'function') return null
	var cacheBabelInterop = new WeakMap()
	var cacheNodeInterop = new WeakMap()
	return (_getRequireWildcardCache = function _getRequireWildcardCache(
		nodeInterop
	) {
		return nodeInterop ? cacheNodeInterop : cacheBabelInterop
	})(nodeInterop)
}
function _interopRequireWildcard(obj, nodeInterop) {
	if (!nodeInterop && obj && obj.__esModule) {
		return obj
	}
	if (
		obj === null ||
		(_typeof(obj) !== 'object' && typeof obj !== 'function')
	) {
		return { default: obj }
	}
	var cache = _getRequireWildcardCache(nodeInterop)
	if (cache && cache.has(obj)) {
		return cache.get(obj)
	}
	var newObj = {}
	var hasPropertyDescriptor =
		Object.defineProperty && Object.getOwnPropertyDescriptor
	for (var key in obj) {
		if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
			var desc = hasPropertyDescriptor
				? Object.getOwnPropertyDescriptor(obj, key)
				: null
			if (desc && (desc.get || desc.set)) {
				Object.defineProperty(newObj, key, desc)
			} else {
				newObj[key] = obj[key]
			}
		}
	}
	newObj['default'] = obj
	if (cache) {
		cache.set(obj, newObj)
	}
	return newObj
}
function ownKeys(object, enumerableOnly) {
	var keys = Object.keys(object)
	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(object)
		enumerableOnly &&
			(symbols = symbols.filter(function (sym) {
				return Object.getOwnPropertyDescriptor(object, sym).enumerable
			})),
			keys.push.apply(keys, symbols)
	}
	return keys
}
function _objectSpread(target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = null != arguments[i] ? arguments[i] : {}
		i % 2
			? ownKeys(Object(source), !0).forEach(function (key) {
					_defineProperty(target, key, source[key])
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(
					target,
					Object.getOwnPropertyDescriptors(source)
			  )
			: ownKeys(Object(source)).forEach(function (key) {
					Object.defineProperty(
						target,
						key,
						Object.getOwnPropertyDescriptor(source, key)
					)
			  })
	}
	return target
}
function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, {
			value: value,
			enumerable: true,
			configurable: true,
			writable: true,
		})
	} else {
		obj[key] = value
	}
	return obj
}
function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError('Cannot call a class as a function')
	}
}
function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i]
		descriptor.enumerable = descriptor.enumerable || false
		descriptor.configurable = true
		if ('value' in descriptor) descriptor.writable = true
		Object.defineProperty(target, descriptor.key, descriptor)
	}
}
function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps)
	if (staticProps) _defineProperties(Constructor, staticProps)
	Object.defineProperty(Constructor, 'prototype', { writable: false })
	return Constructor
}
function _inherits(subClass, superClass) {
	if (typeof superClass !== 'function' && superClass !== null) {
		throw new TypeError('Super expression must either be null or a function')
	}
	subClass.prototype = Object.create(superClass && superClass.prototype, {
		constructor: { value: subClass, writable: true, configurable: true },
	})
	Object.defineProperty(subClass, 'prototype', { writable: false })
	if (superClass) _setPrototypeOf(subClass, superClass)
}
function _setPrototypeOf(o, p) {
	_setPrototypeOf = Object.setPrototypeOf
		? Object.setPrototypeOf.bind()
		: function _setPrototypeOf(o, p) {
				o.__proto__ = p
				return o
		  }
	return _setPrototypeOf(o, p)
}
function _createSuper(Derived) {
	var hasNativeReflectConstruct = _isNativeReflectConstruct()
	return function _createSuperInternal() {
		var Super = _getPrototypeOf(Derived),
			result
		if (hasNativeReflectConstruct) {
			var NewTarget = _getPrototypeOf(this).constructor
			result = Reflect.construct(Super, arguments, NewTarget)
		} else {
			result = Super.apply(this, arguments)
		}
		return _possibleConstructorReturn(this, result)
	}
}
function _possibleConstructorReturn(self, call) {
	if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
		return call
	} else if (call !== void 0) {
		throw new TypeError(
			'Derived constructors may only return object or undefined'
		)
	}
	return _assertThisInitialized(self)
}
function _assertThisInitialized(self) {
	if (self === void 0) {
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called"
		)
	}
	return self
}
function _isNativeReflectConstruct() {
	if (typeof Reflect === 'undefined' || !Reflect.construct) return false
	if (Reflect.construct.sham) return false
	if (typeof Proxy === 'function') return true
	try {
		Boolean.prototype.valueOf.call(
			Reflect.construct(Boolean, [], function () {})
		)
		return true
	} catch (e) {
		return false
	}
}
function _getPrototypeOf(o) {
	_getPrototypeOf = Object.setPrototypeOf
		? Object.getPrototypeOf.bind()
		: function _getPrototypeOf(o) {
				return o.__proto__ || Object.getPrototypeOf(o)
		  }
	return _getPrototypeOf(o)
}
var GitHubButton = /*#__PURE__*/ (function (_PureComponent) {
	_inherits(GitHubButton, _PureComponent)
	var _super = _createSuper(GitHubButton)
	function GitHubButton(props) {
		var _this
		_classCallCheck(this, GitHubButton)
		_this = _super.call(this, props)
		_this.$ = /*#__PURE__*/ _react['default'].createRef()
		_this._ = /*#__PURE__*/ _react['default'].createRef()
		return _this
	}
	_createClass(GitHubButton, [
		{
			key: 'render',
			value: function render() {
				return /*#__PURE__*/ _react['default'].createElement(
					'span',
					{
						ref: this.$,
					},
					/*#__PURE__*/ _react['default'].createElement(
						'a',
						_objectSpread(
							_objectSpread({}, this.props),
							{},
							{
								ref: this._,
							}
						),
						this.props.children
					)
				)
			},
		},
		{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.paint()
			},
		},
		{
			key: 'getSnapshotBeforeUpdate',
			value: function getSnapshotBeforeUpdate() {
				this.reset()
				return null
			},
		},
		{
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				this.paint()
			},
		},
		{
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.reset()
			},
		},
		{
			key: 'paint',
			value: function paint() {
				var _this2 = this
				var _ = this.$.current.appendChild(document.createElement('span'))
				Promise.resolve()
					.then(function () {
						return _interopRequireWildcard(
							require(/* webpackMode: "eager" */ 'github-buttons')
						)
					})
					.then(function (_ref) {
						var render = _ref.render
						if (_this2._.current != null) {
							render(_.appendChild(_this2._.current), function (el) {
								try {
									_.parentNode.replaceChild(el, _)
								} catch (_) {}
							})
						}
					})
			},
		},
		{
			key: 'reset',
			value: function reset() {
				this.$.current.replaceChild(this._.current, this.$.current.lastChild)
			},
		},
	])
	return GitHubButton
})(_react.PureComponent)
var _default = GitHubButton
exports['default'] = _default

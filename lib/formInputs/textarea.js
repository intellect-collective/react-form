'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FormInputTextarea;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('./util');

var _formInput = require('../formInput');

var _formInput2 = _interopRequireDefault(_formInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


function FormInputTextarea(_ref) {
  var field = _ref.field,
      showErrors = _ref.showErrors,
      errorBefore = _ref.errorBefore,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      isForm = _ref.isForm,
      noTouch = _ref.noTouch,
      errorProps = _ref.errorProps,
      rest = _objectWithoutProperties(_ref, ['field', 'showErrors', 'errorBefore', 'onChange', 'onBlur', 'isForm', 'noTouch', 'errorProps']);

  return _react2.default.createElement(
    _formInput2.default,
    {
      field: field,
      showErrors: showErrors,
      errorBefore: errorBefore,
      isForm: isForm,
      errorProps: errorProps
    },
    function (_ref2) {
      var setValue = _ref2.setValue,
          getValue = _ref2.getValue,
          setTouched = _ref2.setTouched;

      return _react2.default.createElement(
        'textarea',
        _extends({}, rest, {
          onChange: (0, _util.buildHandler)(onChange, function (e) {
            return setValue(e.target.value, noTouch);
          }),
          onBlur: (0, _util.buildHandler)(onBlur, function () {
            return setTouched();
          })
        }),
        getValue()
      );
    }
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtSW5wdXRzL3RleHRhcmVhLmpzIl0sIm5hbWVzIjpbIkZvcm1JbnB1dFRleHRhcmVhIiwiZmllbGQiLCJzaG93RXJyb3JzIiwiZXJyb3JCZWZvcmUiLCJvbkNoYW5nZSIsIm9uQmx1ciIsImlzRm9ybSIsIm5vVG91Y2giLCJlcnJvclByb3BzIiwicmVzdCIsInNldFZhbHVlIiwiZ2V0VmFsdWUiLCJzZXRUb3VjaGVkIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFLd0JBLGlCOztBQUx4Qjs7OztBQUVBOztBQUNBOzs7Ozs7O0FBRkE7OztBQUllLFNBQVNBLGlCQUFULE9BVVo7QUFBQSxNQVREQyxLQVNDLFFBVERBLEtBU0M7QUFBQSxNQVJEQyxVQVFDLFFBUkRBLFVBUUM7QUFBQSxNQVBEQyxXQU9DLFFBUERBLFdBT0M7QUFBQSxNQU5EQyxRQU1DLFFBTkRBLFFBTUM7QUFBQSxNQUxEQyxNQUtDLFFBTERBLE1BS0M7QUFBQSxNQUpEQyxNQUlDLFFBSkRBLE1BSUM7QUFBQSxNQUhEQyxPQUdDLFFBSERBLE9BR0M7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxJQUNGOztBQUNELFNBQ0U7QUFBQTtBQUFBO0FBQ0UsYUFBT1IsS0FEVDtBQUVFLGtCQUFZQyxVQUZkO0FBR0UsbUJBQWFDLFdBSGY7QUFJRSxjQUFRRyxNQUpWO0FBS0Usa0JBQVlFO0FBTGQ7QUFPRyxxQkFBd0M7QUFBQSxVQUFyQ0UsUUFBcUMsU0FBckNBLFFBQXFDO0FBQUEsVUFBM0JDLFFBQTJCLFNBQTNCQSxRQUEyQjtBQUFBLFVBQWpCQyxVQUFpQixTQUFqQkEsVUFBaUI7O0FBQ3ZDLGFBQ0U7QUFBQTtBQUFBLHFCQUNNSCxJQUROO0FBRUUsb0JBQVUsd0JBQWFMLFFBQWIsRUFBdUI7QUFBQSxtQkFDL0JNLFNBQVNHLEVBQUVDLE1BQUYsQ0FBU0MsS0FBbEIsRUFBeUJSLE9BQXpCLENBRCtCO0FBQUEsV0FBdkIsQ0FGWjtBQUtFLGtCQUFRLHdCQUFhRixNQUFiLEVBQXFCO0FBQUEsbUJBQU1PLFlBQU47QUFBQSxXQUFyQjtBQUxWO0FBTUVEO0FBTkYsT0FERjtBQVNEO0FBakJILEdBREY7QUFxQkQiLCJmaWxlIjoidGV4dGFyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vL1xuaW1wb3J0IHsgYnVpbGRIYW5kbGVyIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi9mb3JtSW5wdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1JbnB1dFRleHRhcmVhICh7XG4gIGZpZWxkLFxuICBzaG93RXJyb3JzLFxuICBlcnJvckJlZm9yZSxcbiAgb25DaGFuZ2UsXG4gIG9uQmx1cixcbiAgaXNGb3JtLFxuICBub1RvdWNoLFxuICBlcnJvclByb3BzLFxuICAuLi5yZXN0XG59KSB7XG4gIHJldHVybiAoXG4gICAgPEZvcm1JbnB1dFxuICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgc2hvd0Vycm9ycz17c2hvd0Vycm9yc31cbiAgICAgIGVycm9yQmVmb3JlPXtlcnJvckJlZm9yZX1cbiAgICAgIGlzRm9ybT17aXNGb3JtfVxuICAgICAgZXJyb3JQcm9wcz17ZXJyb3JQcm9wc31cbiAgICA+XG4gICAgICB7KHsgc2V0VmFsdWUsIGdldFZhbHVlLCBzZXRUb3VjaGVkIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2J1aWxkSGFuZGxlcihvbkNoYW5nZSwgZSA9PlxuICAgICAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSwgbm9Ub3VjaClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBvbkJsdXI9e2J1aWxkSGFuZGxlcihvbkJsdXIsICgpID0+IHNldFRvdWNoZWQoKSl9XG4gICAgICAgICAgPntnZXRWYWx1ZSgpfTwvdGV4dGFyZWE+XG4gICAgICAgIClcbiAgICAgIH19XG4gICAgPC9Gb3JtSW5wdXQ+XG4gIClcbn1cbiJdfQ==
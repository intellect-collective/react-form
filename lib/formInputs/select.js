'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FormInputSelect;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('./util');

var _formInput = require('../formInput');

var _formInput2 = _interopRequireDefault(_formInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


function FormInputSelect(_ref) {
  var options = _ref.options,
      field = _ref.field,
      showErrors = _ref.showErrors,
      errorBefore = _ref.errorBefore,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      isForm = _ref.isForm,
      noTouch = _ref.noTouch,
      errorProps = _ref.errorProps,
      placeholder = _ref.placeholder,
      rest = _objectWithoutProperties(_ref, ['options', 'field', 'showErrors', 'errorBefore', 'onChange', 'onBlur', 'isForm', 'noTouch', 'errorProps', 'placeholder']);

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

      var resolvedOptions = options.find(function (d) {
        return d.value === '';
      }) ? options : [{
        label: placeholder || 'Select One...',
        value: '',
        disabled: true
      }].concat(_toConsumableArray(options));
      var nullIndex = resolvedOptions.findIndex(function (d) {
        return d.value === '';
      });
      return _react2.default.createElement(
        'select',
        _extends({}, rest, {
          onChange: (0, _util.buildHandler)(onChange, function (e) {
            var val = resolvedOptions[e.target.value].value;
            setValue(val, noTouch);
          }),
          onBlur: (0, _util.buildHandler)(onBlur, function () {
            return setTouched();
          }),
          value: getValue()
        }),
        resolvedOptions.map(function (option, i) {
          return _react2.default.createElement(
            'option',
            { key: option.value, value: option.value, selected: getValue() === option.value, disabled: option.disabled },
            option.label
          );
        })
      );
    }
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtSW5wdXRzL3NlbGVjdC5qcyJdLCJuYW1lcyI6WyJGb3JtSW5wdXRTZWxlY3QiLCJvcHRpb25zIiwiZmllbGQiLCJzaG93RXJyb3JzIiwiZXJyb3JCZWZvcmUiLCJvbkNoYW5nZSIsIm9uQmx1ciIsImlzRm9ybSIsIm5vVG91Y2giLCJlcnJvclByb3BzIiwicGxhY2Vob2xkZXIiLCJyZXN0Iiwic2V0VmFsdWUiLCJnZXRWYWx1ZSIsInNldFRvdWNoZWQiLCJyZXNvbHZlZE9wdGlvbnMiLCJmaW5kIiwiZCIsInZhbHVlIiwibGFiZWwiLCJkaXNhYmxlZCIsIm51bGxJbmRleCIsImZpbmRJbmRleCIsInZhbCIsImUiLCJ0YXJnZXQiLCJtYXAiLCJvcHRpb24iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFLd0JBLGU7O0FBTHhCOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7OztBQUZBOzs7QUFJZSxTQUFTQSxlQUFULE9BWVo7QUFBQSxNQVhEQyxPQVdDLFFBWERBLE9BV0M7QUFBQSxNQVZEQyxLQVVDLFFBVkRBLEtBVUM7QUFBQSxNQVREQyxVQVNDLFFBVERBLFVBU0M7QUFBQSxNQVJEQyxXQVFDLFFBUkRBLFdBUUM7QUFBQSxNQVBEQyxRQU9DLFFBUERBLFFBT0M7QUFBQSxNQU5EQyxNQU1DLFFBTkRBLE1BTUM7QUFBQSxNQUxEQyxNQUtDLFFBTERBLE1BS0M7QUFBQSxNQUpEQyxPQUlDLFFBSkRBLE9BSUM7QUFBQSxNQUhEQyxVQUdDLFFBSERBLFVBR0M7QUFBQSxNQUZEQyxXQUVDLFFBRkRBLFdBRUM7QUFBQSxNQURFQyxJQUNGOztBQUNELFNBQ0U7QUFBQTtBQUFBO0FBQ0UsYUFBT1QsS0FEVDtBQUVFLGtCQUFZQyxVQUZkO0FBR0UsbUJBQWFDLFdBSGY7QUFJRSxjQUFRRyxNQUpWO0FBS0Usa0JBQVlFO0FBTGQ7QUFPRyxxQkFBd0M7QUFBQSxVQUFyQ0csUUFBcUMsU0FBckNBLFFBQXFDO0FBQUEsVUFBM0JDLFFBQTJCLFNBQTNCQSxRQUEyQjtBQUFBLFVBQWpCQyxVQUFpQixTQUFqQkEsVUFBaUI7O0FBQ3ZDLFVBQU1DLGtCQUFrQmQsUUFBUWUsSUFBUixDQUFhO0FBQUEsZUFBS0MsRUFBRUMsS0FBRixLQUFZLEVBQWpCO0FBQUEsT0FBYixJQUNwQmpCLE9BRG9CLElBR3BCO0FBQ0VrQixlQUFPVCxlQUFlLGVBRHhCO0FBRUVRLGVBQU8sRUFGVDtBQUdFRSxrQkFBVTtBQUhaLE9BSG9CLDRCQVFqQm5CLE9BUmlCLEVBQXhCO0FBVUEsVUFBTW9CLFlBQVlOLGdCQUFnQk8sU0FBaEIsQ0FBMEI7QUFBQSxlQUFLTCxFQUFFQyxLQUFGLEtBQVksRUFBakI7QUFBQSxPQUExQixDQUFsQjtBQUNBLGFBQ0U7QUFBQTtBQUFBLHFCQUNNUCxJQUROO0FBRUUsb0JBQVUsd0JBQWFOLFFBQWIsRUFBdUIsYUFBSztBQUNwQyxnQkFBTWtCLE1BQU1SLGdCQUFnQlMsRUFBRUMsTUFBRixDQUFTUCxLQUF6QixFQUFnQ0EsS0FBNUM7QUFDQU4scUJBQVNXLEdBQVQsRUFBY2YsT0FBZDtBQUNELFdBSFMsQ0FGWjtBQU1FLGtCQUFRLHdCQUFhRixNQUFiLEVBQXFCO0FBQUEsbUJBQU1RLFlBQU47QUFBQSxXQUFyQixDQU5WO0FBT0UsaUJBQU9EO0FBUFQ7QUFTR0Usd0JBQWdCVyxHQUFoQixDQUFvQixVQUFDQyxNQUFELEVBQVNDLENBQVQsRUFBZTtBQUNsQyxpQkFDRTtBQUFBO0FBQUEsY0FBUSxLQUFLRCxPQUFPVCxLQUFwQixFQUEyQixPQUFPUyxPQUFPVCxLQUF6QyxFQUFnRCxVQUFXTCxlQUFlYyxPQUFPVCxLQUFqRixFQUF5RixVQUFVUyxPQUFPUCxRQUExRztBQUNHTyxtQkFBT1I7QUFEVixXQURGO0FBS0QsU0FOQTtBQVRILE9BREY7QUFtQkQ7QUF0Q0gsR0FERjtBQTBDRCIsImZpbGUiOiJzZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vL1xuaW1wb3J0IHsgYnVpbGRIYW5kbGVyIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi9mb3JtSW5wdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1JbnB1dFNlbGVjdCAoe1xuICBvcHRpb25zLFxuICBmaWVsZCxcbiAgc2hvd0Vycm9ycyxcbiAgZXJyb3JCZWZvcmUsXG4gIG9uQ2hhbmdlLFxuICBvbkJsdXIsXG4gIGlzRm9ybSxcbiAgbm9Ub3VjaCxcbiAgZXJyb3JQcm9wcyxcbiAgcGxhY2Vob2xkZXIsXG4gIC4uLnJlc3Rcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUlucHV0XG4gICAgICBmaWVsZD17ZmllbGR9XG4gICAgICBzaG93RXJyb3JzPXtzaG93RXJyb3JzfVxuICAgICAgZXJyb3JCZWZvcmU9e2Vycm9yQmVmb3JlfVxuICAgICAgaXNGb3JtPXtpc0Zvcm19XG4gICAgICBlcnJvclByb3BzPXtlcnJvclByb3BzfVxuICAgID5cbiAgICAgIHsoeyBzZXRWYWx1ZSwgZ2V0VmFsdWUsIHNldFRvdWNoZWQgfSkgPT4ge1xuICAgICAgICBjb25zdCByZXNvbHZlZE9wdGlvbnMgPSBvcHRpb25zLmZpbmQoZCA9PiBkLnZhbHVlID09PSAnJylcbiAgICAgICAgICA/IG9wdGlvbnNcbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IHBsYWNlaG9sZGVyIHx8ICdTZWxlY3QgT25lLi4uJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgIF1cbiAgICAgICAgY29uc3QgbnVsbEluZGV4ID0gcmVzb2x2ZWRPcHRpb25zLmZpbmRJbmRleChkID0+IGQudmFsdWUgPT09ICcnKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2J1aWxkSGFuZGxlcihvbkNoYW5nZSwgZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHJlc29sdmVkT3B0aW9uc1tlLnRhcmdldC52YWx1ZV0udmFsdWVcbiAgICAgICAgICAgICAgc2V0VmFsdWUodmFsLCBub1RvdWNoKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBvbkJsdXI9e2J1aWxkSGFuZGxlcihvbkJsdXIsICgpID0+IHNldFRvdWNoZWQoKSl9XG4gICAgICAgICAgICB2YWx1ZT17Z2V0VmFsdWUoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cmVzb2x2ZWRPcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0gc2VsZWN0ZWQ9eyBnZXRWYWx1ZSgpID09PSBvcHRpb24udmFsdWUgfSBkaXNhYmxlZD17b3B0aW9uLmRpc2FibGVkfT5cbiAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICApXG4gICAgICB9fVxuICAgIDwvRm9ybUlucHV0PlxuICApXG59XG4iXX0=
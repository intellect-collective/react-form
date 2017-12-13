import React from 'react'
//
import { buildHandler } from './util'
import FormInput from '../formInput'

export default function FormInputSelect ({
  options,
  field,
  showErrors,
  errorBefore,
  onChange,
  onBlur,
  isForm,
  noTouch,
  errorProps,
  placeholder,
  ...rest
}) {
  return (
    <FormInput
      field={field}
      showErrors={showErrors}
      errorBefore={errorBefore}
      isForm={isForm}
      errorProps={errorProps}
    >
      {({ setValue, getValue, setTouched }) => {
        const resolvedOptions = options.find(d => d.value === '')
          ? options
          : [
            {
              label: placeholder || 'Select One...',
              value: '',
              disabled: true,
            },
            ...options,
          ]
        const nullIndex = resolvedOptions.findIndex(d => d.value === '')
        return (
          <select
            {...rest}
            onChange={buildHandler(onChange, e => {
              const val = resolvedOptions[e.target.value].value
              setValue(val, noTouch)
            })}
            onBlur={buildHandler(onBlur, () => setTouched())}
            value={getValue()}
          >
            {resolvedOptions.map((option, i) => {
              return (
                <option key={option.value} value={option.value} selected={ getValue() === option.value } disabled={option.disabled}>
                  {option.label}
                </option>
              )
            })}
          </select>
        )
      }}
    </FormInput>
  )
}

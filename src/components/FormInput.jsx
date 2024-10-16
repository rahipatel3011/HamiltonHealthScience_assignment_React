import React from 'react'

function FormInput({id, label, type,options,error, ...props}) {
  return (
    <div className="mb-4">
    <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{ label }</label>
    
    {type !== 'select' &&  <input id={id} type={type} {...props} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />}
    {type === 'select' && (
      <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...props}>
        {options.map(option=><option value={option} key={option}>{option}</option>)}
      </select>
    )}
    <span className="text-red-500 text-xs">{error}</span>
  </div>
  )
}

export default FormInput
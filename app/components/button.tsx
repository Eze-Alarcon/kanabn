import React from 'react'

const Button = ({ children, style, wi, mdwi } :{children: React.ReactNode, style: string, wi: string, mdwi?: string}) => {
  const primarylg: string =
  `bg-kpurple font-bold text-white pl-4 pr-4 w-[${wi}px] md:w-${mdwi} h-[48px] rounded-full capitalize hover:opacity-60 text-md duration-200 mx-auto`
  const primarysm: string =
  `bg-kpurple font-bold text-white pl-4 pr-4 w-[${wi}px] md:w-${mdwi} h-[40px]  rounded-full capitalize hover:opacity-60 text-md duration-200 mx-auto`
  const secondary: string =
  `bg-kcian font-bold text-kpurple pl-4 pr-4 w-[${wi}px] md:w-${mdwi} h-[40px]  rounded-full capitalize hover:opacity-60 text-md duration-200 mx-auto`
  const destroy: string =
  `bg-kred font-bold text-white pl-4 pr-4 w-[${wi}px] md:w-${mdwi} h-[40px]  rounded-full capitalize hover:opacity-60 text-md duration-200 mx-auto`

  if (style === 'primarylg') { style = primarylg }
  if (style === 'primarysm') { style = primarysm }
  if (style === 'secondary') { style = secondary }
  if (style === 'delete') { style = destroy }

  return (
    <button className={style}>
      {children}
    </button>
  )
}

export default Button

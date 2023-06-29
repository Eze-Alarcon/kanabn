import React from 'react'

const genericBtn = 'w-full h-10 px-4 rounded-full capitalize text-md duration-200 mx-auto font-bold'

const btnStyle = {
  btnPrimarylg: `${genericBtn} bg-kpurple text-white h-[48px] hover:bg-kpurpleli`,
  btnPrimarysm: `${genericBtn} bg-kpurple text-white hover:bg-kpurpleli`,
  btnSecondary: `${genericBtn} bg-kcian text-kpurple hover:bg-opacity-60`,
  btnDelete: `${genericBtn} bg-kred text-white hover:bg-opacity-60`
}

const Button = ({ children, style, size } :{children: React.ReactNode, style: string, size?: string}) => {
  if (style === 'primarylg') { style = btnStyle.btnPrimarylg }
  if (style === 'primarysm') { style = btnStyle.btnPrimarysm }
  if (style === 'secondary') { style = btnStyle.btnSecondary }
  if (style === 'delete') { style = btnStyle.btnDelete }

  return (
    <button className={`${style} ${size}`}>
      {children}
    </button>
  )
}

export default Button

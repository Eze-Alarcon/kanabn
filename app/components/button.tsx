import React from 'react'

const genericBtn = 'px-4 rounded-full capitalize hover:opacity-60 text-md duration-200 mx-auto font-bold w-full h-10'

const btnStyle = {
  btnPrimarylg: `${genericBtn} bg-kpurple text-white h-[48px]`,
  btnPrimarysm: `${genericBtn} bg-kpurple text-white`,
  btnSecondary: `${genericBtn} bg-kcian text-kpurple`,
  btnDelete: `${genericBtn} bg-kred text-white`
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

import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
    {/* py-4 px-6	Padding trên dưới 1rem (16px), trái phải 1.5rem (24px)
        bg-blue-gradient	Gradient màu xanh (tự định nghĩa trong Tailwind config)
        font-medium	Độ dày chữ vừa phải
        text-primary	Màu chữ chính (định nghĩa trong Tailwind config)
        outline-none	Loại bỏ viền khi nhấn focus
      rounded-10	Bo góc 10px*/}
      Get Started
    </button>
  )
}

export default Button

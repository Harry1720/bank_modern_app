import {useState} from 'react'
import {close, logo, menu} from '../assets'
import {navLinks} from '../constants'
const NavBar = () => {
  // UseStateSnippets
  const [toggle, setToggle] = useState(false);//Dùng để xác định trạng thái của nút đóng/mở menu khi trong giao diện mobile
  return (
    <nav className = "w-full flex py-6 justify-between justify-between items-center navbar">
      <img src = {logo} alt = "hoobank" className='w-[124px] h-[32px]'></img>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      {/* list-none	Bỏ dấu đầu dòng (marker) mặc định của danh sách <ul>
          sm:flex	Từ kích thước sm trở lên (>= 640px) thì dùng display: flex
          hidden	Mặc định ẩn phần tử (dưới sm)
          justify-end	Căn các item về phía cuối theo trục ngang (main axis)
          items-center	Căn giữa các item theo trục dọc (cross axis)
          flex-1	Cho phép phần tử chiếm toàn bộ không gian có thể trong flex container
      */}
      {/* Create right menu on navbar */}
        {navLinks.map((nav,index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer 
            ${index===navLinks.length-1 ? 'mr-0' : 'mr-10'}
            text-[16px] text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Create new menu only for mobile */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          src={toggle ? close : menu} 
          alt="menu"
          className='w-[28px] h-[28px] object-contain' 
          // object-contain	Đảm bảo hình ảnh giữ đúng tỉ lệ, không bị bóp méo, và nằm gọn trong khung đã định (28x28)

            onClick={()=>setToggle((prev) => !prev)}
            // Not recommend: onClick={()=>setToggle(!toggle)}
          />
          {/* Menu for mobile */}
          <div className={`${toggle ? 'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          {/* mx-4 my-2	Margin x: 1rem (16px), y: 0.5rem (8px)
              rounded-xl	Bo góc lớn
          */}
          <ul className="list-none flex flex-col justify-end items-center flex-1">
          {/* Create right menu on navbar */}
            {navLinks.map((nav,index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer 
                ${index===navLinks.length-1 ? 'mb-0' : 'mb-1'}
                text-[16px] text-white`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

          </div>
      </div>
    </nav>
  )
}

export default NavBar

// {navLinks.map((nav,index) => (
//   <li
//     key={nav.id}
//     className={`font-poppins font-normal cursor-pointer 
//     ${index===navLinks.length-1 ? 'mr-0' : 'mr-10'}
//     text-[16px] text-white`}
//   >
//     <a href={`#${nav.id}`}>
//       {nav.title}
//     </a>
//   </li>
/* navLinks là một mảng

    map() là một hàm có sẵn trong JavaScript dành cho mảng (array), dùng để:
    Duyệt qua từng phần tử của mảng và “chuyển đổi” nó thành phần tử mới.
    Cú pháp
    array.map((element, index) => {
      return newElement;
    });

    key={nav.id}: React cần key duy nhất cho mỗi item khi render danh sách để quản lý DOM hiệu quả hơn.

    font-poppins	Dùng font chữ "Poppins"
    font-normal	Độ đậm văn bản bình thường
    mr-10 hoặc mr-0	Thêm khoảng cách phải nếu không phải là phần tử cuối cùng (mr-10), ngược lại không có margin (mr-0)
    → Phần logic này đảm bảo: chỉ các phần tử không phải cuối cùng mới có khoảng cách phải, tránh dư khoảng trắng ở phần tử cuối.
*/

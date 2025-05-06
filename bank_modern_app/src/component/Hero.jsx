import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      {/* Create 20% discount */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      {/* xl:px-0 là một lớp trong Tailwind CSS dùng để xóa padding ngang (left và right) ở màn hình có kích thước "extra large" (≥1280px). .
      px-0 = padding-left và padding-right bằng 0px*/}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className = 'w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span>
            DISCOUNT FOR <span className="text-white"> 1 MONTH </span>ACCOUNT
          </p>
        </div>
        
        {/* Create  The next gen payment method*/}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          {/* flex-1	Cho phần tử chiếm toàn bộ phần còn lại của flex container
              font-semibold	Độ đậm của chữ là 600
              ss:text-[72px]	Khi màn hình ≥ ss (custom breakpoint), font size là 72px
              text-[52px]	Mặc định font size là 52px
              ss:leading-[100px]	Line-height 100px (ở breakpoint ss trở lên)
              leading-[75px]	Line-height 75px (mặc định)
              <br className="sm:block hidden" />	Thẻ ngắt dòng chỉ hiển thị ở kích thước màn hình ≥ 640px (sm); còn lại thì bị ẩn (hidden) 
            */}
          The Next <br className="sm:block hidden"/>
              {/*ngắt dòng (xuống hàng) khi màn hình từ kích thước sm trở lên, còn nếu nhỏ hơn thì không ngắt dòng*
              className="sm:block hidden":
                hidden: ẩn mặc định
                sm:block: từ kích thước màn hình ≥ 640px (breakpoint sm), thẻ <br> sẽ hiển thị (dưới dạng block, tức là ngắt dòng*/}
            <span className="text-gradient">Generation</span><br />
          </h1>
          
          {/* Get Started Button */}
          <div className = "ss:flex hidden md:mr-4 mr-0">
            <GetStarted/>
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">Payment Method.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
        {/* Robot arm */}
      </div>

      {/* className tổng dùng để hiển thị bóng chỉ bên dưới robot arm */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative` }> 
          <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
          {/* relative	Đặt vị trí ảnh là tương đối, cho phép định vị con hoặc sử dụng z-index
              z-[5]	Đặt thứ tự lớp hiển thị (z-index) là 5, tức là hiển thị trên các phần tử có z-index thấp hơn
          */}
          {/* Make it colorful */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
          <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient"></div>
          <div className="absolute z-[1] w-[50%] h-[50%] bottom-20 blue__gradient"></div>
        </div>

            {/* Do khi dùng responsive ip12 thì nút Get Started biến mất => dùng đoạn div bên dưới*/}
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted/>
        </div>

    </section>
  )

export default Hero
import styles from "../style"
import { arrowUp } from "../assets"

// Có thể thêm hiệu ứng khi click/rê chuột vào nút này
const GetStarted = () => (

  // background and padding
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      
      {/* Get and Up Arrow */}
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} className = "w-[23px] h-[23px]"alt="arrowup" />
      </div>

      {/* Started */}
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>

    </div>
  </div>
)

export default GetStarted

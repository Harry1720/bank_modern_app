import { features } from "../constants"
import styles, {layout} from "../style"
import Button from "./Button"

// icon, title, content, index: là các props được truyền vào (từ features.map(...)).
const FeatureCard = ({icon, title, content, index}) =>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 ? "mb-6" : "mb-0"} feature-card`}>
    
    {/* Icons */}
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      {/* Icon chiếm 50% chiều rộng và cao của vùng chứa, và được co giãn hợp lý với object-contain. */}
    </div>

    {/* Contents */}
    <div className="flex-1 flex flex-col ml-3">
    {/* flex-1: chiếm toàn bộ không gian còn lại.
        flex-col: xếp tiêu đề và mô tả theo chiều dọc. */}
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={layout.section}>

    {/* Left side */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden"/>we’ll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-5` }>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button styles="mt-10"/>
      </div>

      {/* Right side */}
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) =>(
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
      {/* Có thể hiểu là:
          Gọi hàm FeatureCard dưới dạng một React component.
          Truyền tham số (props) vào hàm thông qua:
          ...feature: tương đương với icon={feature.icon} title={feature.title} content={feature.content}
          index={index}: truyền chỉ số của phần tử trong mảng.
          
          Tại sao cần key?
            + Khi bạn dùng .map() để tạo ra danh sách component, 
            React cần biết mỗi phần tử trong danh sách có thay đổi gì không sau mỗi lần cập nhật UI 
            (ví dụ khi thêm, xóa, sắp xếp lại dữ liệu).
            + Nếu không có key, React sẽ đoán và có thể render lại toàn bộ danh sách, 
            gây chậm và làm mất hiệu ứng, trạng thái (state) của component con.*/}
    </section>
  )
}

export default Business

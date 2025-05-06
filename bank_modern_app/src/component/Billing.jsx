import { apple, bill, google } from "../assets"
import styles, {layout} from "../style"

const Billing = () => {
  return (
    <section id = "product" className={layout.sectionReverse}>
    {/*sectionReverse: vì phần này có 2 cột, hình bên trái và ND bên phải,
    nên khi về bản mobile nó sẽ đẩy văn  bản lên trước, sau đó đến ảnh => trải nghiệm tốt hơn*/}

      {/* Left side */}
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%} relative z-[5]" />

        {/* Make gradient bg color for image */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
        {/* left-1/2 → đặt thuộc tính left: 50%;
            -left-1/2 → đặt left: -50%; (tức là di chuyển phần tử sang trái 50% so với chính nó 
            hoặc phần tử chứa nó, tùy ngữ cảnh positioning)
            rounded-full là một class trong Tailwind CSS dùng để bo tròn toàn bộ viền của một phần tử thành hình tròn       */}
      </div>

          {/* Right side */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden"/> billing & invoicing.</h2>
        {/* className="sm:block hidden":  Trên màn hình nhỏ hơn 640px: phần tử bị ẩn
                                          Trên màn hình từ 640px trở lên: phần tử hiển thị */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

          {/* appstore + ggplay icons */}
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="appStore" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
          <img src={google} alt="googleStore" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
        </div>
      </div>
    </section>
  )
}

export default Billing

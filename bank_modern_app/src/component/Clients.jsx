import { clients } from "../constants"
import styles from "../style"

//Có thể chỉnh màu của các logo thay đổi khi hover.
const Client = () =>(
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
    {clients.map((clients)=>(
      <div key={clients.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
        <img src={clients.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain"/>
      </div>
    ))}
    </div>
  </section>
)

export default Client

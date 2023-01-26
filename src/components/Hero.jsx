import styles from "../style";
import { discount, robot, airbnb, bw1 } from "../assets";
import GetStarted from './GetStarted';
import TextAnimation from "../animations/TextAnimation";


const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} 
      flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-pastelgreen rounded-[10px] mb-2 solid-shadow"> 
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <div className="flex flex-col">
                      <p className={`${styles.paragraph} ml-2 text-black`}>
            <span className="text-primary">Hallo !!!</span> Ini Kartu Ucapan Ongleng Dari{" "}<TextAnimation/>
          </p>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[36px] text-primary ss:leading-[80px] leading-[50px]">
            Selamat Ulang Tahun <br className="sm:block hidden"/> {" "}
            <span className="text-pasteldblue"> Rahmah Putri Istighfarini </span> <br className="sm:block hidden"/> {" "}
          </h1>
        </div>

        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[36px] text-primary ss:leading-[100.8px] leading-[75px]">
            Ke-23 Tahun
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-pasteldblue`}>
          Selamat ulang tahun, kayaknya aku gak bisa ngasih apa-apa nih tapi aku coba buat kartu ucapan yang
          sesuai sama keahlianku. Anjayy slebew.
        </p>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-2 relative`}>
        <img src={bw1} alt="robot" className="w-[60%] relative z-[4]" />
                
        <div className="absolute z-[0] w-[40%] h-[60%] top-0 white__gradient" />
        <div className="absolute z-[1] w-[80%] h-[60%] rounded-full pink__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

    </section>
);

export default Hero

{/*<span className="text-gradient">Rahmah Putri Istighfarini</span> {" "} Ke-23 Tahun.*/}
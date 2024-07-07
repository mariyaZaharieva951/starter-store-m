"use client";

import Image from "next/image";
import asus from '/public/assets/asus.svg';
import xiaomi from '/public/assets/xiaomi.svg';
import samsung from '/public/assets/samsung.svg';
import sony from '/public/assets/sony.svg';
import wacom from '/public/assets/wacom.svg';
import apple from '/public/assets/apple.svg';


const Posters = () => {
  return (
    <ul className="boxSmall w-full mx-auto flex lg:flex-row flex-col items-center justify-between pb-[40px]">
        <li><Image alt="poster" width={120} height={120} src={asus} className="w-[120px] h-[120px]"/></li>
        <li><Image alt="poster" width={120} height={120} src={xiaomi} className="w-[120px] h-[120px]"/></li>
        <li><Image alt="poster" width={120} height={120} src={samsung} className="w-[120px] h-[120px]"/></li>
        <li><Image alt="poster" width={120} height={120} src={sony} className="w-[120px] h-[120px]"/></li>
        <li><Image alt="poster" width={120} height={120} src={wacom} className="w-[120px] h-[120px]"/></li>
        <li><Image alt="poster" width={120} height={120} src={apple} className="w-[120px] h-[120px]"/></li>
    </ul>
  );
};

export default Posters;
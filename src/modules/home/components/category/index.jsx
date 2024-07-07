import Image from "next/image";
import telephone from '/public/assets/telephone.svg';
import camera from '/public/assets/camera.svg';
import monitor from '/public/assets/monitor.svg';
import shirt from '/public/assets/shirt.svg';
import games from '/public/assets/games.svg';
import ball from '/public/assets/ball.svg';

const Category = () => {
    return (
        <div className="boxSmall w-full mx-auto flex flex-col justify-between pt-[45px] px-2 lg:px-0">
            <div className="flex justify-between">
                <h2 className="font-bold text-[28px]">Category</h2>
                <div className="custom-button text-violetLight border-violetLight border-2">View all</div>
            </div>


            <ul className="flex lg:flex-row lg:flex-nowrap flex-wrap lg:justify-between justify-evenly font-roboto items-center pt-[60px]">
                <li className="flex flex-col w-[160px] h-[220px] items-center">
                    <Image alt="img" width={56} height={56} className="w-[56px] h-[56px] mb-[20px]" src={telephone}/>
                    <h4 className="text-sm mb-[10px] font-bold">Category Name</h4>
                    <p className="text-sm text-gray">2.3k Items</p>
                </li>
                <li className="flex flex-col w-[160px] h-[220px] items-center">
                    <Image alt="img" width={56} height={56} className="w-[56px] h-[56px] mb-[20px]" src={camera}/>
                    <h4 className="text-sm mb-[10px] font-bold">Category Name</h4>
                    <p className="text-sm text-gray">2.3k Items</p>
                </li>
                <li className="flex flex-col w-[160px] h-[220px] items-center">
                    <Image alt="img" width={56} height={56} className="w-[56px] h-[56px] mb-[20px]" src={monitor}/>
                    <h4 className="text-sm mb-[10px] font-bold">Category Name</h4>
                    <p className="text-sm text-gray">2.3k Items</p>
                </li>
                <li className="flex flex-col w-[160px] h-[220px] items-center">
                    <Image alt="img" width={56} height={56} className="w-[56px] h-[56px] mb-[20px]" src={shirt}/>
                    <h4 className="text-sm mb-[10px] font-bold">Category Name</h4>
                    <p className="text-sm text-gray">2.3k Items</p>
                </li>
                <li className="flex flex-col w-[160px] h-[220px] items-center">
                    <Image alt="img" width={56} height={56} className="w-[56px] h-[56px] mb-[20px]" src={games}/>
                    <h4 className="text-sm mb-[10px] font-bold">Category Name</h4>
                    <p className="text-sm text-gray">2.3k Items</p>
                </li>
                <li className="flex flex-col w-[160px] h-[220px] items-center">
                    <Image alt="img" width={56} height={56} className="w-[56px] h-[56px] mb-[20px]" src={ball}/>
                    <h4 className="text-sm mb-[10px] font-bold">Category Name</h4>
                    <p className="text-sm text-gray">2.3k Items</p>
                </li>
            </ul>

        </div>

    );
};

export default Category;
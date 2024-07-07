import Image from "next/image";
import blog1 from '/public/assets/blog1.png';
import blog2 from '/public/assets/blog2.png';
import blog3 from '/public/assets/blog3.png';
import { Button } from "@medusajs/ui";

const Blog = () => {
    const posts = [
        {
            imageSrc: blog1,
            date: "07 July 2020",
            title: "Types of Blouse In Catalog fashion",
            description:
                "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
        },
        {
            imageSrc: blog2,
            date: "20 Mar 2022",
            title: "Types of Blouse In Catalog fashion",
            description:
                "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
        },
        {
            imageSrc: blog3,
            date: "07 Jun 2024",
            title: "Types of Blouse In Catalog fashion",
            description:
                "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
        },
    ];


    return (
        <div className="boxSmall flex flex-col justify-between lg:pt-[150px] lg:pb-[80px] py-[50px] px-2 lg:px-0">
            <div className="flex justify-between mb-[15px]">
                <h2 className="font-rubik lg:text-4xl text-2xl font-bold">Read our blog</h2>
                <Button className="custom-button text-base text-nowrap text-[#5C6AC4] border border-[#5C6AC4] bg-whiteText">More on blogs</Button>
            </div>
            <p className="text-gray text-base mb-[40px]">Check our latest article to get meaningfull content or tips for shopping</p>
            <div className="flex lg:flex-row gap-[30px] flex-col items-center">
            {posts.map((p, index) => (
          <div key={index} className="w-[350px] h-[328px]  text-left">
            <Image
              src={p.imageSrc}
              alt="img"
              className="w-[350px] h-[200px] rounded-lg mx-auto  object-cover cursor-pointer "
            />
            <p className="text-sm pt-7 text-violetLight ">{p.date}</p>
            <h2 className="text-base font-bold py-[10px]">
              {p.title}
            </h2>
            <p className="text-gray text-sm">
               {p.description}
            </p>
          </div>
        ))}

            </div>
        </div>
    );
};

export default Blog;
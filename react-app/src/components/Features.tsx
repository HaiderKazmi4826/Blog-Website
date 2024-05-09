import React from "react";
import { generalStyles, sectionStyle } from "../constants/styles";
import { FeatureProps } from "../constants/types";
import { TbSquareRotated } from "react-icons/tb";
import { featuresTrendingNews } from "../constants/data";

const Features = () => {
  return (
    <section className={`${sectionStyle} mt-[10px]`}>
      <div className={`${generalStyles.container} grid gap-[15px] xl:grid-cols-features overflow-hidden`}>
       <div className="self-start grid gap-[15px] md:grid-rows-features md:grid-cols-2">
       <div className="md:col-span-2 flex items-center h-[50px] gap-[15px] bg-secondary-background-color">
          <h5 className="text-xsm h-full flex items-center justify-center px-[8px] fancy-border text-center uppercase text-light-color font-bold">
            breaking news
          </h5>
          <p className="text-xsm">Apple announces a new partnership...</p>
        </div>
        <FeatureArticle 
         articleClass="relative rounded-sm md:row-span-3"
         contentClass="p-[10px] bg-transparent-dark-color absolute w-full left-[0] bottom-[0]"
         url="../../src/assets/featured-1.jpg"
         date="Dec 5th 2021"
         unread="8 min read"
         title="Is VR the future?"
         category="technology"
         />
        <FeatureArticle 
         articleClass="relative rounded-sm"
         contentClass="p-[10px] bg-transparent-dark-color absolute w-full left-[0] bottom-[0]"
         url="../../src/assets/featured-2.jpg"
         date="Dec 5th 2021"
         unread="8 min read"
         title="Is VR the future?"
         category="technology"
         />
        <FeatureArticle 
         articleClass="h-full relative rounded-sm"
         contentClass="p-[10px] bg-transparent-dark-color absolute w-full left-[0] bottom-[0]"
         url="../../src/assets/featured-3.jpg"
         date="Dec 5th 2021"
         unread="8 min read"
         title="Is VR the future?"
         category="technology"
         />
       </div>

       <div className="bg-secondary-background-color py-[20px] px-[10px]">
        <h2 className="text-light-color font-bold text-lg text-center">Trending News</h2>
        <div className="mt-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px]">
         {
          featuresTrendingNews.map((item,index)=>{
            return(
              <div key={item.id} className="w-full flex flex-col sm:flex-row items-center gap-[30px] overflow-hidden">
                <div className="relative">
                <span className="absolute font-semibold text-sm top-[-2%] left-[-2%] w-[30px] h-[30px] flex items-center justify-center bg-secondary-background-color rounded-full text-light-color">0{item.id}</span>
                <img src={item.url} className="w-full h-full object-cover rounded-sm sm:max-w-[150px]" alt="" />
                </div>
                <div>
                  <div className="flex items-center gap-[15px] text-xsm">
                    <span>21 Dec 2021</span>
                    <span><TbSquareRotated fill="white" size={10} /></span>
                    <span>8 min read</span>
                  </div> 
                  <h4 className="text-light-color font-bold text-sm mt-[10px]">Sample Article Title</h4>
                  {index !== featuresTrendingNews.length - 1 && <div className="sm:hidden w-full h-[1px] mt-[22px] bg-slate-700"></div>}
                </div>
              </div>
            )
          })
         }
         </div>
       </div>
      </div>
    </section>
  );
};

export default Features;

const FeatureArticle = ({articleClass,contentClass,url,date,unread,title,category}: FeatureProps ) => {
  return (
    <article className={articleClass}>
      <img src={url} alt="" className="w-full h-full object-cover" />
      <div className={contentClass}>
        <div className="flex items-center text-xsm gap-[22px] mb-[5px]">
            <span>{date}</span>
            <span><TbSquareRotated fill="white" size={10} className="text-light-color" /></span>
            <span>{unread}</span>
        </div>
        <h3 className="text-light-color text-md font-bold">{title}</h3>
      </div>
      <p className="absolute top-[5%] right-[5%] uppercase bg-primary-background-color text-xsm font-semibold p-[4px]">{category}</p>
    </article>
  );
};

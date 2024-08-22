import { Product } from "../../components";
import introduction from "../../assets/images/introduction-bg@3x.png";
import main_banner from "../../assets/images/main-banner@3x.png";
import producticon_01 from "../../assets/images/producticon-01.png";
import best_image_01 from "../../assets/images/best-image-01@3x.png";
import producticon_02 from "../../assets/images/producticon-02.png";
import best_image_02 from "../../assets/images/best-image-02@3x.png";
import producticon_03 from "../../assets/images/producticon-03.png";
import best_image_03 from "../../assets/images/best-image-03@3x.png";
import object_01 from "../../assets/images/object-01.png";
import object_06 from "../../assets/images/object-06.png";
import object_02 from "../../assets/images/object-02.png";
import object_03 from "../../assets/images/object-03.png";
import object_04 from "../../assets/images/object-04.png";
import object_05 from "../../assets/images/object-05.png";
import object_07 from "../../assets/images/object-07.png";
import img from "../../assets/images/img.png";
import news_object_02 from "../../assets/images/news-object-02.png";
import news_object_03 from "../../assets/images/news-object-03.png";
import news_img_01 from "../../assets/images/news-img-01.png";
import news_object_01 from "../../assets/images/news-object-01.png";
import news_object_04 from "../../assets/images/news-object-04.png";
import img_20 from "../../assets/images/img-20.png";
import news_object_05 from "../../assets/images/news-object-05.png";
import video_object_05 from "../../assets/images/video-object-05.png";
import video_object_06 from "../../assets/images/video-object-06.png";
import video_object_07 from "../../assets/images/video-object-07.png";
import video_object_01 from "../../assets/images/video-object-01.png";
import video_object_02 from "../../assets/images/video-object-02.png";
import video_object_03 from "../../assets/images/video-object-03.png";
import video_object_04 from "../../assets/images/video-object-04.png";
import video_object_08 from "../../assets/images/video-object-08.png";
import video_object_09 from "../../assets/images/video-object-09.png";

export const HomePage = () => {
  return (
    <main>
      <div className="bg-[#ea4913] xl:h-[50rem] flex justify-center items-center">
        <img
          src={main_banner}
          alt=""
          className="max-w-12xl bg-cover 2xl:h-full w-full"
        />
      </div>
      <div
        className={`px-10 py-32 max-sm:py-16 flex flex-col gap-12 items-start justify-center relative`}
      >
        <img
          src={introduction}
          alt=""
          className="absolute bg-cover w-full h-full bg-center left-0 right-0 z-0"
        />
        <div className="max-w-8xl w-full m-auto flex flex-col gap-8 px-4 z-10">
          <h1 className="font-extrabold text-5xl text-white leading-tight tracking-[5px] max-sm:text-center max-sm:text-4xl">
            WHAT HAPPENED!
          </h1>
          <p className="text-lg text-white w-1/2 max-lg:w-2/3 max-sm:w-full max-sm:m-auto max-sm:text-center">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first step
            to your brand's success. How to create mobile-optimized videos in
            minutes.
          </p>
        </div>
      </div>
      <div className="bg-[#fccb05] w-full flex flex-col px-10 py-32 gap-12 max-sm:py-16">
        <div className="w-full m-auto flex flex-col justify-center items-center gap-8 px-4">
          <h1 className="font-extrabold text-5xl leading-tight tracking-[5px] text-[#f96400] max-sm:text-4xl max-sm:text-center">
            BEST PRODUCT
          </h1>
          <p className="text-lg w-1/2 text-[#f96400] text-center max-lg:w-2/3 max-sm:w-full">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first
          </p>
        </div>
        <div className="max-w-8xl w-full m-auto flex flex-row max-sm:flex-col gap-y-20">
          <div className="relative">
            <img
              src={producticon_01}
              className="absolute -top-10 left-0 size-20"
            />
            <img src={best_image_01} className="" />
            <button className="active:bg-[#e4e4e4] absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white border border-black flex flex-row justify-between items-center font-bold text-black px-3 py-2 gap-2 w-3/4">
              <span className="flex-2 text-start max-lg:leading-4">
                How to create mobile-optimized
              </span>
              <span className="size-5 p-5 rounded-full bg-black text-white font-bold flex justify-center items-center">
                GO
              </span>
            </button>
          </div>
          <div className="relative">
            <img
              src={producticon_02}
              className="absolute -top-10 left-0 size-20"
            />
            <img src={best_image_02} className="" />
            <button className="active:bg-[#e4e4e4] absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white border border-black flex flex-row justify-between items-center font-bold text-black px-3 py-2 gap-2 w-3/4">
              <span className="flex-2 text-start max-lg:leading-4">
                How to create mobile-optimized
              </span>
              <span className="size-5 p-5 rounded-full bg-black text-white font-bold flex justify-center items-center">
                GO
              </span>
            </button>
          </div>
          <div className="relative">
            <img
              src={producticon_03}
              className="absolute -top-10 left-0 size-20"
            />
            <img src={best_image_03} className="" />
            <button className="active:bg-[#e4e4e4] absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white border border-black flex flex-row justify-between items-center font-bold text-black px-3 py-2 gap-2 w-3/4">
              <span className="flex-2 text-start max-lg:leading-4">
                How to create mobile-optimized
              </span>
              <span className="size-5 p-5 rounded-full bg-black text-white font-bold flex justify-center items-center">
                GO
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="my-20">
        <div className="max-w-8xl max-xl:px-2 m-auto grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-x-4 gap-y-10">
          {new Array(25).fill(0).map((item, index) => (
            <Product key={index} />
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <button className="border-2 rounded-sm border-black py-3 px-8 font-bold text-lg bg-white active:bg-slate-100 hover:bg-slate-50">
            SEE MORE
          </button>
        </div>
      </div>
      <div className="bg-[#0565bb] w-full ">
        <div className="flex flex-col p-20 py-32 gap-12 relative overflow-hidden max-w-12xl m-auto max-lg:px-2">
          <img
            src={object_01}
            className="absolute top-36 left-[10%] z-0 max-md:left-4 max-sm:-left-[25%]"
          />
          <img src={object_06} className="absolute bottom-28 left-0 z-0" />
          <img src={object_07} className="absolute bottom-28 left-48 z-0" />
          <img
            src={object_02}
            className="absolute top-10 right-60 z-0 max-lg:right-[5%] max-sm:-right-[20%]"
          />
          <img
            src={object_03}
            className="absolute top-28 right-44 z-0 max-lg:right-[0%] max-sm:-right-[25%]"
          />
          <img src={object_04} className="absolute bottom-28 -right-20 z-0" />
          <img src={object_05} className="absolute bottom-28 right-20 z-0" />

          <div className="w-full m-auto flex flex-col justify-center items-center gap-8 px-4 z-30">
            <h1 className="font-bold text-5xl leading-tight tracking-[5px] text-[#fcd32a] max-sm:text-center max-sm:text-4xl">
              BRAND STORY
            </h1>
            <p className="text-lg w-1/2 text-[#fcd32a] text-center max-lg:w-2/3 max-sm:w-full max-sm:m-auto ">
              모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
              아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한
              첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
            </p>
          </div>
          <div className="flex flex-col bg-black pt-3 pb-1 max-w-8xl m-auto gap-3 z-20 items-center ">
            <div className="flex flex-col gap-1 px-2 w-full">
              <div className="border w-full border-[#0565bb]"></div>
              <div className="border w-full border-[#0565bb]"></div>
            </div>
            <div className="flex flex-row gap-1 px-1 max-sm:flex-col">
              <div className="flex-1 bg-[#f86400] flex justify-center items-center">
                <img src={img} className="bg-cover" />
              </div>
              <div className="flex-1">
                <div className="bg-white h-full flex-1 flex flex-col justify-center gap-5 px-10 py-5 max-lg:px-5">
                  <span className="font-extrabold text-2xl">
                    WHAT HAPPENED’S BRAND STORY
                  </span>
                  <p className="">
                    청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일
                    무엇을 풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에
                    광야에서 살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을
                    웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                    인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할
                    것은 목숨을 수 그들을 아름답고 고행을 끝에 설산에서
                    황금시대를 이상을 운다.
                  </p>
                  <button className="w-40 border-2 rounded-sm border-black py-3 px-8 font-extrabold text-lg bg-white active:bg-slate-100 hover:bg-slate-50">
                    SEE MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fccb05] py-32 w-full flex flex-col overflow-hidden">
        <div className="flex flex-col p-32 pt-0 gap-12 relative max-sm:p-10">
          <div className="absolute -top-20 right-10 flex flex-col gap-5">
            <img src={news_object_03} className="size-24 max-sm:size-16" />
            <img src={news_object_02} className="size-28 max-sm:size-20" />
          </div>
          <div className="w-full m-auto flex flex-col justify-center items-center gap-8 px-4 z-30">
            <h1 className="font-bold text-5xl leading-tight tracking-[5px] text-[#110e03] max-sm:text-center max-sm:text-4xl">
              HAPPENED’S ISSUE
            </h1>
            <p className="text-lg w-1/2 text-[#110e03] text-center max-lg:w-2/3 max-sm:w-full max-sm:m-auto">
              모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
              아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한
              첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
            </p>
            <button className="w-40 border-2 rounded-sm border-black py-3 px-8 font-extrabold text-lg bg-transparent active:bg-slate-100 hover:bg-slate-50">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="max-w-12xl m-auto flex flex-wrap flex-row justify-center gap-y-10">
          <div className="bg-[#ff5500] flex flex-col justify-center items-center gap-10 relative">
            <h1 className="text-5xl font-bold text-black w-1/2 text-center">
              WHPN ISSUE
            </h1>
            <img src={news_img_01} className="size-24" />
            <img
              src={news_object_01}
              className="absolute -bottom-14 -right-5 size-32 z-10 max-sm:size-20 max-sm:-bottom-6"
            />
          </div>
          <div className="flex flex-col border border-black relative">
            <img
              src={news_object_04}
              className="absolute -top-10 left-5 max-sm:left-0 max-sm:h-16 max-sm:w-24  max-sm:-top-8"
            />
            <div className="bg-black">
              <h1 className="text-3xl font-bold text-white text-center py-2 max-sm:text-2xl">
                B BRAND
              </h1>
            </div>
            <img src={img_20} className="bg-cover h-full" />
          </div>
          <div className="flex flex-col border border-black">
            <div className="bg-black">
              <h1 className="text-3xl font-bold text-white text-center py-2 max-sm:text-2xl">
                C BRAND
              </h1>
            </div>
            <img src={img_20} className="bg-cover h-full" />
          </div>
          <div className="flex flex-col border border-black relative">
            <div className="bg-[#ff5500]">
              <h1 className="text-3xl font-bold text-white text-center py-2 max-sm:text-2xl">
                D BRAND
              </h1>
            </div>
            <img src={img_20} className="bg-cover h-full" />
            <img
              src={news_object_05}
              className="absolute -bottom-12 -right-5 max-sm:size-20 max-sm:-bottom-10"
            />
          </div>
          <div className="flex flex-col border border-black">
            <div className="bg-black">
              <h1 className="text-3xl font-bold text-white text-center py-2 max-sm:text-2xl">
                E BRAND
              </h1>
            </div>
            <img src={img_20} className="bg-cover h-full" />
          </div>
        </div>
      </div>
      <div className="max-w-12xl m-auto pt-32 pb-72 w-full flex flex-col relative gap-20 overflow-hidden mb-10 max-sm:mb-0">
        <img
          src={video_object_05}
          className="absolute -top-2 left-[10%] max-sm:size-20"
        />
        <img
          src={video_object_07}
          className="absolute top-36 right-[10%] max-sm:size-24 max-sm:-right-[10%] max-sm:top-[2%] max-lg:right-[5%] max-md:-right-[5%]"
        />
        <img
          src={video_object_06}
          className="absolute top-64 right-[16%] max-sm:size-20 max-sm:-right-[8%] max-sm:top-[13%] max-lg:right-[10%] max-md:right-[0%]"
        />
        <img
          src={video_object_04}
          className="absolute top-1/4 -left-[19%] max-sm:size-36 max-sm:top-1/3 max-sm:-left-[15%]"
        />
        <img
          src={video_object_09}
          className="absolute top-1/2 -right-[9%] max-sm:top-1/3 max-sm:size-40 max-sm:-right-[20%]"
        />
        <img
          src={video_object_08}
          className="absolute bottom-0 -right-[10%] max-sm:size-60 max-sm:bottom-[10%] max-sm:-right-[30%] max-lg:size-80"
        />
        <img
          src={video_object_03}
          className="absolute bottom-48 left-[11%] max-sm:-left-[5%] max-sm:size-20 max-sm:bottom-56 max-lg:size-24 max-lg:bottom-52 max-lg:left-[8%]"
        />
        <img
          src={video_object_01}
          className="absolute bottom-0 left-[15%] max-sm:w-40 max-sm:bottom-[8%] max-sm:left-[5%] max-lg:w-80"
        />
        <img
          src={video_object_02}
          className="absolute bottom-36 right-1/3 max-sm:size-10 max-sm:bottom-52"
        />
        <div className="w-full m-auto flex flex-col justify-center items-center gap-8 px-4 z-30">
          <h1 className="font-bold text-5xl leading-tight tracking-[5px] text-[#110e03] max-sm:text-center max-sm:text-4xl">
            HAPPENED’S ISSUE
          </h1>
          <p className="text-lg w-1/2 text-[#110e03] text-center max-lg:w-2/3 max-sm:w-full max-sm:m-auto z-10">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first
          </p>
          <button className="w-40 border-2 rounded-sm border-black py-3 px-8 font-extrabold text-lg bg-transparent active:bg-slate-100 hover:bg-slate-50">
            SEE MORE
          </button>
        </div>
        <div className="flex justify-center items-center z-10">
          <img src="./src/assets/images/video.png" className="" />
        </div>
      </div>
    </main>
  );
};

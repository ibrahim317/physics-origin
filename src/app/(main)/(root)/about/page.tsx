import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex h-4/5 w-full items-center justify-center gap-8">
      <div className="flex w-full flex-col items-center justify-center lg:w-11/12 lg:flex-row">
        <div className="flex h-full w-4/5 items-center justify-center py-3">
          {" "}
          {/*/ left side /*/}
          <Image
            src={"/assets/about.png"}
            width={600}
            height={600}
            alt="Personal Photo"
            className="border-b-2"
          />
        </div>
        <div className="rtl h-full w-4/5">
          {" "}
          {/*/ right side /*/}
          <h1 className="flex items-center">
            <Image
              src={"/assets/user.png"}
              width={30}
              height={30}
              alt=""
              className="m-3"
            />
            <span className="text-xl md:text-3xl">مهنــدس / أحمــد يوســف</span>
          </h1>
          <div className="m-7 flex flex-col gap-3">
            <h1 className="flex items-center">
              <Image
                src={"/assets/open-book.png"}
                width={30}
                height={30}
                alt=""
                className="m-3 opacity-80"
              />
              <span className="text-xl md:text-2xl">
                ثانــــــوية عامــــــة 2015
              </span>
            </h1>
            <h1 className="flex items-center">
              <Image
                src={"/assets/star.png"}
                width={30}
                height={30}
                alt=""
                className="mx-3 opacity-80"
              />
              <span className="md:text-2xl">
                المــركز ال9 علي مستــــوي الجمهــورية
              </span>
            </h1>
            <h1 className="flex items-center">
              <Image
                src={"/assets/graduate.png"}
                width={30}
                height={30}
                alt=""
                className="mx-3 opacity-80"
              />
              <span className="md:text-2xl">
                {" "}
                خريج هنــدسه بترول وتعــدين جامــعة السويــــس 2020
              </span>
            </h1>
            <h1 className="flex items-center">
              <Image
                src={"/assets/teach.png"}
                width={30}
                height={30}
                alt=""
                className="m-3 opacity-80"
              />
              <span className="md:text-2xl">
                خبرة أكثــــر من 7 سنــوات في مجال التــدريس - منذ 2017
              </span>
            </h1>
          </div>
          <h1 className="flex items-center">
            <Image
              src={"/assets/badge.png"}
              width={60}
              height={60}
              alt=""
              className="mx-3"
            />
            <span className="md:text-3xl">
              شعارنا : اتشعــبط في الحــلم... واصــبر
            </span>
            <Image
              src={"/assets/badge.png"}
              width={60}
              height={60}
              alt=""
              className="m-3"
            />
          </h1>
          <h1 className="flex items-center justify-center opacity-60">
            <p className="mx-5 text-xl">للتـــــواصـــــــل</p>
            <a
              href="https://wa.me/201011090037"
              target="_blank"
              className="mx-2"
            >
              <Image
                src={"/assets/whatsapp.png"}
                width={25}
                height={25}
                alt="WhatsApp"
              />
            </a>
            <a href="https://fb.com" target="_blank" className="mx-2">
              <Image
                src={"/assets/facebook.png"}
                width={25}
                height={25}
                alt="WhatsApp"
              />
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;

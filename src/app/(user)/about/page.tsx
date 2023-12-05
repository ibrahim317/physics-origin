import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex justify-center gap-8 items-center h-4/5 w-full">
      <div className="w-11/12 flex justify-center items-center">
        <div className="w-4/5 h-full">
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
        <div className="w-4/5 h-full rtl">
          {" "}
          {/*/ right side /*/}
          <h1 className="flex items-center">
            <Image
              src={"/assets/user.png"}
              width={40}
              height={40}
              alt=""
              className="m-3"
            />
            <span className="text-2xl">مهندس / أحمد يوسف</span>
          </h1>
          <h1 className="flex items-center">
            <Image
              src={"/assets/open-book.png"}
              width={40}
              height={40}
              alt=""
              className="m-3"
            />
            <span className="text-2xl">ثانوية عامة 2015</span>
          </h1>
          <h1 className="flex items-center">
            <Image
              src={"/assets/star.png"}
              width={40}
              height={40}
              alt=""
              className="m-3"
            />
            <span className="text-2xl">المركز ال9 علي مستوي الجمهورية</span>
          </h1>
          <h1 className="flex items-center">
            <Image
              src={"/assets/graduate.png"}
              width={40}
              height={40}
              alt=""
              className="m-3"
            />
            <span className="text-2xl">
              {" "}
              خريج هندسه بترول وتعدين جامعة السويس 2020
            </span>
          </h1>
          <h1 className="flex items-center">
            <Image
              src={"/assets/teach.png"}
              width={40}
              height={40}
              alt=""
              className="m-3"
            />
            <span className="text-2xl">
              خبرة أكثر من 7 سنوات في مجال التدريس - منذ 2017
            </span>
          </h1>
          <h1 className="flex items-center">
            <Image
              src={"/assets/badge.png"}
              width={60}
              height={60}
              alt=""
              className="m-3"
            />
            <span className="text-4xl">شعارنا : اتشعبط في الحلم.. واصبر</span>
            <Image
              src={"/assets/badge.png"}
              width={60}
              height={60}
              alt=""
              className="m-3"
            />
          </h1>
          <h1 className="flex justify-center items-center opacity-60">
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

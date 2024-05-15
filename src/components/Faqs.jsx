"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CirclesBackground } from "./CirclesBackground";
import Image from "next/image";
import loan from "@/images/example.png"
import detail from "@/images/detail.png"
import { Container } from "./Container";
import x from "@/images/close.svg"

const data = [
  {
    id: 1,
    name: "Хэрхэн зээл авах вэ?",
    dec: [
      "ОНЛАЙНААР ХЭРХЭН ЗЭЭЛ АВАХ ВЭ? \n",
      " 1. Юуны өмнө та Ме апп ашиглахыг хүсвэл өөрийн харилцдаг ББСБ эсвэл ХЗХ-д хандаж Mе апп-тай хамтран ажилладаг эсэхийг тодоруулна уу. ",
      "2. Me аппликейшн руу нэвтрэх үйлдэл хийнэ, нэмэх товчин дээр дарж зээл авна.",
      "3. ​Эндээс та өөрийн бүртгэлтэй санхүүгийн байгууллагын олгосон зээлийн эрхийг шалгах боломжтой. ",
      "Зээл авахын тулд:"
    ],
    img: loan
  },
  {
    id: 2,
    name: "Хэрхэн дансны дэлгэрэнгүй мэдээллийг шалгах вэ?",
    dec: ["Хэрэв тухайн санхүүгийн байгууллага дээр аль хэдийн бүртгэлтэй данстай бол me аппликейшн дээр  автоматаар гарч ирэх болно.",

      " 1. ​Me аппликейшн руу нэвтрэх үйлдэл хийнэ. ",
      " 2. ​​Бүртгэлтэй санхүүгийн байгууллагуудын картууд гарч ирнэ. Мөн картын доод талд тухайн санхүүгийн байгууллагад буй таны данс гарч ирнэ.",
      " 3. ​Та данс дээр даран дэлгэрэнгүй мэдээллийн харах боломжтой."],
    img: detail
  }
];

const Blog = () => {
  const [show, setShow] = useState(false);
  const [info, setinfo] = useState();
  const [variants, setVariants] = useState({
    visible: {
      scale: 1,
      boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
      y: 0,
      x: 0,
      cursor: "pointer",
      transition: { duration: 1, type: "spring" },
    },
    hidden: { scale: 1, opacity: 0 },
  });

  // animation for list
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  //  animation for  popup


  useEffect(() => {
    if (innerWidth > 1024) {
      setVariants({
        visible: {
          scale: 1,
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          y: -65,
          x: 300,
          cursor: "pointer",
          transition: { duration: 1, type: "spring" },
        },
        hidden: { scale: 1, opacity: 0 },
      });
    } else {
      setVariants({
        visible: {
          scale: 1,
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          y: 0,
          x: 0,
          cursor: "pointer",
          transition: { duration: 1, type: "spring" },
        },
        hidden: { scale: 1, opacity: 0 },
      });
    }
  }, []);


  return (

    <>
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CirclesBackground color="#d62976" className="absolute left-1/2 top-1/2 -z-10 mt-44 w-[68.125rem] -translate-x-1/2 -translate-y-1/2 stroke-gray-300/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]" />
      </div>
      <section
        id="faqs"
        className="relative overflow-show bg-transparent pt-5 overflow-hidden"
      >
        <Container>
          <h1 style={{
            filter: show ? "blur(1px)" : "none",
          }} className="flex felx-center content-center justify-center text-4xl font-bold text-white">FAQs</h1>
          <hr />
          <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 relative rounded-3xl">
            <motion.ul
              style={{
                filter: show ? "blur(1px)" : "none"
              }}
              className="row d-flex justify-content-center align-items-center"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {data.map((cval) => {
                return (
                  <>
                    <motion.li
                      layout
                      className="col-lg-5"
                      onClick={() => {
                        setShow(!show);
                        setinfo(cval);
                      }}
                      variants={item}
                    >
                      <div
                        className="card position-relative w-100 p-2 flex content-center justify-center "
                        style={{ borderRadius: "2rem" }}
                      >
                        <div className="rounded-2xl mt-8 text-white hover:bg-[#d62976]">
                          <h3
                            className="text-2xl font-semibold text-white p-2"
                          >
                            {cval.name}
                          </h3>
                        </div>

                      </div>
                    </motion.li>
                  </>
                );
              })}
            </motion.ul>
          </div>
          <div className="flex content-center justify-center lg:translate-x-6 xm:translate-x-0 lg:w-1/2 sm:w-full">
            <AnimatePresence>
              {show && (
                <>
                  <motion.div
                    className="card content-center justify-center"

                    variants={variants}
                    animate={show ? "visible" : "hidden"}
                    exit={{ scale: 1, opacity: 0 }}
                  >

                    <div className=' rounded-3xl bg-gradient-to-br from-[#0E0E0E52] from-10% to-[#494548AF] to-24% backdrop-filter backdrop-blur-2xl border-[solid] border-[0.1rem] border-gray-500'>
                      <div
                        onClick={() => {
                          setShow(!show);
                        }} className='rounded-full lg:h-5 lg:w-5 sm:h-8 sm:w-8 bg-gray-700 hover:bg-gray-500 transition ease-in-out text-black absolute top-2 right-2'><Image className=" lg:h-5 sm:h-8 absolute top-0 lg:right-0 sm:right-1" src={x} alt="close" /></div>
                      <div className="m-8 content-center  place-content-center  justify-center ">
                        <h1 className=" text-2xl font-medium card-title text-white text-center p-5"> {info.name}</h1>
                        <p className="card-text text-white text-center p-2">{info.dec}</p>
                        <Image src={info.img} height={300} className="flex justify-self-center px-5 pb-5" alt="Exmple images" />
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </Container>
      </section>
    </>

  );
};

export default Blog;

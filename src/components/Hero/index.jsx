import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import MainButton from "../Atoms/button";

export default function Hero() {
  const priceRef = useRef(null);
  const isInView = useInView(priceRef);

  useEffect(() => {
    const controls = animate(0, 218, {
      duration: 1.2,
      onUpdate(value) {
        priceRef.current.textContent = `$${value.toFixed()}`;
      },
    });

    return () => controls.stop();
  }, [isInView]);

  const containerImage = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.1 },
    },
    hidden: { opacity: 0, x: 0 },
  };

  const containerContent = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { x: 0, opacity: 0 }
  };



  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="flex flex-col gap-[44px] p-5 py-6  min-h-screen h-auto justify-center md:p-0 lg:px-10 lg:pt-10 lg:pb-20 lg:min-h-fit lg:items-center lg:flex-row lg:justify-between lg:gap-5 overflow-hidden">
        <motion.div initial="hidden" animate="visible" variants={containerContent} className="flex flex-col items-center lg:items-start gap-8 lg:w-full lg:gap-[34px]">
          <section className="flex flex-col gap-5 sm:items-center text-center lg:text-left lg:gap-6 lg:items-start">
            <h1 className="text-[42px] leading-[52px] sm:w-4/5 md:text-5xl md:w-4/5 font-bold font-head text-primary-100 lg:text-6xl lg:leading-[70px]">
            Powerful Business Tools For Women in Our Industry
            </h1>
            <p className="text-lg font-body text-black-300 sm:w-4/5">
              Millions of the world's most successful brands trust Shopify to
              sell, ship and process payments anywhere.
            </p>
          </section>
          <div className="w-full flex flex-col sm:w-4/5 md:flex-row justify-center gap-[18px] md:gap-[30px] lg:justify-start lg:w-4/5">
            
            <MainButton primary={false}> ACCESS REALTOR® TOOLS </MainButton>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerImage}
          className="flex items-center justify-center lg:w-full"
        >
          <div className="relative w-fit">
            {/* main card */}
            <img
              className="w-[355px] h-auto object-cover relative sm:w-[550px] md:w-[723px]"
              src="hero.jpg"
              alt="hero"
            />

          </div>
        </motion.div>
      </div>
    </div>
  );
}

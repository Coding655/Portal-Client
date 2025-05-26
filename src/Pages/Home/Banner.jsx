import { easeOut, motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 gap-2">
          <motion.img
            src="/src/assets/15834.jpg"
            className="max-w-md rounded-br-3xl rounded-tl-3xl rounded-tr-3xl border-l-8 border-b-8"
            animate={{ x: [50, 150, 40] }}
            transition={{ duration: 10, delay: 10, repeat: Infinity }}
          />
          <div className="flex gap-2 py-2">
            <motion.img
              src="/src/assets/15891.jpg"
              className="max-w-sm rounded-tl-3xl rounded-tr-3xl rounded-br-3xl border-l-8 border-b-8 h-[220px]"
              animate={{ y: [50, -25, 50] }}
              transition={{ duration: 10, delay: 10, repeat: Infinity }}
            />
            <motion.img
              src="/src/assets/15891.jpg"
              className="max-w-sm rounded-tr-3xl rounded-tl-3xl rounded-br-3xl border-b-8 border-l-8 h-[220px]"
              animate={{ y: [50, -50, 70] }}
              transition={{ duration: 10, delay: 10, repeat: Infinity }}
            />
          </div>
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="font-mono  text-5xl font-bold"
          >
            All Update{" "}
            <motion.span
              animate={{
                color: ["#08ebfa", "#08fa97", "#bf08fa", "#fa3f08"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Jobs
            </motion.span>{" "}
            Are Here!
          </motion.h1>
          <motion.p className="font-thin py-6 uppercase">
            At Job Portal, we’re on a mission to help millions of job seekers
            connect with the right opportunities. Our platform simplifies the
            hiring process by providing powerful search tools, personalized job
            recommendations, and real-time application tracking. We believe
            finding the right job should be as easy as finding your next meal.
          </motion.p>
          <div>
            <h2 className="flex gap-2 font-medium">
              Popular Searches:{" "}
              <span className="link  text-sm text-gray-400">Designer,</span>
              <span className="link text-sm text-gray-400">Web,</span>
              <span className="link text-sm text-gray-400">IOS,</span>
              <span className="link text-sm text-gray-400">Developer,</span>
              <span className="link text-sm text-gray-400">PHP,</span>
              <span className="link text-sm text-gray-400">Senior,</span>
              <span className="link text-sm text-gray-400">Engineer</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

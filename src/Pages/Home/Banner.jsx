import { easeOut, motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 gap-2">
            <motion.img
              src="/src/assets/diverse-people-working-office.jpg"
              className="max-w-sm rounded-lg shadow-2xl rounded-b-xl rounded-l-xl border-t-4 border-r-4"
              animate={{ x: [50, 150, 40] }}
              transition={{ duration: 10, delay: 10, repeat: Infinity }}
            />
          <motion.img
            src="/src/assets/business-job-interview-concept.jpg"
            className="max-w-sm rounded-lg shadow-2xl rounded-t-xl rounded-r-xl border-b-4 border-l-4 h-[220px]"
            animate={{ y: [40, -25, 50] }}
            transition={{ duration: 10, delay: 10, repeat: Infinity }}
          />
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
          <button className="btn btn-primary">Explore Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Calendar } from "lucide-react";

// === CARD COMPONENTS ===
export const Card = ({ className = "", children }) => (
  <div
    className={`bg-[#0b0b0f] border border-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);

export const CardContent = ({ className = "", children }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

// === TIMELINE COMPONENT ===
const ScrollTimeline = ({ events, type }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const newIndex = Math.floor(v * events.length);
      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < events.length
      ) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, events.length, activeIndex]);

  return (
    <div
      ref={scrollRef}
      className="relative min-h-screen w-full bg-black text-white overflow-hidden"
    >
      <div className="text-center py-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{type}</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Scroll to explore the journey
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pb-24">
        <div className="relative mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-800 w-0.5 h-full z-10" />

          {/* Progress Line + Glow */}
          <motion.div
            className="absolute top-0 z-10"
            style={{
              height: progressHeight,
              width: 2,
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "9999px",
              background: `linear-gradient(to bottom, #22d3ee, #6366f1, #a855f7)`,
              boxShadow: `
                0 0 15px rgba(99,102,241,0.5),
                0 0 25px rgba(168,85,247,0.3)
              `,
            }}
          />

          {/* Comet Effect */}
          <motion.div
            className="absolute z-20"
            style={{
              top: progressHeight,
              left: "50%",
              translateX: "-50%",
              translateY: "-50%",
            }}
          >
            <motion.div
              className="w-5 h-5 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(99,102,241,0.5) 40%, rgba(34,211,238,0) 70%)",
                boxShadow: `
                  0 0 15px 4px rgba(168, 85, 247, 0.6),
                  0 0 25px 8px rgba(99, 102, 241, 0.4),
                  0 0 40px 15px rgba(34, 211, 238, 0.2)
                `,
              }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Events */}
          <div className="relative z-20">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-20 py-4 flex-col lg:flex-row ${
                  index % 2 === 0
                    ? "lg:justify-start"
                    : "lg:flex-row-reverse lg:justify-start"
                }`}
              >
                {/* Connector Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                  <motion.div
                    className={`w-6 h-6 rounded-full border-4 bg-black ${
                      index <= activeIndex
                        ? "border-indigo-500"
                        : "border-gray-700"
                    }`}
                    animate={
                      index <= activeIndex
                        ? {
                            scale: [1, 1.3, 1],
                            boxShadow: [
                              "0 0 0px rgba(99,102,241,0)",
                              "0 0 12px rgba(99,102,241,0.6)",
                              "0 0 0px rgba(99,102,241,0)",
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Timeline Card */}
                <motion.div
                  className={`relative z-30 w-full lg:w-[calc(50%-40px)] ${
                    index % 2 === 0
                      ? "lg:mr-[calc(50%+20px)]"
                      : "lg:ml-[calc(50%+20px)]"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: false, margin: "-100px" }}
                >
                  <Card>
                    <CardContent>
                      <div className="flex items-center mb-2 text-indigo-400 font-bold text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold mb-1 text-white">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 font-medium mb-2">
                        {event.subtitle}
                      </p>
                      <p className="text-gray-500 leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollTimeline;

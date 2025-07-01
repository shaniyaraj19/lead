// import { buttonVariants } from "./button";
// import { Label } from "./label";
// import { Switch } from "./switch";
// import { useMediaQuery } from "../../hooks/use-media-query";
// import { cn } from "../../lib/utils";
// import { motion } from "framer-motion";
// import { Check, Star } from "lucide-react";
// import { useState, useRef } from "react";
// import confetti from "canvas-confetti";
// import NumberFlow from "@number-flow/react";

// export function Pricing({
//   plans,
//   title = "Simple, Transparent Pricing",
//   description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
// }) {
//   const [isMonthly, setIsMonthly] = useState(true);
//   const isDesktop = useMediaQuery("(min-width: 768px)");
//   const switchRef = useRef(null);

//   const handleToggle = (checked) => {
//     setIsMonthly(!checked);
//     if (checked && switchRef.current) {
//       const rect = switchRef.current.getBoundingClientRect();
//       const x = rect.left + rect.width / 2;
//       const y = rect.top + rect.height / 2;

//       confetti({
//         particleCount: 50,
//         spread: 60,
//         origin: {
//           x: x / window.innerWidth,
//           y: y / window.innerHeight,
//         },
//         colors: [
//           "#a855f7",
//           "#ec4899", 
//           "#f43f5e",
//           "#64748b",
//         ],
//         ticks: 200,
//         gravity: 1.2,
//         decay: 0.94,
//         startVelocity: 30,
//         shapes: ["circle"],
//       });
//     }
//   };

//   return (
//     <div className="container-custom py-20">
//       {/* <div className="text-center space-y-4 mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
//           {title}
//         </h2>
//         <p className="text-slate-300 text-lg whitespace-pre-line max-w-3xl mx-auto">
//           {description}
//         </p>
//       </div> */}

//       <div className="flex justify-center items-center mb-10 space-x-4">
//         <span className="text-slate-300 font-medium">Monthly</span>
//         <Label className="relative inline-flex items-center cursor-pointer">
//           <Switch
//             ref={switchRef}
//             checked={!isMonthly}
//             onCheckedChange={handleToggle}
//             className="relative"
//           />
//         </Label>
//         <span className="text-slate-300 font-medium">
//           Annual <span className="text-primary-400">(Save 20%)</span>
//         </span>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {plans.map((plan, index) => (
//           <motion.div
//             key={index}
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={
//               isDesktop
//                 ? {
//                     y: plan.isPopular ? -20 : 0,
//                     opacity: 1,
//                     x: index === 2 ? -30 : index === 0 ? 30 : 0,
//                     scale: index === 0 || index === 2 ? 0.94 : 1.0,
//                   }
//                 : { y: 0, opacity: 1 }
//             }
//             viewport={{ once: true }}
//             transition={{
//               duration: 1.6,
//               type: "spring",
//               stiffness: 100,
//               damping: 30,
//               delay: 0.4,
//               opacity: { duration: 0.5 },
//             }}
//             className={cn(
//               "rounded-2xl border p-8 bg-slate-900/50 backdrop-blur-sm text-center flex flex-col justify-between relative",
//               plan.isPopular ? "border-primary-500 border-2 shadow-2xl shadow-primary-500/20" : "border-slate-700",
//               "hover:shadow-xl transition-all duration-300",
//               !plan.isPopular && "mt-5"
//             )}
//           >
//             {plan.isPopular && (
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <div className="bg-gradient-to-r from-primary-500 to-secondary-500 py-2 px-6 rounded-full flex items-center">
//                   <Star className="text-white h-4 w-4 fill-current mr-2" />
//                   <span className="text-white font-semibold text-sm">
//                     Most Popular
//                   </span>
//                 </div>
//               </div>
//             )}
            
//             <div className="flex-1 flex flex-col">
//               <div className={`w-12 h-12 bg-gradient-to-r ${plan.gradient || 'from-primary-500 to-secondary-500'} rounded-xl flex items-center justify-center text-xl mb-4 mx-auto`}>
//                 {plan.icon}
//               </div>
              
//               <p className="text-lg font-bold text-white mb-2">
//                 {plan.name}
//               </p>
              
//               <p className="text-slate-400 text-sm mb-6 leading-relaxed">
//                 {plan.description}/
//               </p>
              
//               <div className="mb-6 flex items-center justify-center gap-x-2">
//                 <span className="text-4xl md:text-5xl font-bold tracking-tight text-white">
//                   <NumberFlow
//                     value={
//                       isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
//                     }
//                     format={{
//                       style: "currency",
//                       currency: "INR",
//                       minimumFractionDigits: 0,
//                       maximumFractionDigits: 0,
//                     }}
//                     formatter={(value) => `₹${value}`}
//                     transformTiming={{
//                       duration: 500,
//                       easing: "ease-out",
//                     }}
//                     willChange
//                     className="font-variant-numeric: tabular-nums"
//                   />
//                 </span>
//                 {plan.period !== "Next 3 months" && (
//                   <span className="text-sm font-semibold leading-6 tracking-wide text-slate-400">
//                     / {plan.period}
//                   </span>
//                 )}
//               </div>

//               <p className="text-xs leading-5 text-slate-400 mb-6">
//                 {isMonthly ? "billed monthly" : "billed annually"}
//               </p>

//               <ul className="mb-8 space-y-3 flex-1">
//                 {plan.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-start gap-3">
//                     <Check className="h-4 w-4 text-primary-400 mt-1 flex-shrink-0" />
//                     <span className="text-left text-slate-300 text-sm">{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               <button
//                 className={cn(
//                   buttonVariants({
//                     variant: "outline",
//                   }),
//                   "group relative w-full gap-2 overflow-hidden text-base font-semibold tracking-tighter py-3",
//                   "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary-500 hover:ring-offset-1",
//                   plan.isPopular
//                     ? "bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white border-primary-500"
//                     : "bg-slate-800 hover:bg-slate-700 text-white border-slate-600 hover:border-slate-500"
//                 )}
//               >
//                 {plan.buttonText}
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { buttonVariants } from "./button";
import { Label } from "./label";
import { Switch } from "./switch";
import { useMediaQuery } from "../../hooks/use-media-query";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

export function Pricing({
  plans = [],
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
}) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef(null);

  const handleToggle = (checked) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["#a855f7", "#ec4899", "#f43f5e", "#64748b"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="container-custom py-20">
      {/* Title and Description (optional) */}
      {/* 
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          {title}
        </h2>
        <p className="text-slate-300 text-lg whitespace-pre-line max-w-3xl mx-auto">
          {description}
        </p>
      </div>
      */}

      {/* Toggle */}
      <div className="flex justify-center items-center mb-10 space-x-4">
        <span className="text-slate-300 font-medium">Monthly</span>
        <Label className="relative inline-flex items-center cursor-pointer">
          <Switch
            ref={switchRef}
            checked={!isMonthly}
            onCheckedChange={handleToggle}
            className="relative"
          />
        </Label>
        <span className="text-slate-300 font-medium">
          Annual <span className="text-primary-400">(Save 20%)</span>
        </span>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Array.isArray(plans) &&
          plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={
                isDesktop
                  ? {
                      y: plan.isPopular ? -20 : 0,
                      opacity: 1,
                      x: index === 2 ? -30 : index === 0 ? 30 : 0,
                      scale: index === 0 || index === 2 ? 0.94 : 1.0,
                    }
                  : { y: 0, opacity: 1 }
              }
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
                type: "spring",
                stiffness: 100,
                damping: 30,
                delay: 0.4,
              }}
              className={cn(
                "rounded-2xl border p-8 bg-slate-900/50 backdrop-blur-sm text-center flex flex-col justify-between relative",
                plan.isPopular
                  ? "border-primary-500 border-2 shadow-2xl shadow-primary-500/20"
                  : "border-slate-700",
                "hover:shadow-xl transition-all duration-300",
                !plan.isPopular && "mt-5"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 py-2 px-6 rounded-full flex items-center">
                    <Star className="text-white h-4 w-4 fill-current mr-2" />
                    <span className="text-white font-semibold text-sm">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              <div className="flex-1 flex flex-col">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${
                    plan.gradient || "from-primary-500 to-secondary-500"
                  } rounded-xl flex items-center justify-center text-xl mb-4 mx-auto`}
                >
                  {plan.icon}
                </div>

                <p className="text-lg font-bold text-white mb-2">
                  {plan.name}
                </p>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="mb-6 flex items-center justify-center gap-x-2">
                  <span className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    <NumberFlow
                      value={
                        isMonthly
                          ? Number(plan.price)
                          : Number(plan.yearlyPrice)
                      }
                      format={{
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }}
                      formatter={(value) => `₹${value}`}
                      transformTiming={{
                        duration: 500,
                        easing: "ease-out",
                      }}
                      willChange
                      className="font-variant-numeric: tabular-nums"
                    />
                  </span>
                  {plan.period !== "Next 3 months" && (
                    <span className="text-sm font-semibold leading-6 tracking-wide text-slate-400">
                      / {plan.period}
                    </span>
                  )}
                </div>

                <p className="text-xs leading-5 text-slate-400 mb-6">
                  {isMonthly ? "billed monthly" : "billed annually"}
                </p>

                <ul className="mb-8 space-y-3 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary-400 mt-1 flex-shrink-0" />
                      <span className="text-left text-slate-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group relative w-full gap-2 overflow-hidden text-base font-semibold tracking-tighter py-3",
                    "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary-500 hover:ring-offset-1",
                    plan.isPopular
                      ? "bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white border-primary-500"
                      : "bg-slate-800 hover:bg-slate-700 text-white border-slate-600 hover:border-slate-500"
                  )}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}

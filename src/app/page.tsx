"use client";

import Link from 'next/link';
import { motion } from "framer-motion";
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/menu'


const socials = [
  { id: 1, name: "Email", image: "/image/email.svg", link: "mailto:support@arieducationportal.com", alt: "Email us" },
  { id: 2, name: "X (Twitter)", image: "/image/x.svg", link: "https://www.x.com/arieducationhub", alt: "Follow us on Twitter" },
  { id: 3, name: "Whatsapp", image: "/image/wa.svg", link: "https://wa.me/+2347036575295", alt: "Chat us on Whatsapp" },
  { id: 4, name: "Instagram", image: "/image/ig.svg", link: "https://instagram.com/arieducationhub", alt: "Follow us on Instagram" }
]

export default function Index() {
  return (
    <div className="relative">
      <div className="">

      </div>
      <div className="my-3 py-3">
        <div className="app-container flex justify-center items-center mx-auto relative pb-3">
          <div className="flex relative flex-wrap min-h-[1px] flex-col justify-center items-center align-middle">
            <div className="text-center">
              <motion.div whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.7 } }} viewport={{ once: true, amount: .5 }} initial={{ opacity: 0, y: 50 }} className="rounded-full bg-sky-200 text-sky-600 px-4 py-1 translate-x-0">
                <p className="uppercase text-sm text-sky-600 px-1 py-0.5 font-roboto">our services</p>
              </motion.div>
            </div>
            <motion.div variants={{
              hidden: { scale: 0, y: 75 },
              visible: { scale: 1, y: 0 }
            }} initial="hidden" animate="visible" transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: false, amount: .5 }} className="text-center mt-2 pt-2 mb-4 pb-4 w-full md:w-3/4 lg:w-2/3">
              <p className="text-rasin-black font-roboto text-2xl md:text-3xl lg:text-5xl font-semibold md:leading-[1.3] lg:leading-[1.3] md:font-bold">We develop solutions for schools</p>
            </motion.div>
          </div>
        </div>
        <div className="pt-4">
          <div className="pt-20 bg-gradient-to-b from-slate-200 from-65% to-slate-50">
            <div className="-mt-32 app-container gap-2 md:gap-4 grid grid-cols-1 md:grid-cols-2 justify-between align-middle">
              <motion.div whileInView={{ scale: 1, x: 0, transition: { delay: 0.2, duration: 0.9 } }} viewport={{ once: true, amount: .4 }} initial={{ scale: 0.1, x: -100 }} className="bg-white shadow-custom rounded-lg py-1.5 px-1 md:py-2 md:px-1.5 text-slate-700 text-sm flex m-0.5 md:m-1.5 mx-1">
                <div className="p-7 md:p-8 transition-all duration-500">
                  <div className="relative text-start flex flex-col md:flex-row justify-between items-start md:flex-grow-1">
                    <div className="mb-5 md:mb-0 md:mr-9 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 transform rotate-[-5deg] text-sky-400" width={768} height={768} viewBox="0 0 14 14">
                        <path className='fill-sky-100' stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.26 12.535L4.795 5.153a.5.5 0 0 1 .633-.633l7.382 2.463a.5.5 0 0 1-.009.951l-3.245 1.02a.5.5 0 0 0-.328.326L8.21 12.526a.5.5 0 0 1-.952.009Zm2.103-3.46l3.468 3.467M.852 3.625l1.673.449M1.562 7.65l1.225-1.224M3.788.69l.448 1.672M7.813 1.4L6.588 2.624"></path>
                      </svg>
                    </div>
                    <div className="">
                      <h3 className="text-xl transition-all duration-500 m-0 mb-[.7em] capitalize text-teal-600 font-semibold font-inter">search engine optimization</h3>
                      <p className="mb-0 text-[15px] leading-7 font-roboto font-medium text-black transform transition-transform duration-500">We essential makes sure that your school website ranks well in search engine results and attracts relevant traffic.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div whileInView={{ scale: 1, x: 0, transition: { delay: 0.2, duration: 0.9 } }} viewport={{ once: true, amount: .4 }} initial={{ scale: 0.1, x: 100 }} className="bg-white shadow-custom rounded-lg py-1.5 px-1 md:py-2 md:px-1.5 text-slate-700 text-sm flex m-0.5 md:m-1.5 mx-1">
                <div className="p-7 md:p-8 transition-all duration-500">
                  <div className="relative text-start flex flex-col md:flex-row justify-between items-start md:flex-grow-1">
                    <div className="mb-5 md:mb-0 md:mr-9 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 transform rotate-[-5deg] text-sky-400" width={768} height={768} viewBox="0 0 32 32">
                        <path className="fill-sky-400" d="M16 4L3 7v2l13-3l13 3V7zm-6 6c-3.227 0-6.375 1.313-6.375 1.313l-.625.28V27h11.281c.348.598.98 1 1.719 1c.738 0 1.371-.402 1.719-1H29V11.594l-.625-.281S25.227 10 22 10c-2.918 0-5.48.98-6 1.188C15.48 10.98 12.918 10 10 10m0 2c1.934 0 4 .625 5 .969v11.125c-1.113-.367-2.941-.875-5-.875c-2.102 0-3.813.484-5 .875V12.969C5.77 12.69 7.8 12 10 12m12 0c2.2 0 4.23.691 5 .969v11.125c-1.188-.39-2.898-.875-5-.875c-2.059 0-3.887.508-5 .875V12.969c1-.344 3.066-.969 5-.969"></path>
                      </svg>
                    </div>
                    <div className="">
                      <h3 className="text-xl transition-all duration-500 m-0 mb-[.7em] capitalize text-teal-600 font-medium md:font-semibold font-inter">Academics portal</h3>
                      <p className="mb-0 text-[15px] leading-7 font-roboto font-medium text-black transform transition-transform duration-500">Streamline result management and student data with our comprehensive academics portal, empowering institutions to efficiently track progress and enhance educational outcome.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.9 } }} viewport={{ once: true, amount: .5 }} initial={{ opacity: 0, y: -70 }} className="bg-white shadow-custom rounded-lg py-2 px-1.5 text-slate-700 text-sm flex m-1.5 mx-1">
                <div className="p-7 md:p-8 transition-all duration-500">
                  <div className="relative text-start flex flex-col md:flex-row justify-between items-start md:flex-grow-1">
                    <div className="mb-5 md:mb-0 md:mr-9 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 transform rotate-[30deg] text-slate-300" width="768" height="768" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m10.986 13.928l.762-2.284l-1.324-3.629a15.694 15.694 0 0 1-.892-.081c-.458-.027-.405-.727.054-.701c0 0 1.403.108 2.239.108c.889 0 2.266-.108 2.266-.108c.458-.027.512.646.054.701c0 0-.461.054-.973.081l2.006 5.966a81.578 81.578 0 0 0-2.599-.061l-.429-1.177l-.403 1.171c-.252.001-.508.01-.761.014m-7.156.393A8.463 8.463 0 0 1 3.5 12c0-1.232.264-2.402.736-3.459l2.036 5.578c.849-.059 1.69-.103 2.526-.137L6.792 8.015c.512-.027.973-.081.973-.081c.458-.054.404-.727-.055-.701c0 0-1.376.108-2.265.108c-.16 0-.347-.004-.547-.01A8.491 8.491 0 0 1 12 3.5c2.213 0 4.228.846 5.74 2.232c-.036-.002-.072-.007-.11-.007c-.835 0-1.427.727-1.427 1.509c0 .701.404 1.293.835 1.994c.323.566.701 1.293.701 2.344c0 .674-.245 1.463-.573 2.51c.301.019.604.043.907.066l.798-2.307c.485-1.213.646-2.182.646-3.044c0-.313-.021-.603-.057-.874A8.469 8.469 0 0 1 20.5 12c0 .807-.128 1.581-.339 2.32c.5.049 1.005.112 1.508.169A9.916 9.916 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 .862.125 1.692.331 2.49c.5-.057 1.002-.12 1.499-.169m14.638 3.167c-1.792 2.184-4.35 3.013-6.468 3.013c-1.876 0-4.551-.698-6.463-3.013c-.585.048-1.174.1-1.769.161C5.571 20.271 8.578 22 12 22c3.422 0 6.429-1.729 8.232-4.351a79.692 79.692 0 0 0-1.764-.161M12 15.01c-3.715 0-7.368.266-10.958.733c.179.41.35.825.506 1.247c3.427-.431 6.91-.679 10.452-.679s7.025.248 10.452.679c.156-.422.327-.836.506-1.246A84.852 84.852 0 0 0 12 15.01" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 transform rotate-[10deg] absolute top-3 text-sky-400" width="768" height="768" viewBox="0 0 48 48">
                        <g fill="none" stroke="silver" strokeWidth="4">
                          <circle cx="22" cy="40" r="4.2" fill="#38BDF8" />
                          <circle cx="26" cy="8" r="4.2" fill="#38BDF8" />
                          <circle cx="36" cy="24" r="4.2" fill="#38BDF8" />
                          <circle cx="12" cy="24" r="4.2" fill="#38BDF8" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M32 24L16 24" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M23 11L15 21" />
                          <path d="M32.9998 27L24.9987 37" />
                        </g>
                      </svg>
                    </div>
                    <div className="">
                      <h3 className="text-xl transition-all duration-500 m-0 mb-[.7em] capitalize text-teal-600 font-medium md:font-semibold font-inter">website control</h3>
                      <p className="mb-0 text-[15px] leading-7 font-roboto font-medium text-black transform transition-transform duration-500">Take charge of the school websites effortlessly with our <span className="font-semibold text-base text-black">WEBSITE CONTROL</span>, providing seamless control and management for enhanced online presence and communication.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.9 } }} viewport={{ once: true, amount: .5 }} initial={{ opacity: 0, y: -70 }} className="bg-white shadow-custom rounded-lg py-2 px-1.5 text-slate-700 text-sm flex m-1.5 mx-1">
                <div className="p-7 md:p-8 transition-all duration-500">
                  <div className="relative text-start flex flex-col md:flex-row justify-between items-start md:flex-grow-1">
                    <div className="mb-5 md:mb-0 md:mr-9 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-slate-300" width={672} height={768} viewBox="0 0 448 512">
                        <path fill="currentColor" d="M96 128a128 128 0 1 0 256 0a128 128 0 1 0-256 0m94.5 200.2l18.6 31l-33.3 123.9l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7h386.6c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9l-33.3-123.9l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2h-39.5c-12.4 0-20.1 13.6-13.7 24.2z"></path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-10 h-10 -right-6 -top-2 text-sky-400 transform -rotate-90" width={768} height={768} viewBox="0 0 16 16">
                        <path fill="currentColor" d="M3 2.75V3h.5a.5.5 0 0 0 .5-.5V2h-.25a.75.75 0 0 0-.75.75M3.75 1h4.5C9.216 1 10 1.784 10 2.75v.543l2.975 2.975A3.5 3.5 0 0 1 14 8.743V14.5a.5.5 0 0 1-1 0V8.743a2.5 2.5 0 0 0-.732-1.768L10 4.707v2.585l.854.854a.5.5 0 0 1-.707.708l-.983-.984l-.034-.034l-1.224-1.224a.738.738 0 1 0-1.043 1.044l1.491 1.49a.5.5 0 0 1 .147.354v1a1 1 0 0 0 .999 1a.5.5 0 0 1 .5.5v1.25A1.75 1.75 0 0 1 8.25 15h-4.5A1.75 1.75 0 0 1 2 13.25V2.75C2 1.784 2.784 1 3.75 1M8 14h.25a.75.75 0 0 0 .75-.75V13h-.5a.5.5 0 0 0-.5.5zm.21-1.972a2 2 0 0 1-.71-1.527v-.794l-.193-.193A2 2 0 1 1 6.066 6q.12-.14.276-.257a1.74 1.74 0 0 1 2.271.161L9 6.292V4h-.5A1.5 1.5 0 0 1 7 2.5V2H5v.5A1.5 1.5 0 0 1 3.5 4H3v8h.5A1.5 1.5 0 0 1 5 13.5v.5h2v-.5a1.5 1.5 0 0 1 1.21-1.472M8.5 3H9v-.25A.75.75 0 0 0 8.25 2H8v.5a.5.5 0 0 0 .5.5M3 13v.25c0 .414.336.75.75.75H4v-.5a.5.5 0 0 0-.5-.5zm3.596-4.197l-.44-.44a1.73 1.73 0 0 1-.508-1.3a1 1 0 1 0 .948 1.74"></path>
                      </svg>
                    </div>
                    <div className="">
                      <h3 className="text-xl transition-all duration-500 m-0 mb-[.7em] capitalize text-teal-600 font-medium md:font-semibold font-inter">staff pay manager</h3>
                      <p className="mb-0 text-[15px] leading-7 font-roboto font-medium text-black transform transition-transform duration-500">Optimize staff salary management with our dedicated payment portal, streamlining the process for efficient and secure transactions, ensuring timely compensation for all employees.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div whileInView={{ scale: 1, y: 0, transition: { delay: 0.6, duration: 0.9 } }} viewport={{ once: true, amount: .5 }} initial={{ scale: 0, y: 50 }} className="bg-white shadow-custom rounded-lg py-2 px-1.5 text-slate-700 text-sm flex m-1.5 mx-1">
                <div className="p-7 md:p-8 transition-all duration-500">
                  <div className="relative text-start flex flex-col md:flex-row justify-between items-start md:flex-grow-1">
                    <div className="mb-5 md:mb-0 md:mr-9 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-sky-400" width={768} height={768} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M5 12a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1m5-10a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1m10 14a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1m-5-8a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1"></path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width={768} height={768} viewBox="0 0 512 512" className="w-14 h-14 absolute top-3 text-slate-200">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="m344 280l88-88m-200 24l64 64M80 320l104-104"></path>
                        <circle cx={456} cy={168} r={24} fill="none" stroke="#999" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32}></circle>
                        <circle cx={320} cy={304} r={24} fill="none" stroke="#999" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32}></circle>
                        <circle cx={208} cy={192} r={24} fill="none" stroke="#999" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32}></circle>
                        <circle cx={56} cy={344} r={24} fill="none" stroke="#999" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32}></circle>
                      </svg>
                    </div>
                    <div className="">
                      <h3 className="text-xl transition-all duration-500 m-0 mb-[.7em] capitalize text-teal-600 font-medium md:font-semibold font-inter">analytics gateway</h3>
                      <p className="mb-0 text-[15px] leading-7 font-roboto font-medium text-black transform transition-transform duration-500">Elevate data-driven decision-making with our analytics gateway, seamlessly integrating student and staff data with school sites for insightful performance analysis and strategic planning.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div whileInView={{ scale: 1, y: 0, transition: { delay: 0.6, duration: 0.9 } }} viewport={{ once: true, amount: .5 }} initial={{ scale: 0, y: 50 }} className="bg-white shadow-custom rounded-lg py-2 px-1.5 text-slate-700 text-sm flex m-1.5 mx-1">
                <div className="p-[35px] transition-all duration-500">
                  <div className="relative text-start flex flex-col md:flex-row justify-between items-start md:flex-grow-1">
                    <div className="mb-5 md:mb-0 md:mr-9 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 transform rotate-[-14deg] text-slate-200" width={768} height={768} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m-7.5 12a2.5 2.5 0 1 1 0-5a2.47 2.47 0 0 1 1.5.512c-.604.456-1 1.173-1 1.988s.396 1.532 1 1.988a2.47 2.47 0 0 1-1.5.512m4 0a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></path>
                      </svg>
                      <svg className="w-14 h-14 transform rotate-[5deg] absolute top-6 text-sky-400" xmlns="http://www.w3.org/2000/svg" width={768} height={768} viewBox="0 0 20 20">
                        <path fill="currentColor" d="M6.803 18.998c-.194-.127 3.153-7.16 3.038-7.469c-.116-.309-3.665-1.436-3.838-1.979c-.174-.543 7.007-8.707 7.196-8.549c.188.158-3.129 7.238-3.039 7.469c.091.23 3.728 1.404 3.838 1.979c.111.575-7.002 8.676-7.195 8.549"></path>
                      </svg>
                    </div>
                    <div className="">
                      <h3 className="text-xl transition-all duration-500 m-0 mb-[.7em] capitalize text-teal-600 font-medium md:font-semibold font-inter">E-Payment system</h3>
                      <p className="mb-0 text-[15px] leading-7 font-roboto font-medium text-black transform transition-transform duration-500">Simplify school fee payments with our e-payment portal, offering a convenient and secure platform for hassle-free transactions, ensuring smooth financial management for students and parents.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <motion.div whileInView={{ opacity: 1, x: 0, transition: { delay: 1, duration: 0.9 } }} viewport={{ once: true, amount: .5 }} initial={{ opacity: 0, x: -70 }} className="fixed hidden lg:block transition-all duration-500 hover:scale-[1.1] focus:scale-[0.8] rotate-[270deg] left-0 md:left-4 top-1/2 transform -translate-y-1/2 w-auto z-[1000]">
        <a href="" className="underline text-rasin-black text-sm font-inter">Try Demo Account</a>
      </motion.div>
    </div>
  )
}

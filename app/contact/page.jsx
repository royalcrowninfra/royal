'use client'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import { useState } from "react";
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/images/header/reviewsBackground.jpg')" }}>
      <div className="min-h-screen bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="min-h-screen bg-navy-900 text-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-cover bg-center"
            style={{ backgroundImage: "url('/images/contact//contactBackground.jpg')" }}
          >
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="container mx-auto w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] px-4">
              {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wider sm:tracking-widest text-center">
            Future Panvel Development
          </h1> */}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto py-16 sm:py-24 md:py-32 lg:py-48 xl:py-12 px-4">
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="text-center">
              {/* You can uncomment this if you want to add a title */}
              {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wider sm:tracking-widest">
              Future Panvel Development
            </h1> */}
            </motion.div>
          </motion.div>

          <div className="px-6 py-24 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Sales</h2>
              <p className="mt-2 text-white text-lg leading-8 text-muted-foreground">Please feel free to ask anything</p>
            </div>

            <form className="mx-auto mt-16 max-w-xl sm:mt-20">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="mt-2.5">
                  <Input type='name' id='firstname' placeholder='First Name' className="bg-white bg-opacity-20 text-white placeholder-gray-300" />
                </div>

                <div className="mt-2.5">
                  <Input type='name' id='lastname' placeholder='Last Name' className="bg-white bg-opacity-20 text-white placeholder-gray-300" />
                </div>

                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <Input type='phone' id='Phone' placeholder='Contact-number' className="bg-white bg-opacity-20 text-white placeholder-gray-300" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <Input type='email' id='Company' placeholder='Email Address' className="bg-white bg-opacity-20 text-white placeholder-gray-300" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <Textarea placeholder='Type Your Message Here..' className="bg-white bg-opacity-20 text-white placeholder-gray-300" />
                  </div>
                </div>

                <Switch.Group as="div" className="flex items-center justify-between">
                  <Switch.Label className="text-sm leading-6 text-gray-300">
                    Agree to privacy policy
                  </Switch.Label>
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-primary' : 'bg-gray-200',
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </Switch.Group>

                <div className="sm:col-span-2 mt-10">
                  <Button type='submit' className='flex w-full items-center justify-center px-8 py-3 text-white bg-primary bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-300'>
                    Let's Talk <TbArrowUpRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
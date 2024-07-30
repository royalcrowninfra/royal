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
          className="container mx-auto py-16 sm:py-24 md:py-32 lg:py-48 xl:py-64 px-4">
          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wider sm:tracking-widest text-center">
            Future Panvel Development
          </h1> */}
        </motion.div>
      </motion.div>
      <div className="px-6 py-24 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Sales</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">Please feel free To ask anything</p>
        </div>

        <form className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="mt-2.5">
              <Input type='name' id='firstname' placeholder='First Name' />
            </div>

            <div className="mt-2.5">
              <Input type='name' id='lastname' placeholder='Last Name' />
            </div>

            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <Input type='phone' id='Phone' placeholder='Contact-number' />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <Input type='email' id='Company' placeholder='Email Address' />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <Textarea placeholder='Type Your Message Here..' />
              </div>
            </div>

            <Switch.Group as="div">
              <div>
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? 'bg-primary' : 'bg-gray-200',
                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    area-hidden='true'
                    className={classNames(
                      agreed ? 'translate-x-3.5' : 'translate-x-0',
                      'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'

                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className='text-sm leading-6 text-gray-600'>
                by selecting this, you agree to out{' '}
                <a href="#" className="font-semibold text-primary">
                  privacy&nbsp;policy
                </a>
              </Switch.Label>
            </Switch.Group>

            <div className="mt-10">
              <Button type='submit' className='flex w-full items-center px-8 py-3 text-white rounded-full
            shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2'>
                Lets Talk <TbArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

          </div>
        </form>
      </div>
    </div >
  )
}
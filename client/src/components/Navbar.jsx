import {Link, Route} from 'react-router-dom'
import { Disclosure} from '@headlessui/react'
import {MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(props) {

  return (
    <Disclosure as="nav" className=" top-0 z-50 bg-stone-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16 ">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden ">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
                
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                      
                    <Link className="bg-zinc-100 text-black hover:bg-zinc-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/"><h1>Home</h1></Link>
                    <Link className="bg-zinc-100 text-black hover:bg-zinc-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/about"><h1>About</h1></Link>
                    <Link className="bg-zinc-100 text-black hover:bg-zinc-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to='/portfolio'>Portfolio</Link>
                    <Link className="bg-zinc-100 text-black hover:bg-zinc-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to='/contact'>Contact Me</Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <div>
                    <h1> Yexenia Flores</h1>
                </div>
                <div>
                  <Link  to='/' className="bg-zinc-100 text-black hover:bg-zinc-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                </div>
                <div>
                  <Link  to='/about' className="bg-zinc-100 text-black hover:bg-zinc-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                </div>
                <div>
                <Link className="bg-zinc-100 text-black hover:bg-zinc-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to='/portfolio'>Portfolio</Link>
                </div>
                <div>
                <Link className="bg-zinc-100 text-black hover:bg-zinc-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to='/contact'>Contact Me</Link>
                </div>
        
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
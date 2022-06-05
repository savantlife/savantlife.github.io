import { Disclosure} from '@headlessui/react'
import { Link } from "react-router-dom";
import {MenuIcon, XIcon } from '@heroicons/react/outline'
import savantlogo from './assets/savantlogo.png'
import Navigate from './Navigate';
const navigation = [
  { name: 'Home', href: '/', current: false, indent: false },
  { name: 'Savant', href: '/products', current: false, indent: false },
  { name: 'MetaWeaver', href: '/products/metaweaver', current: false, indent: false },
  { name: 'Science', href: '/science', current: false, indent: false },
  { name: 'About Us', href: '/aboutus', current: false, indent: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-savant-home z-10">
      {({ open }) => (
        <>
          <div className="mx-auto px-3 mx-3 sm:px-6 pt-2 lg:px-10 bg-savant-home z-10">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-savant-info-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-12 w-auto mix-blend-lighten"
                    src={savantlogo}
                    alt="Savant"
                  />
                  <img
                    className="hidden lg:flex h-12 w-auto"
                    src={savantlogo}
                    alt="Savant"
                  />
                </div>
                <div className="hidden flex-end absolute inset-y-0 right-0 flex items-center sm:block sm:ml-6">
                  <div className="flex space-x-4 my-4">
                  {navigation.map((item) => (
                     <Link to={item.href}>
                       <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                     </Link>
                   
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.indent ? 'pl-6 text-white hover:bg-savant-info-2' : 'text-white hover:bg-savant-info-2 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

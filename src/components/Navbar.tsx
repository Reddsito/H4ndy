import { HomeIcon } from '@heroicons/react/20/solid'
import { BriefcaseIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
      <div className="md:container md:mx-md md:mx-auto fixed bottom-0 left-0 right-0 bg-pink-300 md:mb-5 md:rounded-md">
        <HomeIcon width={24} />
        <BriefcaseIcon width={24}/>
        <BoltIcon width={24} />
      </div>
    )
   
}

export default Navbar

import Card from '@component/app/components/card'
import Contact from '@component/app/components/contact'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
        <Contact />
        <Card title={"Contact Us"} description={"From 9:00am - 7:00pm"} />
    </div>
  )
}

export default ContactPage
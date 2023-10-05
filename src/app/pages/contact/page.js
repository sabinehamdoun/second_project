import Card from '@component/app/components/card'
import Contact from '@component/app/components/contact'
import Footer from '@component/app/components/footer'
import Header from '@component/app/components/header'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <Header />
      <Contact />
      <Card title={"Contact Us"} description={"From 9:00am - 7:00pm"} />
      <Footer />
    </div>
  )
}

export default ContactPage
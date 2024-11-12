/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Tagline = ({text1, text2, fontSizeClass }) => (
   <h1 className={`py-10 font-light ${fontSizeClass}`}>
      <span className="block ">{text1}</span>
      <span className="block">{text2}</span>
   </h1>
);

const Main = () => {
  return (
   <section className="max-screen-xl px-4 py-12 mx-auto text-center">

    <div className="container mx-auto px-4">
      <Tagline 
      text1 = "Hello"
      text2 = "World"
      fontSizeClass = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold"
      />
    </div>

   </section>
  )
}

export default Main
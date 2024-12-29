import BlogCards from '@/components/BlogCards'
import Brand from '@/components/Brand'
import Hero from '@/components/Hero'
import Popular from '@/components/Popular'
import Story  from '@/components/Story'
import React from 'react'
import Asked from '@/components/Asked'

const page = () => {
  return (
    <div className="h-full">
      <Hero/>
      <BlogCards/>
      <Story/>
      <Popular/>
      <Asked/>
    </div>
  )
}

export default page

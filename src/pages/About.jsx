import React from 'react'
import MainLayout from '../components/_layout/MainLayout'
import Brief from '../components/about/brief/Brief'
import Process from '../components/about/process/Process'
import Quality from '../components/about/quality/Quality'

const About = () => {
  return (
    <section>
      <Brief />
      <Process />
      <Quality />
    </section>
  )
}

export default About
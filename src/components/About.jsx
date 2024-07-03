import developerActivity from '../assets/images/undrawe.png'

const About = () => {
  return (
    <section id='about' className="h-screen">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center h-full">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center h-full justify-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Jelimo.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a passionate software developer with a love for creating amazing web applications. With a keen eye for design and a drive for perfection, I strive to build solutions that are not only functional but also visually appealing. From front-end interfaces to back-end logic, I enjoy every step of the development process and continuously seek to learn and improve my skills.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:charityjelimo893@gmail.com"
              className="inline-flex text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded text-lg">
              Get in touch
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              My projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded mt-20 w-200"
            alt="developer activity"
            src={developerActivity}
            style={{ maxHeight: '75vh' }}
          />
        </div>
      </div>
    </section>
  )
}

export default About

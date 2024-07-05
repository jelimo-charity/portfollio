import developerActivity from '../assets/images/me.png';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${developerActivity})` }}
    >
      <div className="container mx-auto px-5 py-10 md:py-20 flex flex-col md:flex-row items-center justify-center h-full">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center justify-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-600">
            Hi, I'm Jelimo.
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            I am a passionate software developer with a love for creating amazing web applications.
            <br />
            With a keen eye for design and a drive for perfection, I strive to build solutions that are not only functional but also
            <br />
            visually appealing. From front-end interfaces to back-end logic, I enjoy every step of the development process and
            <br />
            continuously seek to learn and improve my skills.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:charityjelimo893@gmail.com"
              className="inline-flex text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded text-lg"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              My projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

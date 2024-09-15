import Typical from 'react-typical';
import developerActivity from '../assets/images/portfolioImg.jpg'; // Make sure this path is correct

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-cover bg-center bg-gray-900 bg-no-repeat flex justify-center items-center"
    >
      <div className="container mx-auto px-5 md:py-20 flex flex-col md:flex-row items-center justify-center h-full">
        {/* Image container */}
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img
            src={developerActivity}
            alt="Charity Jelimo"
            className="rounded-full w-60 h-60 object-cover"
          />
        </div>
        {/* Text content */}
        <div className="lg:flex-grow md:w-2/3 flex flex-col md:items-start md:text-left items-center text-center justify-center">
          <h1 className="title-font text-center sm:text-4xl text-3xl mb-4 font-medium text-white">Charity Jelimo</h1>
          <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-green-700">
            <Typical
              steps={[" A Software Engineer", 1000, "A Full-stack developer", 2000, "A Tech lover!", 3000]}
              loop={Infinity}
              wrapper="span"
            />
          </h1>
          <nav>
            <div className="grid grid-flow-col gap-4">
             
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/charity-jelimo-66b128220/" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-700 hover:text-green-700 transition-colors duration-200"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.5c0-1.106-.894-2-2-2s-2 .894-2 2v5.5h-3v-11h3v1.528c1.226-1.317 3.013-1.528 4.5-1.528 2.485 0 4.5 2.015 4.5 4.5v6z"
                  />
                </svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/jelimo-charity" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-700 hover:text-green-700 transition-colors duration-200"
                >
                  <path
                    d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.467-2.382 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.398 3.005-.403 1.02.005 2.047.137 3.005.403 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.771.839 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.371.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576 4.765-1.586 8.2-6.083 8.2-11.384 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
             
              {/* Gmail */}
              <a href="mailto:charityjelimo893@gmail.com" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-700 hover:text-green-700 transition-colors duration-200"
                >
                  <path
                    d="M12 12.713l11.995-7.199c-.396-.66-1.089-1.114-1.995-1.114h-20c-.907 0-1.599.454-1.995 1.114l11.995 7.199zm12-3.291v10.065c0 .9-.7 1.636-1.6 1.636h-20c-.9 0-1.6-.736-1.6-1.636v-10.065l10.615 6.398c.217.131.509.217.784.217s.568-.086.784-.217l10.617-6.398z"
                  />
                </svg>
              </a>
               {/* Twitter */}
               <a href="https://x.com/Jelimo1Jelimo" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-700 hover:text-green-700 transition-colors duration-200"
                >
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default About;

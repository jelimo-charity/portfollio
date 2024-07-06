// import React from 'react'
const Skills = () => {
    const skills = [ 'HTML','CSS','React.js', 'JavaScript','Azure','Express.js','MSSQL','Tailwindcss', 'TypeScript', 'Postresql', 'Hono', 'Drizzle ORM','SCSS']
  return (
    <section id="skills" className='pt-20'>
      <div className="container px-5 py-10 mx-auto ">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-green-700 mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          These skills demonstrate my ongoing pursuit of learning and striving for excellence in every aspect of my work.
           Discover the key competencies that shape my professional profile.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2  w-100">
              <div className="bg-base-200 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

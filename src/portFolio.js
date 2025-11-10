import React from 'react';

export default function Folio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 antialiased">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold">Joseph Nishanth J</h1>
          <p className="text-sm text-gray-600">Front-End / UI Developer</p>
        </div>
        <nav className="space-x-4 hidden md:flex">
          <a href="#about" className="text-sm hover:underline">About</a>
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#skills" className="text-sm hover:underline">Skills</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Hi, I'm Joseph 👋</h2>
              <p className="text-gray-700 mb-4">A motivated Front-End / UI Developer who creates responsive, accessible, and efficient web interfaces using React, Tailwind CSS, and modern tooling.</p>

              <div className="flex gap-3 flex-wrap">
                <a href="#projects" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  View Projects
                </a>
                <a href="#contact" className="inline-block px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Get in touch
                </a>
              </div>
            </div>

            <div className="mt-6 md:mt-0 flex justify-center">
              <div className="w-44 h-44 rounded-full bg-gradient-to-br from-indigo-400 to-pink-400 flex items-center justify-center text-white text-lg font-semibold">
                J N
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-700 mb-4">
            I am a Front-End / UI Developer with ~6 months of hands-on experience building responsive and interactive web applications. 
            I focus on creating reusable components, improving performance, and delivering polished user experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <h4 className="font-medium mb-2">Experience</h4>
              <p className="text-sm text-gray-600">
                UI Trainee • Intern • Software Engineer — worked on React & Angular projects; collaborated in Agile teams; used Git for version control.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Education</h4>
              <p className="text-sm text-gray-600">
                B.Sc Computer Science — St. Joseph's College (2016-2019)
                <br />MCA — St. Joseph's College (2019-2022)
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Contact</h4>
              <p className="text-sm text-gray-600">
                Phone: +91 8248791651<br />
                Email: josephvgw@gmail.com<br />
                Location: Trichy, Tamil Nadu, India
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-8">
          <h3 className="text-xl font-semibold mb-6">Selected Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-lg mb-2">Task Management System</h4>
              <p className="text-sm text-gray-600 mb-3">Tech: React.js, JavaScript, REST API, CSS, Bitbucket</p>
              <p className="text-gray-700 mb-4">
                A task tracking app implementing CRUD operations, status filters (To Do, In Progress, Done), and responsive UI with reusable components and React Hooks for state management.
              </p>           
            </article>
            <article className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-lg mb-2">Travel Management System</h4>
              <p className="text-sm text-gray-600 mb-3">Tech: React.js, MUI, API Integration</p>
              <p className="text-gray-700 mb-4">
                A travel portal for viewing, searching, and booking travel packages. Includes booking forms, routing, API data handling, form validation, and polished UI/UX.
              </p>
             
            </article>

            <article className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-lg mb-2">WatchOPS</h4>
              <p className="text-sm text-gray-600 mb-3">Tech: JavaScript, React.js, Redux, MUI</p>
              <p className="text-gray-700">
                A project with reusable components, global state using Redux, and API integrations. Focused on UI consistency, error handling, and responsive behaviour.
              </p>
            </article>

            <article className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-lg mb-2">Additional Work / Intern Projects</h4>
              <p className="text-gray-700">
                Worked on CRUD Operations (UI design & implementation), style guides, and component libraries. Familiar with Tailwind CSS and Bootstrap for styling.
              </p>
            </article>
          </div>
        </section>

        <section id="skills" className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h3 className="text-xl font-semibold mb-6">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow">
              <h5 className="font-medium mb-2">Languages</h5>
              <p className="text-sm text-gray-600">HTML, CSS, JavaScript, Python (basic)</p>
            </div>
            <div className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow">
              <h5 className="font-medium mb-2">Frameworks & Libraries</h5>
              <p className="text-sm text-gray-600">React, Redux, Django (basic)</p>
            </div>          
            <div className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow">
              <h5 className="font-medium mb-2">Styling</h5>
              <p className="text-sm text-gray-600">Tailwind CSS, Material UI, Bootstrap, Ant Design</p>
            </div>
            <div className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow">
              <h5 className="font-medium mb-2">Tools</h5>
              <p className="text-sm text-gray-600">Git, GitHub, Bitbucket, VSCode</p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white rounded-2xl shadow-md p-8 mb-12">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-700 mb-6">
            Interested in collaborating? I'm open to front-end roles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Get in touch</h4>
              <p className="text-sm text-gray-600 mb-1">Phone: +91 8248791651</p>
              <p className="text-sm text-gray-600 mb-1">Email: josephvgw@gmail.com</p>
              <p className="text-sm text-gray-600">Location: Trichy, Tamil Nadu, India</p>
            </div>    
          </div>
        </section>
      </main>
    </div>
  );
}
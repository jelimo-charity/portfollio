const Contact = () => {
  return (
    <section id="contact" className="">
      <footer className="footer footer-center bg-gray-900 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a href="#about" className="link link-hover text-green-700">About me</a>
          <a href="#projects" className="link link-hover text-green-700">Projects</a>
          <a href="#skills" className="link link-hover text-green-700">Skills</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/Jelimo1Jelimo" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-gray-400">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                </path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/charity-jelimo-66b128220/" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-gray-400">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.5c0-1.106-.894-2-2-2s-2 .894-2 2v5.5h-3v-11h3v1.528c1.226-1.317 3.013-1.528 4.5-1.528 2.485 0 4.5 2.015 4.5 4.5v6z">
                </path>
              </svg>
            </a>
            <a href="https://github.com/jelimo-charity" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-gray-400">
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.467-2.382 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.398 3.005-.403 1.02.005 2.047.137 3.005.403 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.771.839 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.371.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576 4.765-1.586 8.2-6.083 8.2-11.384 0-6.627-5.373-12-12-12z">
                </path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p className="text-gray-400">All rights reserved.</p>
          <p className="text-gray-400">Copyright © {new Date().getFullYear()} - Charity Jelimo.</p>
        </aside>
      </footer>
    </section>
  );
};

export default Contact;

export const About = () => {

    const FrontendSkills = ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"];
    const ProgrammingLanguages = [ "C","C++","Java","JavaScript","Python"];
    const Tools = ["Git","GitHub","VS Code","Postman","Chrome DevTools","Jupyter Notebook","Linux"];
    const Data =  ["Pandas","Numpy","Matplotlib","Seaborn","Data Analysis","Data Visualization"];

    return <section id='about' className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Hello! I'm a passionate developer with a love for creating dynamic and responsive web applications. With a strong foundation in JavaScript, React, and modern web technologies, I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you can find me exploring the latest tech trends or contributing to open-source projects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {FrontendSkills.map((skill) => (
                                <span key={skill} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {ProgrammingLanguages.map((skill) => (
                                <span key={skill} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Tool</h3>
                        <div className="flex flex-wrap gap-2">
                            {Tools.map((skill) => (
                                <span key={skill} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Data Analytics</h3>
                        <div className="flex flex-wrap gap-2">
                            {Data.map((skill) => (
                                <span key={skill} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>BTech in Computers and Communication Engineering - MIT Manipal(2024-2028)</strong>
                        </li>
                        <li>
                            Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Web Development, Object-Oriented Programming, System Design.
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold">Contributor at GSSOC'25 and Hacktoberfest'25 (Aug'25-Oct'25)</h4>
                            <p>Contributed to open-source projects, collaborating with a global community of developers to enhance software solutions and gain practical experience in real-world coding environments.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold">Working Committee Member at IECSE Manipal (Oct'24-Present)</h4>
                            <p>
                                Organizing coding events, workshops, and hackathons to foster a vibrant tech community within the institute, while also providing mentorship to budding developers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
};
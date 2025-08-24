

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "Python"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ipsa eum deserunt dicta similique mollitia eos repellat aliquam ex cum! Blanditiis quia aspernatur sed illo vel cum accusamus hic perspiciatis!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id at voluptatibus veritatis facilis, aperiam nobis! Vero velit ex nulla impedit enim? Expedita, dolorem dignissimos? Assumenda, iusto? Dolorem nemo temporibus doloribus! </strong> - XYZ University
                  (2016-2020)
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate rerum porro at esse laboriosam, voluptatem, modi omnis officia vel minus neque impedit quia reiciendis harum aspernatur illum tempore inventore. Possimus!
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit odit molestias libero architecto. Reprehenderit nisi nostrum, rem doloribus ea eius molestias optio sed? Quos fuga sequi est porro velit. (2020 - Present){" "}
                  </h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, itaque dolore? Voluptatum deleniti odit modi! Provident illum voluptates, dignissimos, reiciendis repellendus maxime unde magnam fugiat aliquid sit officiis corporis recusandae.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iusto distinctio necessitatibus aperiam pariatur beatae quam nihil provident, nemo aspernatur totam consectetur atque maiores aut ab dignissimos iste? Voluptates, vero. (2019){" "}
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In rerum, velit dolore consequatur corrupti itaque eveniet! Ipsam magnam qui numquam amet! Officia cupiditate commodi quaerat, ipsa sint aliquid voluptatum voluptatibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
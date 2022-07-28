import type { NextPage } from 'next';

const Startup: NextPage = () => {
  return (
    <>
      <header>
        <div className="absolute w-full fade-in">
          <section>
            <div className="flex justify-between items-center w-full sm:py-8">
              <img src="img/startup/logo.png" className="w-20" />
              <nav className="text-xl text-white">
                <a href="#" className="hover:underline">
                  Get Early Access
                </a>
              </nav>
            </div>
          </section>
        </div>
      </header>
      <div className="bg-banner-bk text-white text-center md:text-left">
        <section className="fade-in">
          <div className="h-32" />
          <h1 className="pady">
            A New Way
            <br />
            To Start Business
          </h1>
          <p className="pady">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            dolor adipisci
            <br />
            dicta dolores qui quaerat iure cumque perspiciatis mollitia
            accusamus ex aliquam et.
          </p>
          <div className="pady">
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="h-8 sm:h-16" />
        </section>
      </div>
      <div className="text-center">
        <section>
          <div className="py-16">
            <h2>Smartest protection for your site</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div
              data-aos={'fade-up'}
              data-aos-delay={0}
              data-aos-duration={1000}
              data-aos-once={true}
            >
              <img
                src={'img/startup/smart-protect-1.jpg'}
                className="mx-auto"
              />
              <h4>Anti-Spam</h4>
              <div className="pad">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet porro his no his deleniti
                </p>
              </div>
            </div>
            <div
              data-aos={'fade-up'}
              data-aos-delay={200}
              data-aos-duration={1000}
              data-aos-once={true}
            >
              <img
                src={'img/startup/smart-protect-2.jpg'}
                className="mx-auto"
              />
              <h4>Phishing Detect</h4>
              <div className="pad">
                <p className="text-lg">
                  Ne error antiopam usu. Sed vocen concludaturque ea
                </p>
              </div>
            </div>
            <div
              data-aos={'fade-up'}
              data-aos-delay={400}
              data-aos-duration={1000}
              data-aos-once={true}
            >
              <img
                src={'img/startup/smart-protect-3.jpg'}
                className="mx-auto"
              />
              <h4>Smart Scan</h4>
              <div className="pad">
                <p className="text-lg">
                  {' '}
                  Et usu ocurreret elaboraret doctus prodesse assueverit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-gradient text-center md:text-left">
        <section>
          <div className="py-12 lg:py-24">
            <div className="flex flex-wrap-reverse">
              <div className="w-full md:w-1/2">
                <div
                  data-aos={'fade-right'}
                  data-aos-delay={0}
                  data-aos-duration={1000}
                  data-aos-once={true}
                >
                  <h2 className="pt-6 md:pt-0">Take a look inside</h2>
                  <div className="pady">
                    <p>
                      Te iisque labitur eos, nec sale argumentum scribentur no,
                      augue disputando in vim. Erat fugit sit at, ius lorem
                      deserunt deterruisset no.
                    </p>
                  </div>
                  <div className="pady-thin">
                    <button className="btn-secondary">Learn More</button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div
                  data-aos={'fade-left'}
                  data-aos-delay={0}
                  data-aos-duration={1000}
                  data-aos-once={true}
                >
                  <img src="/img/startup/feature-1.png" className="mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-primary text-center md:text-left">
        <section>
          <div className="py-8 lg:py-16">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                <div
                  data-aos={'fade-right'}
                  data-aos-delay={500}
                  data-aos-duration={1000}
                  data-aos-once={true}
                >
                  <img
                    src="/img/startup/feature-2.png"
                    className="mx-auto sm:mx-0"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div
                  data-aos={'fade-left'}
                  data-aos-delay={500}
                  data-aos-duration={1000}
                  data-aos-once={true}
                >
                  <h2 className="pt-6 md:pt-0">Safe and reliable</h2>
                  <div className="pady">
                    <p>
                      Duo suas detracto maiestatis ad, commodo lucilius invenire
                      nec ad, eum et oratio disputationi. Falli lobortis his ad
                    </p>
                  </div>
                  <div className="pady-thin">
                    <button className="btn-secondary">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="text-center">
        <section className="p-0">
          <div className="p-0 sm:p-6 pb-16 sm:pb-16">
            <div className="pt-16 sm:py-16 px-6">
              <h2>Check our Pricing</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 text-center">
              <div
                data-aos={'fade-right'}
                data-aos-delay={0}
                data-aos-duration={1000}
                data-aos-once={true}
              >
                <div className="py-16">
                  <h5>STARTUP</h5>
                  <div className="pt-4">
                    <span className="font-bold">$</span>
                    <span className="text-6xl font-bold">0</span>
                    <span className="font-bold">/ MO.</span>
                  </div>
                  <div className="pad">
                    <p>Up to 5 Documents</p>
                    <p>Up to 3 Reviews</p>
                    <p>5 Team Members</p>
                    <p>Limited Support</p>
                  </div>
                  <div className="pad">
                    <button className="btn">Get Free</button>
                  </div>
                </div>
              </div>
              <div
                data-aos={'fade-up'}
                data-aos-delay={0}
                data-aos-duration={1000}
                data-aos-once={true}
                className="bg-secondary text-white"
              >
                <div className="py-16">
                  <h5>PREMIUM</h5>
                  <div className="pt-4">
                    <span className="font-bold">$</span>
                    <span className="text-6xl font-bold">10</span>
                    <span className="font-bold">/ MO.</span>
                  </div>
                  <div className="pad">
                    <p>Up to 15 Documents</p>
                    <p>Up to 10 Reviews</p>
                    <p>25 Team Members</p>
                    <p>Limited Support</p>
                  </div>
                  <div className="pad">
                    <button className="btn-primary">Get Free</button>
                  </div>
                </div>
              </div>
              <div
                data-aos={'fade-left'}
                data-aos-delay={0}
                data-aos-duration={1000}
                data-aos-once={true}
              >
                <div className="py-16">
                  <h5>PROFESSIONAL</h5>
                  <div className="pt-4">
                    <span className="font-bold">$</span>
                    <span className="text-6xl font-bold">30</span>
                    <span className="font-bold">/ MO.</span>
                  </div>
                  <div className="pad">
                    <p>Unlimited Documents</p>
                    <p>Unlimited Reviews</p>
                    <p>Unlimited Members</p>
                    <p>Unlimited Support</p>
                  </div>
                  <div className="pad">
                    <button className="btn">Get Free</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="text-center bg-gray-200">
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="pad flex justify-center items-center">
              <img src="/img/startup/client-1.png" />
            </div>
            <div className="pad flex justify-center items-center">
              <img src="/img/startup/client-2.png" />
            </div>
            <div className="pad flex justify-center items-center">
              <img src="/img/startup/client-3.png" />
            </div>
            <div className="pad flex justify-center items-center">
              <img src="/img/startup/client-4.png" />
            </div>
            <div className="pad flex justify-center items-center">
              <img src="/img/startup/client-5.png" />
            </div>
            <div className="pad flex justify-center items-center">
              <img src="/img/startup/client-6.png" />
            </div>
          </div>
        </section>
      </div>
      <div className="bg-contact-bk text-white text-center sm:text-left">
        <section>
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <h2 className="pb-6">Contact Us</h2>
                <p className="pady">
                  Te iisque labitur eos, nec sale argumentum scribentur, augue
                  disputando in vim. Erat fugit sit at, ius lorem.
                </p>
                <p className="pady-thin">
                  Email : company@email.com
                  <br />
                  Phone : 489-613-4200
                  <br />
                  Address : 987 Black Avenue, Lehi, Utah
                </p>
              </div>
              <div className="pt-6 sm:pt-0">
                <div className="grid grid-cols-2 gap-4 text-primary">
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Your Name
                    </label>
                    <input name="name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Your Email
                    </label>
                    <input name="email" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-bold mb-2">
                      Message
                    </label>
                    <textarea name="email" />
                  </div>
                  <div className="col-span-2">
                    <button className="btn-primary w-full">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="text-white">
        <div className="bg-secondary">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex justify-center md:justify-start items-center">
                Copyright &copy; {new Date().getFullYear()} Entry Level
                Developer Training
              </div>
              <div className="flex justify-center md:justify-end items-center pt-6 md:pt-0">
                <div className="pad-thin">
                  <a
                    href="https://www.youtube.com/channel/UCHo5peSzuo7c19MB69QJYdA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-social-media"
                  >
                    <i className="fab fa-youtube-square" />
                  </a>
                </div>
                <div className="pad-thin">
                  <a
                    href="https://www.instagram.com/entryleveldevelopertraining"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-social-media"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="pad-thin">
                  <a
                    href="https://twitter.com/entryleveldeve1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-social-media"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Startup;

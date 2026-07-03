export function Home() {
  return (
    <div className="Home">
      <div className="left">
        <span className="hello"> Hello, I'm</span>

        <h1>
          adil <span>lamkadem</span>
        </h1>

        <h2>
          Front-End <span>Developer</span>
        </h2>

        <p>
          I am a passionate front-end developer with a strong focus on creating
          visually appealing and user-friendly web applications. With a solid
          foundation in HTML, CSS, and JavaScript, I strive to deliver seamless
          user experiences and responsive designs. I am constantly learning and
          staying up-to-date with the latest industry trends to ensure that my
          work meets the highest standards of quality and innovation.
        </p>

        <div className="buttons">
          <button className="hire">Hire Me</button>

          <button className="cv">Download CV</button>
        </div>
      </div>

      <div className="right">
        <img src="/ADIL.jpeg" alt="profile" />
      </div>
    </div>
  );
}

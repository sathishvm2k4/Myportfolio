import { Mail, GitBranch, Link2 } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="contact-page">
      <div className="contact-grid">
        <div className="contact-panel">
          <div className="contact-copy">
            <span>say hi to the team</span>
            <h1>Contact Us</h1>
            <p>feel free to contact us and we will get back to you as soon as we can.</p>
          </div>

          <form
            className="contact-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label>
              name
              <input type="text" name="name" placeholder="name" />
            </label>

            <label>
              email address
              <input type="email" name="email" placeholder="email address" />
            </label>

            <label>
              tell us all about it
              <textarea name="message" placeholder="tell us all about it" rows="4" />
            </label>

            <button type="submit" className="contact-submit">
              send
            </button>
          </form>

          <div className="contact-links">
            <a href="mailto:contact@satishvm.com"><Mail /> Email</a>
            <a href="https://github.com/sathishvm2k4"><GitBranch /> GitHub</a>
            <a href="https://linkedin.com/in/sathishvm2k4"><Link2 /> LinkedIn</a>
          </div>
        </div>

        <div
          className="contact-photo"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/cartoon.jpg)`,
          }}
        />
      </div>
    </section>
  );
}

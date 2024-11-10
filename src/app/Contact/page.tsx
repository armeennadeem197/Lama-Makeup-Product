import styles from './styles.module.css';

function Contact() {
  return (
    <section className={styles.contactContainer}>
      <div className={`${styles.contactUs}`}>
        {/* Map Section */}
        <div className={`${styles.map}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.1574236808624!2d67.18157891116421!3d24.892611343877906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339e1488a7319%3A0x7a620bd385c286fd!2sMoinabad%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729345765078!5m2!1sen!2s"
            width="90%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>

        {/* Contact Information and Form Section */}
        <div className={styles.contactSec}>
          <div className={styles.contactData}>
            <div className={styles.contact1}>
              <span>Information</span>
              <h2>Get in Touch</h2>
              <p>
                As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.
              </p>
            </div>

            {/* Location Details */}
            <div className={styles.contact2}>
              <h4>Pakistan</h4>
              <p>195 E Parker Square Dr, Parker, CO 801</p>
              <p>+43 982-314-0958</p>
            </div>
            <div className={styles.contact3}>
              <h4>America</h4>
              <p>109 Avenue Léon, 63 Clermont-Ferrand</p>
              <p>+12 345-423-9893</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.form}>
            <div className={styles.form1}>
              <input type="text" placeholder="Name" aria-label="Name" />
              <input type="text" placeholder="Email" aria-label="Email" />
            </div>
            <div className={styles.form2}>
              <input type="text" placeholder="Message" aria-label="Message" />
            </div>
            <button type="button">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import React from "react";
import schoolImg from "../images/Schoollogo.png";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* School Info Section */}
        <div style={styles.section}>
          <div style={styles.subsection}>
            <div style={styles.imgsection}>
              <img src={schoolImg} alt="DBTR Logo" style={styles.logo} />
            </div>
            <div style={styles.parasection}>
              <h3 style={styles.schoolName}>DBTR National Higher Secondary School</h3>
              <p style={styles.tagline}><strong>Virtuousness is Life</strong></p>
              <p style={styles.description}>
                Established in 1901, DBTR is situated in the temple town of Mayiladuthurai.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="#admissions" style={styles.link}>Admissions</a></li>
            <li><a href="#alumni" style={styles.link}>Alumni Association</a></li>
            <li><a href="#donate" style={styles.link}>Donate</a></li>
            <li><a href="#events" style={styles.link}>Events</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Contact</h4>
          <p style={styles.contactText}>DBTR NHSS, Mahadhana Street, Kamarajar Salai,</p>
          <p style={styles.contactText}>Mayiladuthurai, Tamilnadu – 609001</p>
          <p style={styles.contactText}>+91.436.422.3272</p>
          <p>
            <a href="mailto:contact@nationalhighschool.in" style={styles.link}>
              contact@nationalhighschool.in
            </a>
          </p>
        </div>
        <div style={styles.donateSection}>
        <p style={styles.donateText}>Big or small, you can make an impact.</p>
        <button style={styles.donateButton}>Donate ♥</button>
      </div>
       
      </div>

      {/* Donate Section */}
     

      {/* Bottom Footer Section */}
      <div style={styles.bottomFooter}>
        <div style={styles.bottompara}>
        <p style={styles.footerText}>© DBTR 2023, All Rights Reserved | Sitemap</p>
        <p style={styles.footerText}>Designed by PEPPER SQUARE</p>
        </div>

        <div style={styles.mainsocialicons}>
        <div style={styles.socialIcons}>
          <a href="#" style={styles.icon} aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" style={styles.icon} aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" style={styles.icon} aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" style={styles.icon} aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" style={styles.icon} aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#f8f8f8",
    padding: "20px 0",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "10px",
  },
  section: {
    // flex: "1 1 30%",
    gap:"40px",
    minWidth: "200px",
  },
  subsection: {
    display: "flex",
    alignItems: "center",
    gap: "40px",
  },
  logo: {
    maxWidth: "80px",
    marginBottom: "10px",
  },
  schoolName: {
    fontSize: "18px",
    marginBottom: "5px",
    color: "#333",
  },
  tagline: {
    color: "#0078D7",
    fontSize: "14px",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    lineHeight: "1.6",
    marginTop: "10px",
  },
  sectionTitle: {
    fontSize: "16px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "14px",
    lineHeight: "1.8",
  },
  contactText: {
    fontSize: "14px",
    lineHeight: "1.6",
  },
  donateSection: {
    justifyContent: "space-between",
    alignItems: "center", 
    gap: "10px", 
    marginTop: "10px",
  },
  donateText: {
    fontSize: "16px",
  },
  donateButton: {
    backgroundColor: "#ff4d4f",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
  },
  bottomFooter: {
    display:"flex",
    justifyContent:"space-between",
    marginTop: "20px",
    marginLeft:"400px",
    maxWidth:"1000px"
  },
  footerText: {
    fontSize: "12px",
    margin: "5px 0",
    color: "#666",
  },
  socialIcons: {
    marginTop: "10px",
  },
  icon: {
    margin: "0 8px",
    fontSize: "20px",
    textDecoration: "none",
    color: "#333",
  },
};

export default Footer;

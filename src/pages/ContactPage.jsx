// import React, { useState } from "react";
// import { Mail, MapPin, Github, Send, CheckCircle2 } from "lucide-react";
// import Tag from "../components/Tag";
// import RevealOnScroll from "../components/RevealOnScroll";
// import { CONTACT } from "../data/content";
// import "../styles/AboutContactFooter.css";

// export default function ContactPage() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [sent, setSent] = useState(false);

//   const onChange = (e) =>
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

//   const onSubmit = (e) => {
//     e.preventDefault();
//     setSent(true);
//   };

//   return (
//     <section className="section page-top">
//       <div className="container container-narrow">
//         <RevealOnScroll>
//           <Tag>// contact</Tag>
//           <h1 className="page-title">Let's work together</h1>
//           <p className="page-sub">
//             Open to freelance projects and full-time opportunities. Send a
//             message and I'll get back to you.
//           </p>
//         </RevealOnScroll>

//         <RevealOnScroll className="contact-grid" delay={100}>
//           <div className="contact-info">
//             <div className="contact-info-row">
//               <Mail size={18} />
//               <span>{CONTACT.email}</span>
//             </div>
//             <div className="contact-info-row">
//               <MapPin size={18} />
//               <span>{CONTACT.location}</span>
//             </div>
//             <div className="contact-info-row">
//               <Github size={18} />
//               <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
//                 {CONTACT.githubHandle}
//               </a>
//             </div>
//           </div>

//           <form className="contact-form" onSubmit={onSubmit}>
//             {sent ? (
//               <div className="form-success">
//                 <CheckCircle2 size={28} className="text-accent" />
//                 <h3>Message noted</h3>
//                 <p>
//                   Your form has been submitted successfully. Thank you for reaching out! 
//                   I will get back to you as soon as possible {CONTACT.email}.
//                 </p>
//               </div>
//             ) : (
//               <>
//                 <label className="field">
//                   <span>Name</span>
//                   <input
//                     name="name"
//                     value={form.name}
//                     onChange={onChange}
//                     placeholder="Your name"
//                     required
//                   />
//                 </label>
//                 <label className="field">
//                   <span>Email</span>
//                   <input
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={onChange}
//                     placeholder="you@email.com"
//                     required
//                   />
//                 </label>
//                 <label className="field">
//                   <span>Message</span>
//                   <textarea
//                     name="message"
//                     value={form.message}
//                     onChange={onChange}
//                     placeholder="Tell me about your project..."
//                     rows={5}
//                     required
//                   />
//                 </label>
//                 <button className="btn btn-primary btn-block" type="submit">
//                   Send message <Send size={15} />
//                 </button>
//               </>
//             )}
//           </form>
//         </RevealOnScroll>
//       </div>
//     </section>
//   );
// }








import React, { useState } from "react";
import { Mail, MapPin, Github, Send, CheckCircle2 } from "lucide-react";
import Tag from "../components/Tag";
import RevealOnScroll from "../components/RevealOnScroll";
import { CONTACT } from "../data/content";
import "../styles/AboutContactFooter.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      access_key: process.env.REACT_APP_WEB3FORMS_KEY, 
      name: form.name,
      email: form.email,
      message: form.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const resData = await response.json();

      if (resData.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" }); 
      } else {
        alert("Something went wrong: " + resData.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please check internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section page-top">
      <div className="container container-narrow">
        <RevealOnScroll>
          <Tag>// contact</Tag>
          <h1 className="page-title">Let's work together</h1>
          <p className="page-sub">
            Open to freelance projects and full-time opportunities. Send a
            message and I'll get back to you.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="contact-grid" delay={100}>
          <div className="contact-info">
            <div className="contact-info-row">
              <Mail size={18} />
              <span>{CONTACT.email}</span>
            </div>
            <div className="contact-info-row">
              <MapPin size={18} />
              <span>{CONTACT.location}</span>
            </div>
            <div className="contact-info-row">
              <Github size={18} />
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                {CONTACT.githubHandle}
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            {sent ? (
              <div className="form-success">
                <CheckCircle2 size={28} className="text-accent" />
                <h3>Message noted</h3>
                <p>
                  Your form has been submitted successfully. Thank you for reaching out! 
                  I will get back to you as soon as possible {CONTACT.email}.
                </p>
              </div>
            ) : (
              <>
                <label className="field">
                  <span>Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@email.com"
                    required
                  />
                </label>
                <label className="field">
                  <span>Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                  />
                </label>
                <button 
                  className="btn btn-primary btn-block" 
                  type="submit" 
                  disabled={loading}
                >
                  {loading ? "Sending..." : <>Send message <Send size={15} /></>}
                </button>
              </>
            )}
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}

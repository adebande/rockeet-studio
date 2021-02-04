import Link from 'next/link'
import Head from 'next/head'
import emailjs from 'emailjs-com'
import {useState} from 'react'
import Fade from 'react-reveal/Fade'
import Loader from "react-loader-spinner";

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    setLoading(true);

    emailjs.sendForm(process.env.EMAILJS_SERVICEID, process.env.EMAILJS_TEMPLATEID, e.target, process.env.EMAILJS_USERID)
      .then((result) => {
          console.log(result.text);
          setLoading(false)
          setMessageSent(true);
      }, (error) => {
          console.log(error.text);
          setLoading(false)
          window.alert("Une erreur est survenue lors de la soumission du formulaire. Veuillez réessayer ultérieurement.");
      });
  }

  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);

  let submit;
  if(!loading) {
    submit = 
      <input type="submit" value="Envoyer" className="btn-submit"/>
  } else {
    submit = 
      <Loader
        type="Puff"
        color="#f4f4f4"
        height={50}
        width={50}
        timeout={3000}
      />
  }

  let form;
  if (!messageSent) {
    form = 
    <form className="contact-form" onSubmit={sendEmail}>
      <div id="contact-title">
        <h4>Demandez un devis</h4>
        <p>C'est gratuit et ça n'engage à rien. Nous vous répondons dans les 24h !</p>
      </div>
      <input type="hidden" name="contact_number" className="contact-field" />
      <input type="text" name="user_name" placeholder="Nom *" className="contact-field" required/>
      <input type="email" name="user_email" placeholder="E-mail *" className="contact-field" required/>
      <input type="text" name="user_company" placeholder="Entreprise" className="contact-field" />
      <textarea name="message" placeholder="Description de votre projet *" className="contact-message" required/>
      <div id="form-buttons">
        <Link href="/"><img src="/back.svg" alt=""/></Link>
        {submit}
      </div>
    </form>;
  } else {
    form = 
          <Fade>
          <div id="message-sent">
            <p>Merci pour votre message ! <br/>
            Nous répondrons à votre demande au plus vite.</p>
            <Link href="/"><a className="btn btn-back">Retour à l'accueil</a></Link>
          </div>
          </Fade>
  }

  return (
    <div>
      <Head>
        <title>Rockeet Studio - Développement Web - Création de sites internet</title>
        <meta name="description" content="Roocket.io est une agence spécialisée dans le développement de sites internet, applications web et mobile."></meta>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div id="contact-container">
          <div id="logo">
            <Link href="/"><img src="/rockeet-logo.svg" alt=""/></Link>
          </div>

          <div className="flex-row">
            {form}    
            <img src="/website.svg" alt="" id="website"/>
          </div>
      </div>
    </div>
  )
}
export default Contact

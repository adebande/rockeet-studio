import Link from 'next/link'
import Head from 'next/head'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

const Index = () => (
  <div>
    <Head>
        <title>Rockeet Studio - Développement Web - Création de sites internet</title>
        <meta name="description" content="Rockeet.io est une agence spécialisée dans le développement de sites internet, applications web et mobile."></meta>
        <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <div id="header">
        <div id="logo">
            <Link href="/"><img src="/rockeet-logo.svg" alt=""/></Link>
        </div>

        <div id="cta">
            <div id="cta-left">
                <img src="/header.svg" alt=""/>
            </div>
            <div id="cta-right">
                <h1>Création de sites Internet</h1>
                <p>Boostez votre visibilité en ligne grâce à un site web professionnel, moderne et optimisé.</p>
                <Link href="/contact"><a className="btn">Devis gratuit</a></Link>
                <div className="glow"></div>
            </div>
        </div>
        <div id="scroll-down">
            <AnchorLink href="#strengths"><img src="/down.svg" alt="" id="down" className="bounce"/></AnchorLink>
        </div>
    </div>

        <div id="strengths">
        <Zoom>
            <div className="strength">
              <div className="icon-container">
                    <img src="/rocket.svg" alt=""/>
                </div>
                <span className="strength-text">
                    <h2>Un référencement optimal</h2>
                    <p>Une visibilté accrue sur les moteurs de recherches grâce aux techniques de <strong>SEO</strong> (Search Engine Optimization)</p>
                </span>
            </div>
            <div className="strength">
                <div className="icon-container">
                    <img src="/mobile.svg" alt=""/>
                </div>
                <span className="strength-text">
                    <h2>Un site adapté à tous les appareils</h2>
                    <p>Les utilisateurs tablette et mobile constituent une grande majorité du trafic. Le <strong>responsive design</strong> de nos sites permet un affichage adapté à tous les écrans.</p>
                </span>
            </div>
            <div className="strength">
                <div className="icon-container">
                    <img src="/service.svg" alt=""/>
                </div>
                <span className="strength-text">
                    <h2>Un professionnel à l'écoute</h2>
                    <p>Nous vous une grande disponibilité et un suivi assidu tout au long du déroulement de votre projet, en s'adaptant au mieux à vos demandes.</p>
                </span>
            </div>
            <AnchorLink href="#prestations" className="scroll-section"><img src="/down.svg" alt="" id="down"/></AnchorLink>
            </Zoom>
        </div>
        <div id="prestations">
            <h4>Prestations</h4>
            <Fade bottom>
            <div id="prestations-container">
                <div className="prestation">
                    <img src="/vitrine.svg" alt=""/>
                    <h3>Site vitrine</h3>
                    <p><strong>Rockeet Studio</strong> vous accompagne et vous conseille dans votre démarche de visibilité sur Internet</p>
                </div>
                <div className="prestation">
                    <img src="/e-commerce.svg" alt=""/>
                    <h3>Site E-commerce</h3>
                    <p>Nous réalisons votre <strong>boutique en ligne</strong> en se basant sur les CMS reconnus <strong>Prestashop</strong> et <strong>Woocommerce</strong></p>
                </div>
                <div className="prestation">
                    <img src="/app.svg" alt=""/>
                    <h3>Application Web</h3>
                    <p>Prestations de développement d'applications sur mesure pour faciliter la gestion de votre activité</p>
                </div>
            </div>
            <div>
                <Link href="/contact"><a className="btn">Estimer mon projet</a></Link>
            </div>
            </Fade>
        </div>
  </div>
)

export default Index

import styles from './App.module.scss';
import { ReactComponent as ArrowDownSvg } from './svg/arrow-down.svg';
import { ReactComponent as AutomatorSvg } from './svg/automator.svg';
import { ReactComponent as CashAppSvg } from './svg/cashapp.svg';
import { ReactComponent as CheckmarkSvg } from './svg/checkmark.svg';
import { ReactComponent as DiagramTextSvg } from './svg/diagram-text.svg';
import { ReactComponent as DigramSvg } from './svg/diagram.svg';
import { ReactComponent as DiscordSvg } from './svg/discord.svg';
import { ReactComponent as DoordashSvg } from './svg/doordash.svg';
import { ReactComponent as FigmaTextSvg } from './svg/figma-text.svg';
import { ReactComponent as FigmaSvg } from './svg/figma.svg';
import { ReactComponent as FormsSvg } from './svg/forms.svg';
import { ReactComponent as HeartSvg } from './svg/heart.svg';
import { ReactComponent as InstacartSvg } from './svg/instacart.svg';
import { ReactComponent as LogoSvg } from './svg/logo.svg';
import { ReactComponent as MagicImageSvg } from './svg/magic-image.svg';
import { ReactComponent as MagicianSvg } from './svg/magician.svg';
import { ReactComponent as MagicSpellSvg } from './svg/magicSpell.svg';
import { ReactComponent as MetaSvg } from './svg/meta.svg';
import { ReactComponent as MultiColorSvg } from './svg/multicolor.svg';
import { ReactComponent as NetflixSvg } from './svg/netflix.svg';
import { ReactComponent as PaperSvg } from './svg/paper.svg';
import { ReactComponent as PencilSvg } from './svg/pencil.svg';
import { ReactComponent as PricingSvg } from './svg/pricing.svg';
import { ReactComponent as PrototyperIconSvg } from './svg/prototyper-icon.svg';
import { ReactComponent as PrototyperSvg } from './svg/prototyper.svg';
import { ReactComponent as PublicbetaSvg } from './svg/public-beta.svg';
import { ReactComponent as RedditSvg } from './svg/reddit.svg';
import { ReactComponent as RobinhoodSvg } from './svg/robinhood.svg';
import { ReactComponent as SnapchatSvg } from './svg/snapchat.svg';
import { ReactComponent as SparklesSvg } from './svg/sparkles.svg';
import { ReactComponent as SpellsSvg } from './svg/spells.svg';
import { ReactComponent as TextBlockLeftSvg } from './svg/text-block-left.svg';
import { ReactComponent as TwitterSvg } from './svg/twitter.svg';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <a href="/" className={styles.logo}>
            <LogoSvg />
            <h1>
              Magican <span>beta</span>
            </h1>
          </a>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Install</a>
              </li>
              <li>
                <a href="/">Account</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <main>
        <section className={styles.sectionPurple}>
          <div className={styles.container}>
            <hgroup>
              <h1>Every little thing it does is magic</h1>
              <p>A magical design tool for Figma powered by AI.</p>
            </hgroup>
            <a href="/" className={styles.buttonFancy}>
              <FigmaSvg />
              Install on Figma
            </a>
            <picture className={styles.picture}>
              <img src="/img/magic-hero.jpg" alt="" />
            </picture>
            <div className={styles.flex}>
              <a href="/" className={styles.buttonGhost}>
                <HeartSvg />
                2.1k likes
              </a>
              <a href="/" className={styles.buttonGhost}>
                <ArrowDownSvg />
                53.3k installs
              </a>
            </div>
            <div className={styles.flex}>
              <p className={styles.madebyWorkswith}>
                Made by
                <a href="/">
                  <DiagramTextSvg />
                </a>
              </p>
              <p className={styles.madebyWorkswith}>
                Works with
                <a href="/">
                  <FigmaTextSvg />
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.sectionBlack}>
          <div className={styles.container}>
            <hgroup className={styles.headerWithIcon}>
              <h1 className={styles.iconHeading}>
                <SpellsSvg />
                Wave Your Magic Wand
              </h1>
              <p>
                Design with the power of AI to do everything from copywriting to
                generating unique icons from text.
              </p>
            </hgroup>
            <ul className={styles.iconList}>
              <li>
                <a href="#">
                  <PencilSvg />
                  Text to Icon
                </a>
              </li>
              <li>
                <a href="#copywriting">
                  <TextBlockLeftSvg />
                  Copywriting
                </a>
              </li>
              <li>
                <a href="#text-to-image">
                  <PaperSvg />
                  Text to Image
                </a>
              </li>
              <li>
                <a href="#">+ more</a>
              </li>
            </ul>
            <picture className={styles.picture}>
              <img
                id="#copywriting"
                src="/img/magic-copy-min.gif"
                alt="magic-copy-min.gif"
              />
              <img
                id="#text-to-image"
                src="img/magic-image-min.gif"
                alt="magic.gif"
              />
            </picture>
          </div>
        </section>

        <section className={styles.sectionGrey}>
          <div className={styles.container}>
            <hgroup>
              <h1 className={styles.iconHeading}>
                <SparklesSvg />
                Cast Magic Spells
              </h1>
              <p>
                Each magic spell works alongside you to expand your creativity
                and imagination as you design.
              </p>
            </hgroup>

            <ul className={styles.iconList}>
              <li>
                <a href="#magic-icon">
                  <FormsSvg />
                  Magic Icon
                </a>
              </li>
              <li>
                <a href="#magic-copy">
                  <TextBlockLeftSvg />
                  Magic Copy
                </a>
              </li>
              <li>
                <a href="#magic-image">
                  <MagicImageSvg />
                  Magic Image
                </a>
              </li>
              <li>
                <a href="#">+ more</a>
              </li>
            </ul>
            <div className={styles.pictureTransparent}>
              <MagicSpellSvg />
            </div>
            <picture className={styles.picturesMagicSpell}>
              <img id="#magic-icon" src="img/magic-icon.jpg" alt="magic.icon" />
              {/* <img id="#magic-copy" src="img/magic-copy.jpg" alt="magic-copy" />
              <img id="#magic-img" src="img/magic-image.jpg" alt="magic-img" /> */}
            </picture>
          </div>
        </section>
        <section className={styles.sectionBlack}>
          <div className={styles.container}>
            <hgroup>
              <h1 className={styles.iconHeading}>
                <DigramSvg />
                Made by Diagramm
              </h1>
              <p>Be more creative with smarter design tools.</p>
            </hgroup>
            <div className={styles.apps}>
              <div className={styles.automator}>
                <MultiColorSvg />
                <h2>Automator</h2>
                <p>There's an automation for that</p>
                <a href="/">Learn more</a>
                {/* <div className={styles.appPreview}>
                  <AutomatorSvg />
                </div> */}
              </div>
              <div className={styles.prototyper}>
                <PrototyperIconSvg />
                <h2>Prototyper</h2>
                <p>Powerful prototyping with code</p>
                <a href="/">Learn more</a>
                {/* <div className={styles.appPreview}>
                  <PrototyperSvg />
                </div> */}
              </div>

              <p className={styles.designers}>
                Used by designers on these teams:
              </p>
            </div>
            <ul className={styles.designerIcons}>
              <li>
                <TwitterSvg />
              </li>
              <li>
                <NetflixSvg />
              </li>
              <li>
                <SnapchatSvg />
              </li>
              <li>
                <RobinhoodSvg />
              </li>
              <li>
                <MetaSvg />
              </li>
              <li>
                <DoordashSvg />
              </li>
              <li>
                <CashAppSvg />
              </li>
              <li>
                <InstacartSvg />
              </li>
              <li>
                <RedditSvg />
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.sectionPurple}>
          <div className={styles.container}>
            <hgroup>
              <PricingSvg />
              <h1 className={styles.iconHeading}>Pricing</h1>
            </hgroup>
          </div>
          <div className={styles.pricing}>
            <PublicbetaSvg />
            <h3>Public beta</h3>
            <br />
            <strong>Free</strong>
            <p>1 license, unlimited use.</p>
            <ul className={styles.pricingList}>
              <li>Early access</li>
              <li>All magic spells</li>
              <li>All future updates</li>
            </ul>
            <button className={styles.buttonTry}>
              <a href="/">Try for free</a>
            </button>
          </div>
        </section>
        <section>
          <div className={styles.container}>
            <hgroup>
              <h1 className={styles.iconHeading}>Get Started with Magician</h1>
              <p>A magical design tool for Figma powered by AI.</p>
              <a href="/">
                <FigmaSvg />
                Install on Figma
              </a>
              <a href="/">
                <DiscordSvg />
                Join the Discord
              </a>
            </hgroup>
          </div>
          <footer>
            <hgroup>
              <MagicianSvg />
              <h1>Magician</h1>
            </hgroup>
            <p>Support</p>
            <p>
              <a href="/"></a>Contact
            </p>
            <p>Privacy</p>
            <p>Terms</p>
          </footer>
        </section>
      </main>
    </div>
  );
}

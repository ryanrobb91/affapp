import HeaderBar from '../../components/header/headerBar'
import FooterBar from '../../components/header/headerBar'
import ZipCodeEntry from '../section/zipCodeEntry'
import OutlineOfServices from '../section/outlineOfServices'
import OurStory from '../section/ourStory'
import Contact from '../section/contact'

function LandingPage() {
  return (
    <div className="LandingPage">
        <div className="Header">
            <HeaderBar />
        </div>
        <div className="Body">
            <ZipCodeEntry />
            <OutlineOfServices />
            <OurStory />
            <Contact />
        </div>
        <div className="Footer">
            <FooterBar />
        </div>
    </div>
  );
}

export default LandingPage;

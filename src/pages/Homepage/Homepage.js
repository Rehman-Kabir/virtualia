import React from 'react'
import OrderArt from '../../assets/artworkorder.png'
import Submit from '../../assets/submit.png'
import Mint from '../../assets/mint.png'
import Sale from '../../assets/sale.png'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import PopularNFT from '../../components/PopularNFT/PopularNFT'
import TopSeller from '../../components/TopSeller/TopSeller'
import Popular from '../../components/Popular/Popular'
import './homepage.css'

const Homepage = () => {
  return (
    <>
    <Header/>
    <div className="main-homepage-bg">
      <section className="home-hero">
        <div className="container">
          <div className="home-hero-wrap">
            <div className="home-hero-content">
              <h1>Discover, Create &amp; Sell Top Notch 3D Vr/Ar NFTs</h1>
              <ul>
                <li>Trade the building blocks of our virtual worlds in VirtualiaWorlds with beautiful, crafted 3D VRAR NFTs for the Hybrid, Capitalia, Futuria, Mysteria, Enigma, and MarsColonia worlds</li>
                <li>Build 3D commerce stores, products, real estate luxury assets, jewelry, supercars, private jets, schools, touristic landmarks, skycrapers, landscapes and arts of your dream</li>
                <li>Body scan yourself and sell your unique Non-Fungible Self (NFSs) </li>
                <li>Avatarize your Virtualian profile with highly realistic Non-Fungible People (NFPs)</li>
              </ul>
            </div>
            <div className="home-socials">
              <a href="/" className="social-icon">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.10357 1.22526C7.94786 0.756789 7.79071 0.284449 7.78786 0.278264C7.71286 0.0965951 7.53929 -0.0178182 7.35643 0.0022814C7.24071 0.0123312 4.50286 0.267441 2.74857 1.79424C1.83143 2.71109 0 8.07149 0 12.706C0 12.7879 0.0192857 12.8676 0.0571429 12.9387C1.32214 15.3429 4.77071 15.9722 5.55643 15.9992C5.56143 16 5.56571 16 5.57 16C5.70857 16 5.83857 15.9281 5.92143 15.8067L6.77143 14.5606C5.36714 14.3294 5.11357 14.0279 5.05429 13.9808C4.73714 13.728 4.50286 13.3739 4.78714 12.9271C5.00571 12.58 5.46429 12.4656 5.81571 12.6612C6.17571 12.8428 7.13929 13.4273 10 13.4118C12.8407 13.4025 14.0879 12.7586 14.1057 12.7446C14.5829 12.5119 14.955 12.6078 15.1871 12.9526C15.4636 13.4218 15.2664 13.7396 14.9507 13.9916C14.8914 14.0387 14.7479 14.1709 13.2393 14.5575L14.0786 15.806C14.1607 15.9281 14.2914 15.9992 14.43 15.9992C14.435 15.9992 14.4393 15.9992 14.4436 15.9985C15.23 15.9714 18.6786 15.3421 19.9429 12.9379C19.9807 12.8668 20 12.7872 20 12.7052C20 8.07149 18.1686 2.71109 17.2286 1.77414C15.4971 0.268215 12.7593 0.0131043 12.6436 0.0022814C12.4607 -0.0147259 12.2871 0.0973681 12.2121 0.278264C12.2093 0.284449 12.0564 0.764519 11.9086 1.22758C11.9086 1.22758 10.7436 1.04282 10 1.04282C9.25643 1.04282 8.10357 1.22526 8.10357 1.22526ZM7.14286 11.0926C6.35357 11.0926 5.71429 10.0621 5.71429 8.78966C5.71429 7.5172 6.35357 6.48671 7.14286 6.48671C7.935 6.35916 8.55429 7.5172 8.57143 8.78966C8.57143 10.0621 7.93214 11.0926 7.14286 11.0926ZM12.8571 11.0926C12.0679 11.0926 11.4286 10.0552 11.4286 8.77575C11.4286 7.49633 12.0679 6.45888 12.8571 6.45888C13.6464 6.45888 14.2857 7.49633 14.2857 8.77575C14.2857 10.0552 13.6464 11.0926 12.8571 11.0926Z" fill="white"/>
                </svg>
              </a>
              <a href="/" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7708 7.98301C17.1391 7.98301 16.5833 8.24884 16.1741 8.66301C14.67 7.60634 12.6416 6.92634 10.3941 6.85384L11.5616 1.51551L15.2791 2.36217C15.2791 3.28551 16.0208 4.03967 16.9308 4.03967C17.8583 4.03967 18.6041 3.26551 18.6041 2.34134C18.6041 1.41717 17.8633 0.643005 16.9316 0.643005C16.2825 0.643005 15.7225 1.04051 15.4433 1.58384L11.3375 0.660505C11.1308 0.604672 10.9283 0.754672 10.8733 0.964672L9.59164 6.84967C7.36164 6.94384 5.35497 7.62301 3.8458 8.68051C3.43664 8.24884 2.85914 7.98301 2.22747 7.98301C-0.115865 7.98301 -0.883365 11.1738 1.26247 12.2647C1.18664 12.6022 1.15247 12.9622 1.15247 13.3213C1.15247 16.9055 5.13164 19.8097 10.0175 19.8097C14.9241 19.8097 18.9033 16.9055 18.9033 13.3213C18.9033 12.9622 18.8658 12.5855 18.7733 12.2472C20.8758 11.1522 20.1016 7.98467 17.7708 7.98301ZM4.66747 12.4913C4.66747 11.5505 5.40914 10.793 6.3408 10.793C7.2508 10.793 7.9933 11.5455 7.9933 12.4913C7.9933 13.4155 7.25164 14.1688 6.3408 14.1688C5.4133 14.173 4.66747 13.4155 4.66747 12.4913ZM13.7 16.4897C12.1658 18.0463 7.83664 18.0463 6.30164 16.4897C6.13247 16.3397 6.13247 16.0747 6.30164 15.9038C6.44914 15.7538 6.7108 15.7538 6.8583 15.9038C8.02997 17.123 11.9166 17.1438 13.1391 15.9038C13.2866 15.7538 13.5483 15.7538 13.6958 15.9038C13.8683 16.0755 13.8683 16.3405 13.7 16.4897ZM13.6658 14.1722C12.7558 14.1722 12.0141 13.4197 12.0141 12.4963C12.0141 11.5555 12.7558 10.798 13.6658 10.798C14.5933 10.798 15.3391 11.5505 15.3391 12.4963C15.335 13.4155 14.5933 14.1722 13.6658 14.1722Z" fill="white"/>
                </svg>
              </a>
              <a href="/" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1818 0H1.81818C0.813636 0 0 0.813636 0 1.81818V18.1818C0 19.1864 0.813636 20 1.81818 20H18.1818C19.1864 20 20 19.1864 20 18.1818V1.81818C20 0.813636 19.1864 0 18.1818 0ZM16.8564 15.4545H11.4645V15.1518L12.7273 14.0409V7.7L9.62636 15.4545H9.14182L5.68182 7.63909V13.1727L7.26364 15.1518V15.4545H3.14364V15.1518L4.77909 13.1727V6.58909L3.32545 4.77182C3.32545 4.77182 3.32545 4.50909 3.32545 4.55H7.30364L10.3936 11.2345L13.0591 4.55H16.8355V4.77182L15.4545 5.93273V14.0409L16.8564 15.1518V15.4545Z" fill="white"/>
                </svg>
              </a>
              <a href="/" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.167 1.77382H5.83366C3.53247 1.77382 1.66699 3.6393 1.66699 5.94049V14.2738C1.66699 16.575 3.53247 18.4405 5.83366 18.4405H14.167C16.4682 18.4405 18.3337 16.575 18.3337 14.2738V5.94049C18.3337 3.6393 16.4682 1.77382 14.167 1.77382Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.3337 9.58218C13.4366 10.2757 13.3181 10.984 12.9952 11.6064C12.6723 12.2287 12.1614 12.7334 11.5351 13.0486C10.9088 13.3638 10.1991 13.4735 9.5069 13.3621C8.81468 13.2507 8.17521 12.9239 7.67944 12.4281C7.18367 11.9324 6.85685 11.2929 6.74546 10.6007C6.63408 9.90847 6.74379 9.19876 7.05901 8.57249C7.37423 7.94622 7.8789 7.43529 8.50123 7.11238C9.12356 6.78946 9.83187 6.671 10.5254 6.77384C11.2328 6.87875 11.8878 7.2084 12.3935 7.7141C12.8992 8.2198 13.2288 8.87474 13.3337 9.58218Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.584 5.52382H14.5923" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="/" className="social-icon">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.84784 11.7943L7.517 16.4478C7.99034 16.4478 8.19535 16.2444 8.44118 16.0002L10.6604 13.8794L15.2588 17.2469C16.1022 17.717 16.6964 17.4694 16.9239 16.4711L19.9423 2.32741L19.9431 2.32658C20.2106 1.07988 19.4923 0.592372 18.6706 0.898213L0.928504 7.69088C-0.282359 8.16089 -0.264025 8.8359 0.722666 9.14174L5.25861 10.5526L15.7947 3.95995C16.2905 3.63161 16.7414 3.81328 16.3705 4.14162L7.84784 11.7943Z" fill="white"/>
                </svg>
              </a>
              <a href="/" className="social-icon">
                <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3333 0.00832987C17.5353 0.567877 16.6518 0.995841 15.7167 1.27574C15.2148 0.702101 14.5478 0.29552 13.8059 0.110987C13.0639 -0.0735462 12.2829 -0.0271281 11.5684 0.243963C10.8539 0.515055 10.2404 0.99774 9.81082 1.62674C9.38127 2.25573 9.15641 3.00069 9.16667 3.76086V4.58923C7.70219 4.62698 6.25106 4.30412 4.94251 3.6494C3.63395 2.99468 2.5086 2.02843 1.66667 0.836703C1.66667 0.836703 -1.66667 8.29206 5.83333 11.6055C4.11711 12.7636 2.07263 13.3442 0 13.2623C7.5 17.4042 16.6667 13.2623 16.6667 3.73601C16.6659 3.50527 16.6436 3.2751 16.6 3.04846C17.4505 2.2147 18.0507 1.16202 18.3333 0.00832987Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="work" id="work">
        <div className="container">
          <h1>How It Works</h1>
          <div className="work-grid">
            <div className="work-wrap">
              <div className="work-img">
                <img src={OrderArt} alt="Icon" />
                <h3>Order Artwork</h3>
              </div>
              <p>If you are not the owner of a rare 3D asset, you must first order a piece of 3D artwork from  one of the official 3D artists in our community. 
              This guarantee us high quality 3D asset that are compatible with out virtual worlds.  </p>
            </div>
            <div className="work-wrap">
              <div className="work-img">
                <img src={Submit} alt="Icon" />
              <h3>Submit</h3>
              </div>
              <p>Once you have a 3D asset to list, submit an application form with the artwork details and all the NFT properties. We only accept 3D models from non-registered community members. 
              Registered artists can submit their audio, image and video creations. </p>
            </div>
            <div className="work-wrap">
              <div className="work-img">
                <img src={Mint} alt="Icon" />
                <h3>Mint</h3>
              </div>
              <p>Once your application has been validated by the community of 3D artisb , we will mint it for you.  </p>
            </div>
            <div className="work-wrap">
              <div className="work-img">
                <img src={Sale} alt="Icon" />
                <h3>List for Sale</h3>
              </div>
              <p>Most 3D assets that are filling our virtual worlds  are owned by private individuals and virtual companies. Those assets can be traded to exchange ownership or rented for passive income.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Popular/>
    <TopSeller/>
    <PopularNFT/>
    <Footer/>
    </>
  )
}

export default Homepage
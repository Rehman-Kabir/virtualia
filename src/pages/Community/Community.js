import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import LeaderProfile from '../../assets/profile-leader.png'
import LeaderProfile2 from '../../assets/leader-profile-2.png'
import LeaderProfile3 from '../../assets/leader-profile-3.png'
import LeaderProfile4 from '../../assets/leader-profile-4.png'
import HeartFill from '../../assets/heart-red.png'
import ViewIcon from '../../assets/view-icon.png'
import CommentIcon from '../../assets/comment-icon.png'
// import CardImg from '../../assets/challenge-card-1.png'
import CardImg1 from '../../assets/challenge-card-2.png'
import CardImg2 from '../../assets/challenge-card-3.png'
import BlogImg from '../../assets/blog-img.png'
import BlogImg2 from '../../assets/blog-img-2.png'
import BlogImg3 from '../../assets/blog-img-3.png'
import BlogImg4 from '../../assets/blog-img-4.png'
import EventImg from '../../assets/event-img.png'
import EventImg2 from '../../assets/event-img-2.png'
import LotteryImg from '../../assets/lottery-img.png'
import LotterySpaceImg from '../../assets/lottery-space.png'
import LotterySpaceImg2 from '../../assets/LotterySpaceship.png'
import HeartIcon from '../../assets/like-icon.png'
import CommunityHero from '../../assets/community-hero.png'
import './community.css'

const Community = () => {
  return (
    <>
    <Header/>
    <div className="community-hero-bg">
        <section className="community-hero">
            <div className="container">
                <h1>Our 3D Creators</h1>
                <div className="community-container">
                    <p>Our community hosts 100+ experienced 3D creators ready to work on your ideas.</p>
                    <div className="community-main-img">
                        <img src={CommunityHero} alt="Hero Community" />
                    </div>
                    <a href="/">Apply to join our community of 3D srtists</a>
                </div>
            </div>
        </section>
        <section className="event" id="event">
            <div className="container">
                <div className="event-head">
                    <h1>Event</h1>
                    <a href="/">View All</a>
                </div>
                <div className="event-grid">
                    <div className="event-wrap">
                        <div className="event-img">
                            <img src={EventImg} alt="event" />
                        </div>
                        <div className="event-data">
                            <div className="event-d-top">
                                <h3>Virtualia Keynote #1</h3>
                                <p>Assist to our first virtual keynote on our space station and earn 5 rare NFTs to be used solely on Capitalia.</p>
                                <span>Prize: &nbsp;&nbsp;&nbsp;&nbsp;5 Rare NFTs </span>
                            </div>
                            <div className="challenge-meta">
                                <span><img src={HeartFill} alt="icon" />2,565</span>
                                <span><img src={ViewIcon} alt="icon" />2,565</span>
                                <span><img src={CommentIcon} alt="icon" />2,565</span>
                            </div>
                        </div>
                    </div>
                    <div className="event-wrap">
                        <div className="event-img">
                            <img src={EventImg2} alt="event" />
                        </div>
                        <div className="event-data">
                            <div className="event-d-top">
                                <h3>Top 3D Artist of Sep’22</h3>
                                <p>Vote for your favorite 3D artists and earn a spot for a full body scan in our lab! Use or sell your non-fungible self. </p>
                                <span>Prize: &nbsp;&nbsp;&nbsp;&nbsp;5 NFS  </span>
                            </div>
                            <div className="challenge-meta">
                                <span><img src={HeartFill} alt="icon" />5K</span>
                                <span><img src={ViewIcon} alt="icon" />556K</span>
                                <span><img src={CommentIcon} alt="icon" />3,321</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <section className="lottery" id="lottery">
        <div className="container">
            <div className="event-head">
                <h1>Lottery</h1>
                <a href="/">View All</a>
            </div>
            <div className="lottery-grid">
                <div className="lottery-wrap">
                    <div className="lottery-d-top">
                        <div className="lottery-img">
                            <img src={LotteryImg} alt="lottery" />
                        </div>
                        <div className="lottery-data">
                            <h3>Capitalia World Lottery #5</h3>
                            <p>Managed by <span>Virtualia</span></p>
                            <div className="lottery-data-inner">
                                <p>Min. ticke price:<span>1 VIA$</span></p>
                                <p>Remaining tickets: <span>23/1000</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="lottery-cta">
                        <div className="lottery-like">
                            <span><img src={HeartIcon} alt="like" /></span>
                            <span>12K</span>
                        </div>
                        <button>Buy a Ticket</button>
                    </div>
                </div>
                <div className="lottery-wrap">
                    <div className="lottery-d-top">
                        <div className="lottery-img">
                            <img src={LotterySpaceImg} alt="lottery" />
                        </div>
                        <div className="lottery-data">
                            <h3>Mysteria World Lottery #2</h3>
                            <p>Managed by <span>Virtualia</span></p>
                            <div className="lottery-data-inner">
                                <p>Min. ticke price:<span>1 VIA$</span></p>
                                <p>Remaining tickets: <span>23/1000</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="lottery-cta">
                        <div className="lottery-like">
                            <span><img src={HeartIcon} alt="like" /></span>
                            <span>5,192K</span>
                        </div>
                        <button>Buy a Ticket</button>
                    </div>
                </div>
                <div className="lottery-wrap">
                    <div className="lottery-d-top">
                        <div className="lottery-img">
                            <img src={LotterySpaceImg2} alt="lottery" />
                        </div>
                        <div className="lottery-data">
                            <h3>Futuria World Lotters #2</h3>
                            <p>Managed by <span>Virtualia</span></p>
                            <div className="lottery-data-inner">
                                <p>Min. ticke price:<span>1 VIA$</span></p>
                                <p>Remaining tickets: <span>23/1000</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="lottery-cta">
                        <div className="lottery-like">
                            <span><img src={HeartIcon} alt="like" /></span>
                            <span>3,020K</span>
                        </div>
                        <button>Buy a Ticket</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="challenges" id="challenges">
        <div className="container">
            <h1>Challenges</h1>
            <div className="challenges-head">
                <span className='active'>Trending</span>
                <span>Ongoing</span>
                <span>Saved</span>                
                <span>Most Liked</span>                
            </div>
            <div className="challenge-grid">
                <div className="challenge-card">
                    <div className="c-card-top">
                        <div className="c-card">
                            <img src={CardImg2} alt="card" />
                        </div>
                        <div className="challenge-card-data">
                            <h3>Black Hole: Reception Hall</h3>
                            <p>Created by <span>Adam4arch</span></p>
                            <span className='sub'>500+ Submissions</span>
                        </div>
                    </div>
                    <div className="challenge-meta">
                        <span><img src={HeartFill} alt="icon" />2,565</span>
                        <span><img src={ViewIcon} alt="icon" />2,565</span>
                        <span><img src={CommentIcon} alt="icon" />2,565</span>
                    </div>
                </div>
                <div className="challenge-card">
                    <div className="c-card-top">
                        <div className="c-card">
                            <img src={CardImg1} alt="card" />
                        </div>
                        <div className="challenge-card-data">
                            <h3>Galaxy: Chanel bag</h3>
                            <p>Created by  <span>3dmonk</span></p>
                            <span className='sub'>500+ Submissions</span>
                        </div>
                    </div>
                    <div className="challenge-meta">
                        <span><img src={HeartFill} alt="icon" />2,565</span>
                        <span><img src={ViewIcon} alt="icon" />2,565</span>
                        <span><img src={CommentIcon} alt="icon" />2,565</span>
                    </div>
                </div>
                <div className="challenge-card">
                    <div className="c-card-top">
                        <div className="c-card">
                            <img src={CardImg2} alt="card" />
                        </div>
                        <div className="challenge-card-data">
                            <h3>Solar: Your personalised store</h3>
                            <p>Created by  <span>Bilguuns</span></p>
                            <span className='sub'>500+ Submissions</span>
                        </div>
                    </div>
                    <div className="challenge-meta">
                        <span><img src={HeartFill} alt="icon" />2,565</span>
                        <span><img src={ViewIcon} alt="icon" />2,565</span>
                        <span><img src={CommentIcon} alt="icon" />2,565</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="leaderboard" id="leaderboard">
        <div className="container">
            <h1>Leaderboard</h1>
            <div className="leaderboard-head">
                <span className='active'>Sellers</span>
                <span>Artists</span>
                <span>Collections</span>                
            </div>
            <div className="leaderboard-grid">
                <div className="leaderboard-wrap">
                    <div className="leader-profile-wrap">
                        <div className="leader-img">
                            <img src={LeaderProfile} alt="profile" />
                        </div>
                        <div className="leader-data">
                            <h3>PhotoArt88</h3>
                            <span>VIA$ 242K</span>
                        </div>
                    </div>
                    <h3>215 NFTs</h3>
                </div>
                <div className="leaderboard-wrap">
                    <div className="leader-profile-wrap">
                        <div className="leader-img">
                            <img src={LeaderProfile3} alt="profile" />
                        </div>
                        <div className="leader-data">
                            <h3>DigitalC</h3>
                            <span>VIA$ 123K</span>
                        </div>
                    </div>
                    <h3>78 NFTs</h3>
                </div>
                <div className="leaderboard-wrap">
                    <div className="leader-profile-wrap">
                        <div className="leader-img">
                            <img src={LeaderProfile2} alt="profile" />
                        </div>
                        <div className="leader-data">
                            <h3>Art4U</h3>
                            <span>VIA$ 23,812</span>
                        </div>
                    </div>
                    <h3>21 NFTs</h3>
                </div>
                <div className="leaderboard-wrap">
                    <div className="leader-profile-wrap">
                        <div className="leader-img">
                            <img src={LeaderProfile4} alt="profile" />
                        </div>
                        <div className="leader-data">
                            <h3>Kevin Vandenberg</h3>
                            <span>VIA$ 22,010</span>
                        </div>
                    </div>
                    <h3>20 NFTs</h3>
                </div>
            </div>
        </div>
    </section>
    <section className="blog" id="blog">
        <div className="container">
            <h1>Blog</h1>
            <div className="blog-grid">
                <div className="blog-wrapper">
                    <div className="blog-img">
                        <img src={BlogImg} alt="blog" />
                    </div>
                    <div className="blog-data">
                        <h3>What is NFT?</h3>
                        <p>Non-fungible tokens, or NFTs, are "one-of-a-kind" assets in the digital world that can be bought and sold</p>
                        <a href="/">Learn more</a>
                    </div>
                </div>
                <div className="blog-wrapper">
                    <div className="blog-img">
                        <img src={BlogImg2} alt="blog" />
                    </div>
                    <div className="blog-data">
                        <h3>What is NFT?</h3>
                        <p>Non-fungible tokens, or NFTs, are "one-of-a-kind" assets in the digital world that can be bought and sold</p>
                        <a href="/">Learn more</a>
                    </div>
                </div>
                <div className="blog-wrapper">
                    <div className="blog-img">
                        <img src={BlogImg3} alt="blog" />
                    </div>
                    <div className="blog-data">
                        <h3>What is NFT?</h3>
                        <p>Non-fungible tokens, or NFTs, are "one-of-a-kind" assets in the digital world that can be bought and sold</p>
                        <a href="/">Learn more</a>
                    </div>
                </div>
                <div className="blog-wrapper">
                    <div className="blog-img">
                        <img src={BlogImg4} alt="blog" />
                    </div>
                    <div className="blog-data">
                        <h3>What is NFT?</h3>
                        <p>Non-fungible tokens, or NFTs, are "one-of-a-kind" assets in the digital world that can be bought and sold</p>
                        <a href="/">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Community
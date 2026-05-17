import Link from 'next/link'
import React from 'react'

function TeamOne() {
    return (
        <>
            {/* Start Team-Style-Default Style-Three Area  */}
            <div className="tmp-team-area tmp-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tmp-section-title-border text-center">
                                <div className="pres-line-separator-wrapper text-center mb--10">
                                    <div className="line-separator line-left" />
                                    <span className="subtitle">
                                        <span className="number">4</span>
                                        <span className="subtitle-text">Talents</span>
                                    </span>
                                    <div className="line-separator line-right" />
                                </div>
                                <h2 className="title w-700">Some of Our Talents.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--5 justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-wrapper5 tmponhover">
                                <div className="image-area">
                                    <Link href="/team/benjamin-taylor">
                                        <img src="/assets/images/team/team-04.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="content-area">
                                    <div className="left">
                                        <h6 className="title">
                                            <Link href="/team/monsur-mia">James Johnson</Link>
                                        </h6>
                                        <p className="designation">HR Manager</p>
                                    </div>
                                    <Link href="#" className="share">
                                        <i className="feather-share-2" />
                                    </Link>
                                </div>
                                <div className="social-wrapper">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <i className="feather-facebook" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="feather-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="feather-youtube" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-wrapper5 tmponhover">
                                <div className="image-area">
                                    <Link href="/team/james-johnson">
                                        <img src="/assets/images/team/team-05.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="content-area">
                                    <div className="left">
                                        <h6 className="title">
                                            <Link href="/team/david-miller">David Miller</Link>
                                        </h6>
                                        <p className="designation">CEO Corpox</p>
                                    </div>
                                    <Link href="#" className="share">
                                        <i className="feather-share-2" />
                                    </Link>
                                </div>
                                <div className="social-wrapper">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <i className="feather-facebook" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="feather-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="feather-youtube" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-wrapper5 tmponhover">
                                <div className="image-area">
                                    <Link href="/team/william-white">
                                        <img src="/assets/images/team/team-06.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="content-area">
                                    <div className="left">
                                        <h6 className="title">
                                            <Link href="/team/benjamin-taylor">William White</Link>
                                        </h6>
                                        <p className="designation">Team Lead</p>
                                    </div>
                                    <Link href="#" className="share">
                                        <i className="feather-share-2" />
                                    </Link>
                                </div>
                                <div className="social-wrapper">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <i className="feather-facebook" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="feather-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="feather-youtube" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-wrapper5 tmponhover">
                                <div className="image-area">
                                    <Link href="/team/monsur-mia">
                                        <img src="/assets/images/team/team-07.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="content-area">
                                    <div className="left">
                                        <h6 className="title">
                                            <Link href="/team/james-johnson">William White</Link>
                                        </h6>
                                        <p className="designation">Senior developer</p>
                                    </div>
                                    <Link href="#" className="share">
                                        <i className="feather-share-2" />
                                    </Link>
                                </div>
                                <div className="social-wrapper">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <i className="feather-facebook" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="feather-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="feather-youtube" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Team-Style-Default Style-Three Area  */}
        </>

    )
}

export default TeamOne
import Link from 'next/link'
import React from 'react'

interface GetInTouchProps {
  className?: string
  id?: string
}
function GetInTouch({ className = ""}: GetInTouchProps) {
    return (
        <section className={`tmp-get-in-touch-area ${className}`}>
            <div className="container">
                <div className="section-inner">
                    <div className="left-image">
                        <img src="/assets/images/contact/get-bg.webp" width={420} alt="" />
                    </div>
                    <div className="content">
                        <div className="icon">
                            <Link href="call-to:+00449922097788">
                                <i className="feather-phone" />
                            </Link>
                        </div>
                        <div className="text">
                            <h4 className="title">Have Any Questions? Call Us free</h4>
                            <Link href="call-to:+00449922097788" className="phone">
                                +00449922097788
                            </Link>
                            <p className="desc">
                                As the world's largest producer of business service agency, Corpox
                                stands at the forefront of the Business sector.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default GetInTouch
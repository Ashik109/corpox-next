'use client'
import { useHoverAnimation } from '../components/useHoverAnimation'

interface ServicesFiveProps {
  className?: string
  id?: string
}
function ServicesFive({ className = ""}: ServicesFiveProps ) {
        const hoverRef1 = useHoverAnimation<HTMLDivElement>()
        const hoverRef2 = useHoverAnimation<HTMLDivElement>()
        const hoverRef3 = useHoverAnimation<HTMLDivElement>()
    return (
        <>
            {/* Start Service-4 Area  */}
            <div className={`tmp-service-area ${className}`}>
                <div className="container">
                    <div className="row g-5 service-wrapper mt--10">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div ref={hoverRef1} className="service service-eight text-left bg-color-card tmponhover">
                                <div className="inner d-flex">
                                    <div className="image">
                                        <img
                                            src="/assets/images/services/icon-01.png"
                                            alt="card Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="/service/management-leadership">
                                                Cloud based, secured software
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div ref={hoverRef2} className="service service-eight text-left bg-color-card tmponhover">
                                <div className="inner d-flex">
                                    <div className="image">
                                        <img
                                            src="/assets/images/services/icon-02.png"
                                            alt="card Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="/service/financial-growth">Web Application, software</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div ref={hoverRef3} className="service service-eight text-left bg-color-card tmponhover">
                                <div className="inner d-flex">
                                    <div className="image">
                                        <img
                                            src="/assets/images/services/icon-03.png"
                                            alt="card Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="/service/digital-transformation">App based, secured software</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Start Service-4 Area  */}
        </>

    )
}

export default ServicesFive
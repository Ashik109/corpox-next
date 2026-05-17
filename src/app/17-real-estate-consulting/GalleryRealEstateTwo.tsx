import Link from 'next/link'
const gallery = ["portfolio-01.jpg", "portfolio-02.jpg", "portfolio-03.jpg", "portfolio-04.jpg", "portfolio-05.jpg", "portfolio-06.jpg"];

function GalleryRealEstateTwo() {
    return (
        <div className="tmp-gallery-area tmp-section-gapBottom">
            <div className="container">
                <div className="row mb--40">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h4 className="subtitle">Properties</h4>
                            <h2 className="title w-600 mb--20">Our Top Rated Properties</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt_dec--30 row--15" id="animated-lightbox">
                    {gallery.map((image) => (
                        <Link className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30" data-aos="slide-up" data-aos-duration="700" href={`/assets/images/portfolio/${image}`} key={image}>
                            <div className="tmp-gallery icon-center">
                                <div className="thumbnail">
                                    <img className="radius-small" src={`/assets/images/portfolio/${image}`} alt="Corporate Image" />
                                </div>
                                <div className="video-icon">
                                    <div className="btn-default rounded-player sm-size">
                                        <span>
                                            <i className="feather-zoom-in" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GalleryRealEstateTwo;

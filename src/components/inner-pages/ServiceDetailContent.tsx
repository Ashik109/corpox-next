import Link from 'next/link'
import type { ServiceDetail } from '../../data/services'
import { RELATED_SERVICES, services } from '../../data/services'

const VIDEO_MP4 = '/assets/images/video/01.mp4'

export type ServiceDetailLayout = 'default' | 'two' | 'three' | 'four' | 'center'

type Props = {
  service: ServiceDetail
  detailRoute: string
  layout?: ServiceDetailLayout
}

function Sidebar({ detailRoute, phone }: { detailRoute: string; phone: string }) {
  return (
    <div className="sticky-top-service">
      <div className="tmp-single-wized categorys mb--30 tmponhover">
        <div className="wized-header"><h5 className="title">Categories</h5></div>
        <div className="wized-body">
          <ul className="single-categories">
            {services.map((s) => (
              <li key={s.slug} className="tmponhover">
                <Link href={`${detailRoute}/${s.slug}`}>{s.title} <i className="far fa-long-arrow-right" /></Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="tmp-single-wized contact-with-us-service mb--0 tmponhover">
        <div className="addd-contact">
          <div className="contact-icon"><i className="feather-phone" /></div>
          <h2 className="title">Have any Questions? <br /> Call us Today!</h2>
          <div className="contact"><a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></div>
        </div>
      </div>
    </div>
  )
}

function ServiceBody({ service }: { service: ServiceDetail }) {
  return (
    <>
      <h2 className="title">{service.featureTitle}</h2>
      <p className="discription mt--30">{service.intro}</p>
      <ul className="listing-style-solid">{service.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
      <p className="discription mt--30">{service.introSecondary}</p>
      <ul className="feature-list-service row mt--0 g-5">
        {service.featureItems.map((f) => (
          <li key={f.title} className="col-lg-6 col-md-6">
            <div className="icon"><i className="feather-check" /></div>
            <div className="title-wrapper"><h4 className="title">{f.title}</h4><p className="text">{f.text}</p></div>
          </li>
        ))}
      </ul>
      <div className="row g-5 mb--30">
        {service.secondaryImages.map((img) => (
          <div className="col-lg-6 col-md-6 col-sm-12" key={img}>
            <div className="thumbnail-service-details-small-2"><img className="bdru-4" src={img} alt={service.title} /></div>
          </div>
        ))}
      </div>
      {service.outro.map((p) => <p key={p.slice(0, 40)} className="discription mb--25">{p}</p>)}
    </>
  )
}

function ServiceHero({ service, layout }: { service: ServiceDetail; layout: ServiceDetailLayout }) {
  if (layout === 'four') {
    return (
      <div className="thumbnail-video-service tmponhover mt--80">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src={service.videoMp4 || VIDEO_MP4} type="video/mp4" />
        </video>
      </div>
    )
  }
  const heroClass =
    layout === 'two' || layout === 'three' || layout === 'center'
      ? 'thumbnail thumbnail-large-details mt--80 mt_md--30 mt_sm--10 jarallax'
      : 'thumbnail thumbnail-large-details h-auto mb--30'
  return (
    <div className={heroClass}>
      <img className="radius-10 w-100 jarallax-img" src={service.heroImage} alt={service.title} />
    </div>
  )
}

function ServiceVideoBanner() {
  return (
    <div className="service-video-area">
      <div className="container">
        <div className="tmp-present-banner-area ptb--150 bg_image bg_image--2-webp bg_image_fixed jarallax" data-black-overlay="2">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="present-banner-inner text-center">
                  <div className="button-group justify-content-center mt--20">
                    <div className="video-btn">
                      <a className="tmp-btn rounded-player popup-video" href={VIDEO_MP4}><span><i className="feather-play" /></span></a>
                    </div>
                    <a className="btn-read-more popup-video" href={VIDEO_MP4}><span>Get in touch with us</span></a>
                  </div>
                  <h3 className="mt--30">Find Out Everything You Need To Know About Creating A Consulting Business</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ServicePricing() {
  const plans = [
    { name: 'Free', price: '00', features: ['5 PPC Campaigns', 'Digital Marketing', 'Marketing Agency', 'Seo Friendly', 'UI/UX designs'], border: true },
    { name: 'Business', price: '50', features: ['5 PPC Campaigns', 'Keep 100% Royalties', 'App Development', 'Seo Friendly', 'UI/UX designs'], active: true },
    { name: 'Advanced', price: '100', features: ['50 PPC Campaigns', 'SEO Marketing', 'Marketing Agency', 'Seo Friendly', 'Application Manage'], border: true },
  ]
  return (
    <div className="tmp-pricing-area tmp-section-gap">
      <div className="container">
        <div className="row mb--40 mb_sm--0"><div className="col-lg-12">
          <div className="tmp-section-title-border text-center">
            <h2 className="title w-700 tmp-title-split">Our Pricing</h2>
            <p className="b1">Enjoy a free 14-day trial. <br /> No credit card required!</p>
          </div>
        </div></div>
        <div className="row g-5">
          {plans.map((plan) => (
            <div className="col-lg-4 col-md-6 col-12" key={plan.name}>
              <div className={`tmp-pricing tmponhover ${plan.active ? 'active with-gradient-bg' : ''}`}>
                <div className="pricing-table-inner">
                  <div className="pricing-header">
                    <h4 className="title tmp-badge-2">{plan.name}</h4>
                    <div className="pricing"><div className="price-wrapper"><span className="currency">$</span><span className="price">{plan.price}</span></div><span className="subtitle">USD Per Month</span></div>
                  </div>
                  <div className="pricing-body"><ul className="list-style--1">{plan.features.map((f) => <li key={f}><i className="feather-check" /> {f}</li>)}</ul></div>
                  <div className="pricing-footer"><a className={`tmp-btn icon-hover text-center ${plan.border ? 'btn-border' : ''}`} href="#"><span className="btn-text">Try This free</span></a></div>
                </div>
                {plan.active ? <div className="popular-tag">Popular</div> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ServiceAbout() {
  return (
    <div className="about-area about-style-4 tmp-section-gapBottom">
      <div className="container">
        <div className="row row--40 g-5 align-items-center">
          <div className="col-lg-6">
            <h3 className="title w-700 mb--20 tmp-title-split">Let&apos;s Talk</h3>
            <p className="b1">The full service we are offering is specifically designed to meet your business needs.</p>
            <div className="read-more-btn mt--20">
              <Link className="tmp-btn icon-hover" href="/contact"><span className="btn-text">Contact With us</span></Link>
            </div>
          </div>
          <div className="col-lg-6 mt_md--40">
            <img className="radius-small w-100" src="/assets/images/about/about-3.webp" alt="Corporate" />
          </div>
        </div>
      </div>
    </div>
  )
}

function RelatedServices({ detailRoute }: { detailRoute: string }) {
  return (
    <div className="tmp-service-area tmp-section-gapBottom">
      <div className="container">
        <h2 className="title w-700 text-center mb--40 tmp-title-split">Related More Service.</h2>
        <div className="row g-5 service-wrapper">
          {RELATED_SERVICES.map((item) => (
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" key={item.title}>
              <div className="service service__style--1 bg-color-card service-narrow radius text-center tmp-border-none tmponhover">
                <div className="icon"><img src={item.icon} alt="service" /></div>
                <h4 className="title w-600"><Link href={`${detailRoute}/${item.slug}`}>{item.title}</Link></h4>
                <p className="description mb--0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ServiceDetailContent({ service, detailRoute, layout = 'default' }: Props) {
  const heroFirst = ['two', 'three', 'four', 'center'].includes(layout)
  const sidebarLeft = layout === 'three' || layout === 'four'
  const noSidebar = layout === 'two' || layout === 'center'
  const contentCol = noSidebar ? 'col-lg-8' : 'col-lg-8'
  const rowClass = layout === 'center' || layout === 'two' ? 'row mt--50 justify-content-center' : sidebarLeft ? 'row mt--50' : 'row g-5 mt--40 mt_md--20 mt_sm--20'

  return (
    <>
      <div className="tmp-service-details-area tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tmp-service-details">
                <div className="tmp-section-title-border text-center">
                  <span className="subtitle"><span className="number">01</span><span className="subtitle-text">Service Details</span></span>
                  <h1 className="title w-700 mb--30 tmp-title-split">{service.title}</h1>
                </div>
                {heroFirst ? <ServiceHero service={service} layout={layout} /> : null}
                <div className={rowClass}>
                  {sidebarLeft ? <div className="col-lg-4"><Sidebar detailRoute={detailRoute} phone={service.contactPhone} /></div> : null}
                  <div className={sidebarLeft ? 'col-lg-8 pl--50 pl_md--10 pl_sm--10 mt_md--30 mt_sm--30' : contentCol}>
                    {!heroFirst ? <ServiceHero service={service} layout={layout} /> : null}
                    <ServiceBody service={service} />
                  </div>
                  {!noSidebar && !sidebarLeft ? (
                    <div className="col-lg-4 mt_md--30 mt_sm--30"><Sidebar detailRoute={detailRoute} phone={service.contactPhone} /></div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceVideoBanner />
      <ServicePricing />
      <ServiceAbout />
      <RelatedServices detailRoute={detailRoute} />
    </>
  )
}

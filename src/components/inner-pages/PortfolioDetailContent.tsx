import Link from 'next/link'
import BodyClass from '../../app/white-01-index-consulting/BodyClass'
import type { PortfolioProject } from '../../data/portfolioProjects'
import { portfolioProjects } from '../../data/portfolioProjects'

const VIDEO_MP4 = '/assets/images/video/01.mp4'
const DEFAULT_EMBED = 'https://www.youtube.com/embed/gW22hVe5_fI?si=l7ewYuIMWchWKFLB'

export type PortfolioDetailLayout = 'default' | 'two' | 'three' | 'four' | 'five'

type Props = {
  project: PortfolioProject
  detailRoute: string
  layout?: PortfolioDetailLayout
}

const PROJECT_FEATURES = [
  { icon: '/assets/images/services/icons/02.png', title: 'Business Solution', text: 'There are many variations of passages of Lorem available.' },
  { icon: '/assets/images/services/icons/01.png', title: 'Creative Ideas', text: 'Passages there are many variations of Lorem available.' },
  { icon: '/assets/images/services/icons/03.png', title: 'Market Research', text: 'Many variations of passages of Lorem Ipsum available.' },
  { icon: '/assets/images/services/icons/04.png', title: 'Structural Engineering', text: 'Variations of passages of Lorem Ipsum available.' },
]

function PortfolioHeader({ project }: { project: PortfolioProject }) {
  return (
    <div className="tmp-portfolio-details">
      <div className="tmp-section-title-border text-center">
        <div className="pres-line-separator-wrapper text-center mb--10">
          <div className="line-separator line-left" />
          <span className="subtitle">
            <span className="number">01</span>
            <span className="subtitle-text">{project.subtitle}</span>
          </span>
          <div className="line-separator line-right" />
        </div>
        <h2 className="title w-700 mb--30 tmp-title-split">
          {project.title} <br /> <span className="theme-gradient">{project.titleHighlight}</span>
        </h2>
      </div>
      <p className="text-center">{project.summary}</p>
    </div>
  )
}

function ProjectSidebar({ project }: { project: PortfolioProject }) {
  return (
    <div className="left-sidebar sticky-top top-120">
      <div className="single-wrapper-details-right-p bg-card tmponhover">
        <h4>About My Project</h4>
        <ul>
          <li>Client : <span>{project.client}</span></li>
          <li>Category : <span>{project.category}</span></li>
          <li>Date : <span>{project.date}</span></li>
          <li>Tags : <span>{project.tags}</span></li>
          <li>Area : <span>{project.area}</span></li>
          <li>Website : <span>{project.website}</span></li>
        </ul>
      </div>
    </div>
  )
}

function ContentArea({ project }: { project: PortfolioProject }) {
  return (
    <div className="content-area">
      <h2 className="title tmp-title-split">{project.contentTitle}</h2>
      <p className="desc mb--20">{project.summary}</p>
      <p className="desc">{project.summarySecondary}</p>
      <h4 className="title">{project.technologiesTitle}</h4>
      <p className="desc">{project.technologiesText}</p>
      <div className="row mb--30">
        {project.inlineImages.map((img, i) => (
          <div className="col-lg-6 mb_md--20 mb_sm--10" key={img} data-aos="fade-up" data-aos-delay={300 + i * 200}>
            <div className="image invers-anime radious-6">
              <img src={img} width={419} alt="corpox" />
            </div>
          </div>
        ))}
      </div>
      <h4 className="title">{project.benefitsTitle}</h4>
      <p className="desc mb--20">{project.benefitsText}</p>
      <ul className="project-list-details">{project.benefitsList.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  )
}

function RelatedCaseStudies({ detailRoute, currentSlug }: { detailRoute: string; currentSlug: string }) {
  const others = portfolioProjects.filter((p) => p.slug !== currentSlug)
  return (
    <div className="tmp-case-studies tmp-section-gapBottom">
      <div className="container">
        <div className="row mb--40">
          <div className="col-lg-12">
            <div className="tmp-section-title-border text-center">
              <div className="pres-line-separator-wrapper text-center mb--10">
                <div className="line-separator line-left" />
                <span className="subtitle"><span className="number">04</span><span className="subtitle-text">Case Studies</span></span>
                <div className="line-separator line-right" />
              </div>
              <h2 className="title w-700 tmp-title-split">Related Case Studies.</h2>
            </div>
          </div>
        </div>
        <div className="row g-5">
          {others.map((p) => (
            <div className="col-lg-6 col-md-6 col-sm-12" key={p.slug} data-aos="fade-up">
              <div className="single-project-area-bottom-content">
                <Link href={`${detailRoute}/${p.slug}`} className="thumbnail invers-anime"><img src={p.caseStudyImage} alt="project" /></Link>
                <div className="inner">
                  <Link href={`${detailRoute}/${p.slug}`}><h4 className="title">{p.contentTitle}</h4></Link>
                  <p className="disc">{p.caseStudyExcerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectFeatures() {
  return (
    <div className="tmp-service-area tmp-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tmp-section-title-border text-center">
              <div className="pres-line-separator-wrapper text-center mb--10">
                <div className="line-separator line-left" />
                <span className="subtitle"><span className="number">04</span><span className="subtitle-text">Project Feature</span></span>
                <div className="line-separator line-right" />
              </div>
              <h2 className="title w-700">Project Feature</h2>
            </div>
          </div>
        </div>
        <div className="row g-5 service-wrapper mt--10">
          {PROJECT_FEATURES.map((item) => (
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" key={item.title} data-aos="fade-up">
              <div className="service service__style--1 bg-color-blackest radius text-center tmp-border">
                <div className="icon"><img src={item.icon} alt="service" /></div>
                <div className="content">
                  <h4 className="title w-600"><Link href="/service-details/management-leadership">{item.title}</Link></h4>
                  <p className="description mb--0">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function LayoutTwoBody({ project }: { project: PortfolioProject }) {
  const galleryMain = project.galleryMain || '/assets/images/portfolio/10.webp'
  const galleryImages = project.galleryImages || ['/assets/images/portfolio/11.webp', '/assets/images/portfolio/12.webp']
  const rightDesc = project.rightDescription || [project.summarySecondary]
  const avatars = project.teamAvatars || []

  return (
    <>
      <div className="tmp-portfolio-details tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <PortfolioHeader project={project} />
              <div className="row mt--100 row--30 mb--60 g-5">
                <div className="col-lg-6">
                  <div className="content-left">
                    <h4 className="title">{project.category}</h4>
                    <div className="single-list-wrapper">
                      <div className="single-list"><label>Date:</label><span>{project.date}</span></div>
                      <div className="single-list"><label>Client:</label><span>{project.client}</span></div>
                      <div className="single-list"><label>Category:</label><span>{project.category}</span></div>
                    </div>
                    <div className="view-btn mt--50">
                      <Link className="tmp-btn round icon-hover w-100 text-center" href="/portfolio-grid">
                        <span className="btn-text">View Projects</span>
                        <span className="btn-icon"><i className="feather-arrow-right" /></span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="content-right">
                    <h4 className="title">{project.rightTitle || 'Branded client'}</h4>
                    <div className="description">
                      {rightDesc.map((p) => (
                        <p key={p.slice(0, 30)}>{p}</p>
                      ))}
                    </div>
                    <div className="profile-share mt--40">
                      {avatars.map((src, i) => (
                        <Link key={src} href="#" className="avatar" data-tooltip={`Team ${i + 1}`} tabIndex={0}>
                          <img src={src} alt="team" />
                        </Link>
                      ))}
                      <div className="more-author-text">
                        <h5 className="total-join-students">Join Over 3000+ Project</h5>
                        <div className="purchase-btn">
                          <Link className="btn-read-more" href="#"><span>Purchase Corpox</span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <div className="inner">
                <div className="details-list">
                  <div className="thumbnail"><img className="radius w-100" src={galleryMain} alt={project.title} /></div>
                </div>
                <div className="portfolio-gallery mt--40">
                  {galleryImages.map((img) => (
                    <div className="gallery mt--30" key={img}>
                      <div className="thumbnail"><img className="radius w-100" src={img} alt={project.title} /></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectFeatures />
    </>
  )
}

function MediaBlock({ project, layout }: { project: PortfolioProject; layout: PortfolioDetailLayout }) {
  if (layout === 'default') {
    return (
      <div className="row g-0">
        <div className="col-lg-4 pr--20 pr_md--0 pr_sm--0 mb_md--20 mb_sm--10 pl_md--0 pl_sm--0 gap-30">
          {project.bentoLeft.map((img, i) => (
            <div className="thumbnail invers-anime" key={img} data-aos="fade-up" data-aos-delay={i * 200}>
              <img src={img} alt="portfolio" />
            </div>
          ))}
        </div>
        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
          <div className="thumbnail radious-6 invers-anime large-image-portfolio-details">
            <img src={project.bentoMain} alt="portfolio" />
          </div>
        </div>
      </div>
    )
  }

  if (layout === 'three') {
    return (
      <div className="row g-0">
        <div className="col-lg-12">
          <iframe
            width="560"
            height="615"
            className="w-100"
            src={project.videoEmbedUrl || DEFAULT_EMBED}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    )
  }

  if (layout === 'four') {
    const slides = project.sliderImages || ['/assets/images/bg/03.webp', '/assets/images/bg/04.webp']
    return (
      <div className="row g-0">
        <div className="col-lg-12">
          <div className="slider-portfolio-area">
            <div className="slider-animation-2 slider-activation-2 slider-dot tmp-slick-dot tmp-slick-arrow tmp-slick-arrow-white">
              {slides.map((img) => (
                <div className="slider-area d-flex" key={img}>
                  <div className="thumbnail radious-6 large-image-portfolio-details">
                    <img src={img} alt="portfolio" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (layout === 'five') {
    return (
      <div className="row g-0">
        <div className="col-lg-12">
          <div className="thumbnail-video-service tmponhover">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src={project.videoMp4 || VIDEO_MP4} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default function PortfolioDetailContent({ project, detailRoute, layout = 'default' }: Props) {
  if (layout === 'two') {
    return (
      <>
        <BodyClass className="overflow-x-visible" />
        <LayoutTwoBody project={project} />
        <RelatedCaseStudies detailRoute={detailRoute} currentSlug={project.slug} />
      </>
    )
  }

  const gapTop = layout === 'default' ? 'tmp-section-gapTop' : 'tmp-section-gapTop'

  return (
    <>
      <BodyClass className="overflow-x-visible" />
      <div className={`tmp-portfolio-details ${gapTop} mb--40`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <PortfolioHeader project={project} />
            </div>
          </div>
        </div>
      </div>
      <div className="tmp-portfolio-details-bento-image-area tmp-section-gapBottom">
        <div className="container">
          <MediaBlock project={project} layout={layout} />
          <div className="row mt--60">
            <div className="col-lg-8">
              <ContentArea project={project} />
            </div>
            <div className="col-lg-4">
              <ProjectSidebar project={project} />
            </div>
          </div>
        </div>
      </div>
      <RelatedCaseStudies detailRoute={detailRoute} currentSlug={project.slug} />
    </>
  )
}

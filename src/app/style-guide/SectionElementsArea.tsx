import Link from 'next/link'
import type { ReactNode } from 'react'

const sidebarItems = [
  ['colorPalette', '1. Color Palette'],
  ['gradient', '2. Color Gradient'],
  ['typography', '3. Typography'],
  ['formElements', '4. Form Elements'],
  ['pagination', '5. Pagination'],
  ['tooltips', '6. Tooltips'],
  ['avatars', '7. Avatars'],
  ['animatedHeading', '8. Animated Heading'],
  ['prsBorderRadius', '9. Border Radius'],
] as const

const colors = [
  ['bg-color-primary', '#3228e0', 'Primary Color'],
  ['bg-color-primary-alt', '#8680ff', 'Primary Alt'],
  ['bg-color-secondary', '#ac72f8', 'Secondary Color'],
  ['bg-color-secondary-alt', '#e07bc7', 'Secondary Alt'],
  ['bg-color-tertiary', '#f604b9', 'Tertiary Color'],
  ['bg-color-tertiary-alt', '#e07bc7', 'Tertiary Alt'],
  ['bg-color-yellow', '#e3f800', 'Yellow Color'],
  ['bg-color-yellow-alt', '#e7f368', 'Yellow Alt'],
  ['bg-color-primary-opacity-1', 'rgba(124, 118, 242, .15)', 'Primary Opacity 1'],
  ['bg-color-primary-opacity-2', 'rgba(123, 117, 240, .25)', 'Primary Opacity 2'],
  ['bg-color-tertiary-opacity-1', 'rgba(224, 123, 199, .15)', 'Tertiary Opacity 1'],
  ['bg-color-tertiary-opacity-2', 'rgba(224, 123, 199, .25)', 'Tertiary Opacity 2'],
  ['bg-color-dark', '#0e0f1e', 'Dark Color'],
  ['bg-color-dark-alt', '#171930', 'Dark Alt'],
  ['bg-color-darker', '#16172e', 'Darker Color'],
  ['bg-color-heading', '#ffffff', 'Heading Color'],
  ['bg-color-body', '#f9f9f9', 'Body Color'],
  ['bg-color-white', '#ffffff', 'White Color'],
  ['bg-color-pink', '#e07bc7', 'Pink Color'],
] as const

const gradients = Array.from({ length: 8 }, (_, index) => `bg-gradient-${index + 1}`)

const radiuses = [
  ['tmp-radius', 'radius', 'Radius Default'],
  ['radius-4', 'radius-4', 'Radius 4px'],
  ['radius-6', 'radius-6', 'Radius 6px'],
  ['radius-10', 'radius-10', 'Radius 10px'],
  ['radius-round', 'radius-round', 'Radius Round'],
] as const

function SectionShell({
  id,
  title,
  className = 'tmp-elements-area',
  children,
}: {
  id: string
  title: string
  className?: string
  children: ReactNode
}) {
  return (
    <div id={id} className={`${className} tmponhover tmp-shadow-box mb--60`}>
      <div className="wrapper">
        <div className="section-title">
          <h4 className="tmp-title-style-3">{title}</h4>
        </div>
        {children}
      </div>
    </div>
  )
}

function ColorBox({ className, value, label }: { className: string; value: string; label: string }) {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="color-box-inner">
        <div className={`color-box ${className} radius-10`} />
        <div className="content mt--10">
          <span className="tmp-title-style-2">{value}</span>
          <h6 className="title mb--0">{label}</h6>
        </div>
      </div>
    </div>
  )
}

function SectionElementsArea() {
  return (
    <div className="tmp-style-guide-area tmp-section-gapBottom">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-3">
            <div className="tmp-widget-sidebar sticky-top tmp-shadow-box tmponhover">
              <div className="inner">
                <div className="content-item-content">
                  <div className="tmp-widget-details">
                    <nav className="onepagenav">
                      <ul className="mainmenu tmp-default-sidebar-list">
                        {sidebarItems.map(([id, label], index) => (
                          <li className={index === 0 ? 'current' : undefined} key={id}>
                            <Link href={`#${id}`}>
                              <span>{label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <SectionShell id="colorPalette" title="Color Palette" className="tmp-elements-color">
              <div className="row g-5">
                {colors.map(([className, value, label]) => (
                  <ColorBox className={className} value={value} label={label} key={`${className}-${label}`} />
                ))}
              </div>
            </SectionShell>

            <SectionShell id="gradient" title="Color Gradient" className="tmp-elements-color">
              <div className="row g-5">
                {gradients.map((className, index) => (
                  <div className="col-lg-3 col-sm-6" key={className}>
                    <div className="color-box-inner">
                      <div className={`color-box ${className} radius-10`} />
                      <div className="content mt--10">
                        <h6 className="title mb--0">Gradient {index + 1}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionShell>

            <SectionShell id="typography" title="Typography">
              <div className="row g-5">
                <div className="col-lg-6">
                  <h1>Heading One</h1>
                  <h2>Heading Two</h2>
                  <h3>Heading Three</h3>
                  <h4>Heading Four</h4>
                  <h5>Heading Five</h5>
                  <h6>Heading Six</h6>
                </div>
                <div className="col-lg-6">
                  <p className="b1">B1- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p className="b2">B2- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p className="b3">B3- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p>Default- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
              <div className="row mt--40">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <h2 className="title">Heading Style One.</h2>
                  </div>
                </div>
                <div className="col-lg-12 mt--60">
                  <div className="section-title text-center">
                    <h2 className="tmp-title-style-2">Heading Style Two.</h2>
                  </div>
                </div>
              </div>
            </SectionShell>

            <SectionShell id="formElements" title="Form Elements">
              <div className="row g-5">
                <div className="col-lg-6">
                  <input type="text" placeholder="Text input" />
                </div>
                <div className="col-lg-6">
                  <input type="email" placeholder="Email input" />
                </div>
                <div className="col-lg-12">
                  <textarea placeholder="Textarea" rows={4} />
                </div>
                <div className="col-lg-6">
                  <div className="form-check">
                    <input className="form-check-input" id="tmp-checkbox-1" type="checkbox" defaultChecked />
                    <label className="form-check-label" htmlFor="tmp-checkbox-1">Checkbox checked</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-check">
                    <input className="form-check-input" id="tmp-radio-1" name="tmp-radio" type="radio" defaultChecked />
                    <label className="form-check-label" htmlFor="tmp-radio-1">Radio checked</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-check form-switch">
                    <input className="form-check-input" id="tmp-switch-1" type="checkbox" role="switch" />
                    <label className="form-check-label" htmlFor="tmp-switch-1">Switch input</label>
                  </div>
                </div>
              </div>
            </SectionShell>

            <SectionShell id="pagination" title="Pagination">
              <div className="row g-5">
                {['justify-content-start', 'justify-content-center', 'justify-content-end'].map((alignment) => (
                  <div className="col-lg-12" key={alignment}>
                    <nav>
                      <ul className={`tmp-pagination ${alignment}`}>
                        <li><Link href="#" aria-label="Previous"><i className="feather-chevron-left" /></Link></li>
                        <li><Link href="#">1</Link></li>
                        <li className="active"><Link href="#">2</Link></li>
                        <li><Link href="#">3</Link></li>
                        <li><Link href="#" aria-label="Next"><i className="feather-chevron-right" /></Link></li>
                      </ul>
                    </nav>
                  </div>
                ))}
              </div>
            </SectionShell>

            <SectionShell id="tooltips" title="Tooltips">
              <div className="profile-share">
                <Link href="#" className="avatar" data-tooltip="Mark JOrdan" tabIndex={0}><img src="/assets/images/testimonial/tooltip-01.png" alt="education" /></Link>
                <Link href="#" className="avatar" data-tooltip="Mark" tabIndex={0}><img src="/assets/images/testimonial/tooltip-02.png" alt="education" /></Link>
                <Link href="#" className="avatar" data-tooltip="Jordan" tabIndex={0}><img src="/assets/images/testimonial/tooltip-03.png" alt="education" /></Link>
                <div className="more-author-text">
                  <h5 className="total-join-students">Join Over 3000+ Clients</h5>
                  <p className="subtitle">Have new ideas every week.</p>
                </div>
              </div>
            </SectionShell>

            <SectionShell id="avatars" title="Avatars">
              <div className="row g-5 align-items-center">
                {[
                  ['size-lg', '/assets/images/testimonial/tooltip-01.png'],
                  ['', '/assets/images/testimonial/tooltip-02.png'],
                  ['size-sm', '/assets/images/testimonial/tooltip-03.png'],
                ].map(([size, src]) => (
                  <div className="col-lg-2 col-sm-4" key={src}>
                    <div className={`tmp-avatars m-auto ${size}`}>
                      <img src={src} alt="Author Images" />
                    </div>
                  </div>
                ))}
              </div>
            </SectionShell>

            <SectionShell id="animatedHeading" title="Animated Heading">
              <div className="row g-5">
                <div className="col-lg-12">
                  {['Clip', 'Rotate', 'Type', 'Loading', 'Zoom'].map((label) => (
                    <h3 className="title" key={label}>
                      {label} Animated{' '}
                      <span className="header-caption">
                        <span className="cd-headline clip is-full-width">
                          <span className="cd-words-wrapper">
                            <b className="is-visible theme-gradient">{label} One.</b>
                            <b className="is-hidden theme-gradient">{label} Two.</b>
                            <b className="is-hidden theme-gradient">{label} Three.</b>
                          </span>
                        </span>
                      </span>
                    </h3>
                  ))}
                </div>
              </div>
            </SectionShell>

            <SectionShell id="prsBorderRadius" title="Border Radius">
              <div className="row g-5">
                {radiuses.map(([className, value, label]) => (
                  <div className="col-lg-3 col-sm-6" key={className}>
                    <div className="color-box-inner">
                      <div className={`color-box bg-color-primary ${className}`} />
                      <div className="content mt--10">
                        <span className="tmp-title-style-2 text-lowercase">{value}</span>
                        <h6 className="title mb--0">{label}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionShell>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionElementsArea

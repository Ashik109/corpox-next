function SectionSingleServiceBox() {
  return (
    <>
      <div className="service service__style--1 service-in-landing bg-color-card radius text-start tmp-border-none tmponhover">
      <div className="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-book">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
      </div>
      <div className="content">
      <h4 className="title w-600"><a href="https://doc.inversweb.com/corpox/">Online Documentation</a></h4>
      <p className="description b1 color-gray mb--20">Well organized and up to date</p>
      <div className="doc-btn">
      <a className="tmp-btn radius-round btn-small btn-border" target="_blank" href="https://doc.inversweb.com/corpox/">Online Documentation</a>
      </div>
      </div>
      </div>
    </>
  )
}

export default SectionSingleServiceBox

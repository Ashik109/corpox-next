import Link from 'next/link'
function SectionSingleServiceBox2() {
  return (
    <>
      <div className="service service__style--1 service-in-landing bg-color-card radius text-start tmp-border-none tmponhover mt--30 support">
      <div className="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-headphones">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
      </svg>
      </div>
      <div className="content">
      <h4 className="title w-600"><Link href="#">Dedicated Support</Link></h4>
      <p className="description b1 color-gray mb--20">Need support ? Submit a ticket. We will be
                                          happy to assist you.</p>
      <div className="doc-btn">
      <Link className="tmp-btn btn-small btn-border radius-round" target="_blank" href="https://themeforest.net/item/corpox-business-consulting-bootstrap-5-html-template/59767866/support">Get Support</Link>
      </div>
      <ul className="liststyle">
      <li><span>Support Time:</span> Monday – Friday</li>
      <li><span>Response Time:</span> Maximum 24 hours</li>
      </ul>
      </div>
      </div>
    </>
  )
}

export default SectionSingleServiceBox2

import Link from 'next/link'
function SectionBreadcarumbArea() {
  return (
    <>
      <div className="breadcrumb-area breadcarumb-style-1 ptb--90 pt--120">
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <div className="breadcrumb-inner text-start">
      <div className="breadcrumb-page-title">
      <ul className="page-list">
      <li className="tmp-breadcrumb-item"><Link href="/">Home</Link></li>
      <li className="tmp-breadcrumb-item active">Elements</li>
      </ul>
      <div className="line-separator"></div>
      </div>
      <h1 className="title h1">Simple <span className="theme-gradient">Elements</span></h1>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default SectionBreadcarumbArea

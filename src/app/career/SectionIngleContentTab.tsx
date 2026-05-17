import Link from 'next/link'
function SectionIngleContentTab() {
  return (
    <>
      <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
      <div className="row g-5">
      <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="apply-wrapper">
      <div className="image-area">
      <Link href="/career-details">
      <img src="/assets/images/career/01.webp" alt="career" />
      </Link>
      </div>
      <div className="content">
      <h4 className="title"><Link href="/career-details">Manufacturing Operations Manager</Link></h4>
      <p className="desc">Oversees the entire production process, ensuring efficiency, quality, and cost-effectiveness.Develops production plans and strategies.Monitors workflow and optimizes resources.</p>
      <Link href="/career-details" className="text-btn">View Careers Details</Link>
      </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="apply-wrapper">
      <div className="image-area">
      <Link href="/career-details">
      <img src="/assets/images/career/02.webp" alt="career" />
      </Link>
      </div>
      <div className="content">
      <h4 className="title"><Link href="/career-details">Production Supervisor</Link></h4>
      <p className="desc">Assigns tasks and monitors team performance.Ensures production targets are met.Troubleshoots operational issues and maintains equipment efficiency.Upholds safety protocols and quality control measures.</p>
      <Link href="/career-details" className="text-btn">View Careers Details</Link>
      </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="apply-wrapper">
      <div className="image-area">
      <Link href="/career-details">
      <img src="/assets/images/career/03.webp" alt="career" />
      </Link>
      </div>
      <div className="content">
      <h4 className="title"><Link href="/career-details">Supply Chain Coordinator</Link></h4>
      <p className="desc">Coordinates procurement, logistics, and inventory control.Works with suppliers to maintain cost-effective operations.Ensures on-time delivery of materials and products.</p>
      <Link href="/career-details" className="text-btn">View Careers Details</Link>
      </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="apply-wrapper">
      <div className="image-area">
      <Link href="/career-details">
      <img src="/assets/images/career/04.webp" alt="career" />
      </Link>
      </div>
      <div className="content">
      <h4 className="title"><Link href="/career-details">Quality Control Specialist</Link></h4>
      <p className="desc">Conducts inspections and tests on products and materials.Identifies defects and implements corrective actions.Develops quality control procedures and training programs.</p>
      <Link href="/career-details" className="text-btn">View Careers Details</Link>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default SectionIngleContentTab

'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useHoverAnimation } from '../components/useHoverAnimation'

interface Service {
  title: string
  description: string
  icon: {
    src: string
    width: number
    height: number
    alt: string
  }
}

const services: Service[] = [
  {
    title: 'Brand Building',
    description: 'We help businesses create a strong brand identity, enhance visibility, and build lasting customer trust.',
    icon: {
      src: '/assets/images/services/icons/01.png',
      width: 381,
      height: 319,
      alt: 'service'
    }
  },
  {
    title: 'Client Support',
    description: 'We provide dedicated assistance, resolve issues quickly, ensure smooth communication, and deliver exceptional customer.',
    icon: {
      src: '/assets/images/services/icons/02.png',
      width: 342,
      height: 364,
      alt: 'service'
    }
  },
  {
    title: 'Data Insights',
    description: 'We analyze business data, find patterns, give recommendations, and support strategic decisions.',
    icon: {
      src: '/assets/images/services/icons/03.png',
      width: 282,
      height: 316,
      alt: 'service'
    }
  }
]

function ServiceCard({ service }: { service: Service }) {
  const hoverRef = useHoverAnimation<HTMLDivElement>()

  return (
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
      <div
        ref={hoverRef}
        className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover"
      >
        <div className="icon">
          <Image
            alt={service.icon.alt}
            width={service.icon.width}
            height={service.icon.height}
            src={service.icon.src}
            className="image-auto"
          />
        </div>
        <div className="content">
          <h4 className="title w-600">
            <Link href="/service-details/management-leadership">{service.title}</Link>
          </h4>
          <p className="description mb--0">
            {service.description}
          </p>
          <div className="discover-btn mt--30">
            <Link
              className="tmp-btn round btn-small btn-border hover-icon-reverse"
              href="/service-details/management-leadership"
            >
              <span className="icon-reverse-wrapper">
                <span className="btn-text">Discover services</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right" />
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right" />
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div className="shape-service-1">
          <Image
            alt="service"
            width={155}
            height={155}
            src="/assets/images/services/shape/01.png"
          />
        </div>
      </div>
    </div>
  )
}

export default function ServicesCardOne() {
  return (
    <>
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </>
  )
}

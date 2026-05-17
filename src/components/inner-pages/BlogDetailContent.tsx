import Link from 'next/link'
import BodyClass from '../../app/white-01-index-consulting/BodyClass'
import type { BlogPost } from '../../data/blogPosts'
import { BLOG_LIST_ITEMS, blogPosts } from '../../data/blogPosts'

const DEFAULT_VIDEO_EMBED = 'https://www.youtube.com/embed/gW22hVe5_fI'
const DEFAULT_VIDEO_POPUP = 'https://www.youtube.com/watch?v=4jnzf1yj48M'
const DEFAULT_VIDEO_MP4 = '/assets/images/video/01.mp4'

export type BlogDetailLayout =
  | 'default'
  | 'standard'
  | 'sidebar'
  | 'sidebar-right'
  | 'sidebar-left'
  | 'video'
  | 'video-two'
  | 'video-popup'

type Props = {
  post: BlogPost
  detailRoute: string
  layout?: BlogDetailLayout
}

function SocialOnImage() {
  return (
    <ul className="social-icon social-default justify-content-start">
      <li><Link target="_blank" rel="noreferrer" href="https://www.facebook.com/"><i className="feather-facebook" /></Link></li>
      <li><Link target="_blank" rel="noreferrer" href="https://www.twitter.com"><i className="feather-twitter" /></Link></li>
      <li><Link target="_blank" rel="noreferrer" href="https://www.instagram.com/"><i className="feather-instagram" /></Link></li>
      <li><Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><i className="feather-linkedin" /></Link></li>
    </ul>
  )
}

function RelatedPostsSidebar({ detailRoute }: { detailRoute: string }) {
  return (
    <div className="left-sidebar sticky-top top-120">
      <div className="single-wrapper-details-right-p similar-post bg-card tmponhover">
        <h4>Related Posts</h4>
        <ul>
          {blogPosts.map((p) => (
            <li key={p.slug}><Link href={`${detailRoute}/${p.slug}`}>{p.title} {p.titleHighlight}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function TitleBlock({ post }: { post: BlogPost }) {
  return (
    <>
      <div className="tmp-section-title-border text-center">
        <div className="pres-line-separator-wrapper text-center mb--10">
          <div className="line-separator line-left" />
          <span className="subtitle"><span className="number">01</span><span className="subtitle-text">{post.subtitle}</span></span>
          <div className="line-separator line-right" />
        </div>
        <h2 className="title w-700 mt--20 tmp-title-split">
          {post.title}
          {post.titleHighlight ? (<><br /><span className="theme-gradient">{post.titleHighlight}</span></>) : null}
        </h2>
      </div>
      <ul className="tmp-meta-list">
        <li><i className="feather-user" /><Link href="#">{post.author}</Link></li>
        <li><i className="feather-calendar" />{post.date}</li>
        {post.comments ? <li><i className="feather-message-circle" />{post.comments}</li> : null}
      </ul>
    </>
  )
}

function DetailBanner({ post, layout }: { post: BlogPost; layout: BlogDetailLayout }) {
  const isSidebarLayout = ['sidebar', 'sidebar-right', 'sidebar-left', 'video', 'video-two', 'video-popup'].includes(layout)
  const isVideo = layout === 'video'
  const isVideoTwo = layout === 'video-two'
  const isVideoPopup = layout === 'video-popup'
  const titleCol = layout === 'standard' ? 'col-lg-12' : isSidebarLayout || isVideo || isVideoTwo || isVideoPopup ? 'col-lg-12' : 'col-lg-8 offset-lg-2'

  return (
    <div className="post-page-banner tmp-section-gapTop">
      <div className="container">
        <div className={isVideo || isVideoTwo ? 'row g-0' : 'row'}>
          <div className={titleCol}>
            <div className={isVideo || isVideoTwo ? 'content text-center mb--60' : 'content text-center'}>
              <TitleBlock post={post} />
              {isVideo ? (
                <iframe
                  className="w-100 radius mt--30"
                  style={{ minHeight: 615 }}
                  src={post.videoEmbedUrl || DEFAULT_VIDEO_EMBED}
                  title={post.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : null}
              {isVideoTwo ? (
                <div className="thumbnail-video-service tmponhover">
                  <video autoPlay muted loop playsInline preload="metadata">
                    <source src={post.videoMp4 || DEFAULT_VIDEO_MP4} type="video/mp4" />
                  </video>
                </div>
              ) : null}
              {isVideoPopup ? (
                <div className="thumbnail position-relative blog-details-thumbnail-large mt--60">
                  <img className="w-100 radius" src={post.heroImage} alt={post.title} />
                  <SocialOnImage />
                  <Link className="tmp-btn rounded-player popup-video" href={post.videoPopupUrl || DEFAULT_VIDEO_POPUP}>
                    <span><i className="feather-play" /></span>
                  </Link>
                </div>
              ) : null}
              {!isVideo && !isVideoTwo && !isVideoPopup ? (
                <div className="thumbnail position-relative blog-details-thumbnail-large mt--60">
                  <img className="w-100 radius" src={post.heroImage} alt={post.title} />
                  {isSidebarLayout ? <SocialOnImage /> : null}
                  {post.heroCaption && !isSidebarLayout ? <figcaption className="mt--15">{post.heroCaption}</figcaption> : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BlogBodyContent({ post }: { post: BlogPost }) {
  return (
    <div className="content">
      <p>But the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
      <h4>There are many variations of passages.</h4>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <h4>It was popularised in the 1960s with the</h4>
      <p>It has survived not only five centuries, but also the leap into electronic typesetting.</p>
      <div className="wp-block-gallery columns-3 is-cropped">
        <ul className="blocks-gallery-grid">
          {post.gallery.map((img) => (
            <li className="blocks-gallery-item" key={img}><figure><img className="radius-4" src={img} alt="Blog" /></figure></li>
          ))}
        </ul>
      </div>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
      <div className="category-meta">
        <span className="text">Tags:</span>
        <div className="tagcloud">{post.tags.map((tag) => <Link href="#" key={tag}>{tag}</Link>)}</div>
        <span className="text mt--30 d-block">Share This Post:</span>
        <SocialOnImage />
      </div>
    </div>
  )
}

function RecentNewsSection({ detailRoute }: { detailRoute: string }) {
  return (
    <div className="tmp-blog-area tmp-section-gapBottom">
      <div className="container">
        <div className="row g-5 mt--5">
          {blogPosts.map((p) => (
            <div className="col-lg-6" key={p.slug}>
              <div className="tmp-card box-card-style-default card-list-view tmponhover">
                <div className="inner">
                  <div className="thumbnail invers-anime">
                    <Link className="image" href={`${detailRoute}/${p.slug}`}><img src={p.heroImage} alt="Blog" /></Link>
                  </div>
                  <div className="content">
                    <h4 className="title"><Link href={`${detailRoute}/${p.slug}`}>{p.title} {p.titleHighlight}</Link></h4>
                    <p className="descriptiion">{p.excerpt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function normalizeLayout(layout: BlogDetailLayout): BlogDetailLayout {
  if (layout === 'sidebar') return 'sidebar-right'
  return layout
}

export default function BlogDetailContent({ post, detailRoute, layout = 'default' }: Props) {
  const L = normalizeLayout(layout)
  const hasLeftSidebar = ['sidebar-left', 'video', 'video-two', 'video-popup'].includes(L)
  const hasRightSidebar = L === 'sidebar-right'
  const contentPadding = hasLeftSidebar || hasRightSidebar ? 'pt--60' : 'pt--30'

  return (
    <>
      <BodyClass className="overflow-x-visible" />
      <div className="tmp-blog-details-area">
        <DetailBanner post={post} layout={L} />
        <div className={`blog-details-content ${contentPadding} tmp-section-gapBottom`}>
          <div className="container">
            <div className="row g-5">
              {hasLeftSidebar ? (
                <div className="col-lg-4"><RelatedPostsSidebar detailRoute={detailRoute} /></div>
              ) : null}
              <div className={hasLeftSidebar ? 'col-lg-8' : hasRightSidebar ? 'col-lg-8' : 'col-lg-10 offset-lg-1'}>
                <BlogBodyContent post={post} />
              </div>
              {hasRightSidebar ? (
                <div className="col-lg-4">
                  <div className="blog-details-right-sidebar-standard">
                    <RelatedPostsSidebar detailRoute={detailRoute} />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {L === 'default' || L === 'standard' ? <RecentNewsSection detailRoute={detailRoute} /> : null}
    </>
  )
}

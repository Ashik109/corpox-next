import Link from 'next/link'
function VideoConstruction() {
    return (
        <div className="large-bg-area bg-finance-video-thumb bg_image jarallax">
            <Link className="tmp-btn rounded-player popup-video" href="https://www.youtube.com/watch?v=4jnzf1yj48M">
                <span>
                    <i className="feather-play" />
                </span>
            </Link>
        </div>
    );
}

export default VideoConstruction;

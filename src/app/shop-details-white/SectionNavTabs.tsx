function SectionNavTabs() {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
      <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Description</button>
      </li>
      <li className="nav-item" role="presentation">
      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Additional information</button>
      </li>
      <li className="nav-item" role="presentation">
      <button className="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Reviews (1)</button>
      </li>
      </ul>
    </>
  )
}

export default SectionNavTabs

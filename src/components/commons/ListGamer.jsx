import React from 'react'

function ListGamer() {
  return (
      <section className="contact-area third-contact-bg" id="actionForm">
        <div className="container custom-container">
      <div className="table-responsive-xl">
        <table className="table mt-0">
          <thead>
          <tr>
            <th scope="col">mark all as soon</th>
            <th scope="col">VOICES</th>
            <th scope="col">POSTS</th>
            <th scope="col">See</th>
          </tr>
          </thead>
          <tbody>
          <tr className="community-post-type">
            <th><span>Game Concept</span></th>
          </tr>
          <tr>
            <th scope="row">
              <div className="community-post-wrap">
                <div className="community-post-content">
                  <a href="/#">Electronic game that involves</a>
                  <span>by <a href="/#">Tanvir snap</a> Yesterday 12 : 19</span>
                </div>
                <div className="community-post-tag">
                  <a href="/#">@All</a>
                </div>
              </div>
            </th>
            <td>3</td>
            <td>4</td>
            <td className="community-bell"><a href="/#"><i className="far fa-bell" /></a></td>
          </tr>
          <tr>
            <th scope="row">
              <div className="community-post-wrap">
                <div className="community-post-content">
                  <a href="/#">A vertically scrolling video</a>
                  <span>by <a href="/#">Killer12</a> Yesterday 12 : 19</span>
                </div>
                <div className="community-post-tag">
                  <a href="/#">@All</a>
                </div>
              </div>
            </th>
            <td>5</td>
            <td>9</td>
            <td className="community-bell"><a href="/#"><i className="far fa-bell" /></a></td>
          </tr>
          <tr>
            <th scope="row">
              <div className="community-post-wrap">
                <div className="community-post-content">
                  <a href="/#">Electronic game that involves</a>
                  <span>by <a href="/#">Tanvir snap</a> Yesterday 12 : 19</span>
                </div>
                <div className="community-post-tag">
                  <a href="/#">@All</a>
                  <a href="/#">@Design</a>
                </div>
              </div>
            </th>
            <td>7</td>
            <td>12</td>
            <td className="community-bell"><a href="/#"><i className="far fa-bell" /></a></td>
          </tr>
          </tbody>
        </table>
      </div>
        </div>
      </section>
  )
}

export default ListGamer

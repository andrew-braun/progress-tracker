import React from "react"
import Layout from "../components/layout"


export default function Home() {
  return (
    <Layout>
      <div className="main-container" id="home-main">
        <aside className="left-bar"></aside>
        <main className="blog-feed">
          <h2>What's Andrew learning about?</h2>
          <div>Posts</div>
        </main>
        <aside className="right-bar"></aside>
      </div>
    </Layout>
  )
}



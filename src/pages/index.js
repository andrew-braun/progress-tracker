import React from "react"
import Layout from "../components/layout"
import ActivityLog from "../components/activityLog"

export default function Home() {
  return (
    <Layout>
      <div className="main-container" id="home-main">
        <main className="main-container">
          <h2>What's Andrew learning?</h2>
          <section className="activity-log-container">
            {<ActivityLog />}
          </section>
        </main>
      </div>
    </Layout>
  )
}

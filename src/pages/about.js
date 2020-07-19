import React from "react"
import Layout from "../components/layout"
import aboutStyles from "./styles/about.module.css"

export default function About() {
    return (
        <Layout>
            <main id="about-page">
                <header className={aboutStyles.aboutHeader}>
                    <h1>About me and this site</h1>
                </header>
                <p>
                    This is a site created by me, Andrew Braun, to track
                    what I learn and do every day.
                </p>
            </main>
        </Layout>
    )
}
import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import LogEntry from "./logEntry"
import styles from "./activityLog.module.css"

export default function ActivityLog() {
    const dataQuery = useStaticQuery(graphql` 
        query MyQuery {
            allTrackerJson {
            edges {
                node {
                date
                mainCategory
                subCategory
                focus
                description
                hours
                confidence
                keywords
                id
                }
            }
            }
        }
    `)
    const data = dataQuery.allTrackerJson.edges;
    return (
        <div className={styles.activityLog}>
            {data.map(( { node }, index) => (
                <LogEntry logData={node} index={index}/>
            ))}
        </div>
    )
}
import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import LogEntry from "./logEntry"

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
        <div className="activity-log">
            <LogEntry logData={data} />
        </div>
    )
}
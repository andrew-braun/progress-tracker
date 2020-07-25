import React from 'react'

export default function LogEntry(props) {
    return (
        <div class="log-entry">
            {props.logData.map(( { node }, index) => (
                <ul>
                    <li>{node.date}</li>
                    <li>{node.mainCategory}</li>
                    <li>{node.subCategory}</li>
                    <li>{node.focus}</li>
                </ul>
                )
            )}
        </div>
    )
}
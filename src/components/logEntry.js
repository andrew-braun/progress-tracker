import React from 'react'

export default function LogEntry(props) {
    return (
        <div class="log-entry">
                <article className="log-entry-content">
                    <div className="entry-date">
                        {props.logData.date}
                    </div>
                    <div className="entry-categories">
                        <span className="entry-main-category">
                            {`${props.logData.mainCategory} - `}
                        </span>
                        <span className="entry-main-category">
                            {`${props.logData.subCategory} - `}
                        </span>
                        <span className="entry-main-category">
                            {`${props.logData.focus}`}
                        </span>
                    </div>
                    <div className="entry-description">
                        {props.logData.description}
                    </div>
                    <div className="entry-hours">
                        {`${props.logData.hours} hours`}
                    </div>
                    <div className="entry-confidence">
                        {`I felt ${props.logData.confidence * 100}% confident`}
                    </div>
                </article>
                
        </div>
    )
}
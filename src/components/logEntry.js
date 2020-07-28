import React, { useState } from "react"
// import cn from "classnames"
import Modal from "./modal"
import useModal from "./hooks/useModal";
import styles from "./logEntry.module.css"

export default function LogEntry(props) {
	const {show, toggle} = useModal();
	return (
		<div className={styles.logEntry}>
			<article className={styles.logEntryGrid}>
				<div className={styles.entryDate}>{props.logData.date}</div>
				<div className={styles.entryHours}>
					{`${props.logData.hours} hours`}
				</div>
				<div className={styles.entryCategories}>
					<div className={styles.entryMainCategory}>
						{`${props.logData.mainCategory}`}

						<div className={styles.entrySubCategory}>
							{`${props.logData.subCategory}`}

							<div className={styles.entryFocusCategory}>
								{`${props.logData.focus}`}
							</div>
						</div>
					</div>
				</div>
				<div className={styles.logEntrySubGrid1}>
					<div className={styles.entryConfidence}>
						{`Confidence: ${props.logData.confidence * 100}%`}
					</div>
					<button className={styles.descriptionButton}
						onClick={toggle}>
						Notes
					</button>
				</div>
			</article>
			<Modal 
				show={show}
				hide={toggle}
				>
				<span className={styles.descriptionText}>{props.logData.description}</span>
			</Modal>
		</div>
	)
}

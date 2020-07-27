import React from "react"
import cn from "classnames"
import Modal from "./modal"
import styles from "./logEntry.module.css"

export default function LogEntry(props) {
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
					<button className={styles.descriptionButton}>Notes</button>
				</div>
			</article>
            <Modal>
                <div className={styles.descriptionModal}>
                    <div className={styles.entryDescription}>
                        <span>{props.logData.description}</span>
                    </div>
                </div>
            </Modal>
		</div>
	)
}

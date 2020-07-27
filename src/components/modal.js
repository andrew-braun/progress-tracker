import React from "react"
import styles from "./modal.module.css"

// export default function Modal {
//     return (
//         <div className={styles.modal}>
//         {children}
//         </div>
//     )
// }

class Modal extends React.Component {
    render() {
        return(
            <div className={styles.modalContainer}>
                {this.props.children}
            </div>
        )
    }
}

export default Modal
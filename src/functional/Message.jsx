import React from "react";
import styles from "../resources/styles/Message.module.css";

export default function Message(){

    return (
        <div className={styles["message-container"]}>
            <h1>Soundtrack</h1>
            <h1>Playlist</h1>
            <h1><span>Powered with AI.</span></h1>
            <p>Introducing the world's first custom playlist generator</p>
        </div>
    )
}
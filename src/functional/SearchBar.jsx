/***
 * UI to handle search request
 */

import React from "react";
import styles from "../resources/styles/SearchBar.module.css"

export default function SearchBar(){
    return(
        <div className={styles["search-container"]}>
            <div className={styles["search-card"]}>
                <form onSubmit="#">
                    <input type="text"  id="search" aria-placeholder="search for tracks" placeholder="Enter a short description"/>
                    <label for="submit"><i class='bx bx-send'></i></label>
                    <input id="submit" type="submit" />
                </form>
            </div>
        </div>
    )
}
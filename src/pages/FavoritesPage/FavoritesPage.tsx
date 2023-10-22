import React from "react";
import styles from "./FavoritesPage.module.css";
import {Outlet} from "react-router-dom";

export const FavoritesPage: React.FC = () => {
  const data = [{sity: "Text", temp: 42, wind: 25}]
	return (
			<div className={styles["favorite-page"]}>
				<div className="container">
					<div className={`${styles["favorite-page__content"]} ${styles["safe-padding"]}`}>
						<div className="favorite-page__card">
              Favorite
            </div>
					</div>
				</div>
			</div>
	)
}

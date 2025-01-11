import styles from "./Card.module.css";

import cardImg from "../../assets/bg-pattern-card.svg";
import avatarImg from "../../assets/image-victor.jpg";
import topSvg from "../../assets/bg-pattern-top.svg";
import bottomSvg from "../../assets/bg-pattern-bottom.svg";

function Card() {
  return (
    <div className={styles.container}>
      <div>
        <img src={topSvg} alt="" className={styles.hidden} />
      </div>

      <div className={styles.imgContainer}>
        <img className={styles.cardImg} src={cardImg} alt="" />
        <img className={styles.avatarImg} src={avatarImg} alt="Victor Crest" />
      </div>

      <h1 className={styles.name}>
        Victor Crest <span>26</span>
      </h1>
      <p className={styles.location}>London</p>

      <div className={styles.stats}>
        <p>
          <span>80K</span>Followers
        </p>
        <p>
          <span>803K</span>Likes
        </p>
        <p>
          <span>1.4K</span>Photos
        </p>
      </div>

      <div>
        <img src={bottomSvg} alt="" className={styles.hidden1} />{" "}
      </div>
    </div>
  );
}

export default Card;

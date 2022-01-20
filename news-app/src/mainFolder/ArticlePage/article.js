import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './article.module.css';
import Preloader from '../prefolder/preloader';


function Article(props) {
    const params = useParams();

    return (
        <div>
            <div className={styles.ArticleBlock}>
                <div className={styles.Imgblock}>
                    <img className={styles.ImgInner} src={props.CardBox[params.id].urlToImage} alt={props.newsArt[params.id].title}></img>
                </div>
                <div className={styles.descrBlock}>
                    <h2 className={styles.descrTitle}>{props.CardBox[params.id].title}</h2>
                    <p className={styles.content}>{props.CardBox[params.id].content}</p>
                    <div className={styles.backNews}>
                        <p className={styles.BackDate}>{props.CardBox[params.id].publishedAt}</p>
                        <Link to='/' style={{ 
                            textDecoration: 'none', 
                            fontWeight: 'bold', 
                            textTransform: 'uppercase' 
                            }}><p>Back</p></Link>
                    </div>
                </div>
            </div>
            <Preloader />
        </div>
    )
}

export default Article;
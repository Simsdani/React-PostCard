
import React from "react";
import mountains from "./mountains.jpg";
import styles from "./PostCard.module.css"

function PostCard() {
    return (
        <div className= {styles.card}>
            <div className= {styles.gridContainer}>
            <img src={mountains} alt="desk" className={styles.image}/>
            <div className = {styles.content}>
                <p className = {styles.date}>4 Days Ago</p>
                <p className = {styles.title}>Post One</p>
                <p className = {styles.description}>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Sed id eros vel velit dictum tristique.</p>

            </div>
            <div className = {styles.footer}>
            <div className = {styles.footerItem}>
                <p className = {styles.footerValue}>4<sup>m</sup></p>
                <p className = {styles.footerLabel}>READ</p>
            </div>
            <div className = {styles.footerItem}>
                <p className = {styles.footerValue}>5123</p>
                <p className = {styles.footerLabel}>VIEWS</p>
            </div>
            <div className = {styles.footerItem}>
                <p className = {styles.footerValue}>12</p>
                <p className = {styles.footerLabel}>COMMENTS</p>
            </div>
            </div>
            </div>

            <div className= {styles.gridContainer}>
            <img src={mountains} alt="desk" className={styles.image}/>
            <div className = {styles.content}>
                <p className = {styles.date}>4 Days Ago</p>
                <p className = {styles.title}>Post One</p>
                <p className = {styles.description}>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Sed id eros vel velit dictum tristique.</p>

            </div>
            <div className = {styles.footer}>
            <div className = {styles.footerItem}>
                <p className = {styles.footerValue}>4<sup>m</sup></p>
                <p className = {styles.footerLabel}>READ</p>
            </div>
            <div className = {styles.footerItem}>
                <p className = {styles.footerValue}>5123</p>
                <p className = {styles.footerLabel}>VIEWS</p>
            </div>
            <div className = {styles.footerItem}>
                <p className = {styles.footerValue}>12</p>
                <p className = {styles.footerLabel}>COMMENTS</p>
            </div>
            </div>
            </div>

            <div className= {styles.gridContainer}>
            <img src={mountains} alt="desk" className={styles.image}/>
            <div className = {styles.content}>
                <p className = {styles.date}>4 Days Ago</p>
                <p className = {styles.title}>Post One</p>
                <p className = {styles.description}>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Sed id eros vel velit dictum tristique.</p>

            </div>
            <div className = {styles.footer}>
            <div className = {styles.footerItem}>
                <p className = {styles.footerValue}>4<sup>m</sup></p>
                <p className = {styles.footerLabel}>READ</p>
            </div>
            <div className = {styles.footerItem}>
                <p className = {styles.footerValue}>5123</p>
                <p className = {styles.footerLabel}>VIEWS</p>
            </div>
            <div className = {styles.footerItem}>
                <p className = {styles.footerValue}>12</p>
                <p className = {styles.footerLabel}>COMMENTS</p>
            </div>
            </div>
            </div>
            
            <div className= {styles.gridContainer}>
            <img src={mountains} alt="desk" className={styles.image}/>
            <div className = {styles.content}>
                <p className = {styles.date}>4 Days Ago</p>
                <p className = {styles.title}>Post One</p>
                <p className = {styles.description}>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Sed id eros vel velit dictum tristique.</p>

            </div>
            <div className = {styles.footer}>
            <div className = {styles.footerItem}>
                <p className = {styles.footerValue}>4<sup>m</sup></p>
                <p className = {styles.footerLabel}>READ</p>
            </div>
            <div className = {styles.footerItem}>
                <p className = {styles.footerValue}>5123</p>
                <p className = {styles.footerLabel}>VIEWS</p>
            </div>
            <div className = {styles.footerItem}>
                <p className = {styles.footerValue}>12</p>
                <p className = {styles.footerLabel}>COMMENTS</p>
            </div>
            </div>
            </div>
        </div>

        
        
    );
}

export default PostCard;


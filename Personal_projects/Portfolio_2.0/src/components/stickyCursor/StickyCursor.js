'use client';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import './cursor.css';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function StickyCursor({ isActive }) {

    const size = isActive ? 250 : 15;


    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    // const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
    const smoothMouse = {
        // Sping effect
        // x: useSpring(mouse.x),
        // y: useSpring(mouse.y)
        x: mouse.x,
        y: mouse.y
    }

    const manageMouseMove = e => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - size / 10);
        mouse.y.set(clientY - size / 10);
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove)
        }
    }, [isActive])

    return (
        <div className={styles.cursorContainer}>
            <motion.div
                style={{
                    width: size,
                    height: size,
                    transition: `height 0.3s ease-out, width 0.3s ease-out`,
                    left: smoothMouse.x,
                    top: smoothMouse.y,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'fixed',
                    background: '#8c8c73',
                    borderRadius: '50%',
                }}
                className={styles.cursor}>
                    <img src='/up-right-arrow.png' width={isActive ? 100 : 0}/>
            </motion.div>
        </div>
    )
}
'use client';
import React, { useState, useEffect } from 'react';
import styles from './MeowArticle.module.css';

function MeowArticle() {
  const [text, setText] = useState('데이터 준비중...');
  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com')
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
}

export default MeowArticle;

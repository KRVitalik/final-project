import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ExercisesCategories.module.scss';

const cn = classNames.bind(styles);

const ExercisesCategories = () => {

  return (
      <div className={cn('exercises_category_name_container')}>
        <Link className={cn('exercises_category_name')} to="body-parts" >Body parts</Link>
        <Link className={cn('exercises_category_name')} to="muscles" >Muscles</Link>
        <Link className={cn('exercises_category_name')} to="equipment" >Equipment</Link>
      </div>
  );
};

export default ExercisesCategories;
import React, { Suspense } from 'react'
import ExercisesCategories from './ExercisesCategories/ExercisesCategories'
import classNames from 'classnames/bind';
import styles from './ExercisesPage.module.scss';
import { Outlet } from 'react-router-dom';

const cn = classNames.bind(styles);

const ExercisesPage = () => {
  return (
    <>
    <section className={cn('section')}>
      <h2 className={cn('exercises_category_title')}>Exercises</h2>
      <ExercisesCategories/>
    </section>
    <Suspense fallback={'Loading'}>
    <Outlet />
    </Suspense>
    </>
  )
}

export default ExercisesPage
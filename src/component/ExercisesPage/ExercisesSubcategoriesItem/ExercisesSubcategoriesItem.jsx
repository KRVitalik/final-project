import React, { useEffect, useState } from 'react'
import data from '../../filters.json'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import classNames from 'classnames/bind';
import styles from './ExercisesSubcategoriesItem.scss';
import { useParams } from 'react-router-dom';
import { LiItem } from './ExercisesSubcategoriesItem.styled';
import Slider from 'react-slick';
const cn = classNames.bind(styles);

const ExercisesSubcategoriesItem = () => {
    const [category, setCategory] = useState([])
    const params = useParams()

    function upperCaseName(el) {
        setCategory(el.map((item) => ({ ...item, name: item.name[0].toUpperCase() + item.name.slice(1) })));
    }

useEffect(() => {
  switch (params.name) {
    case 'body-parts':
        if(category.length === 0){
            const bodyParts = data.filter((element) => element.filter === 'Body parts')
            upperCaseName(bodyParts)
        }
        break;
        case 'muscles':
            if(category.length === 0){
                const muscles = data.filter((element) => element.filter === 'Muscles')
                upperCaseName(muscles)
        }
        break;
        case 'equipment':
            if(category.length === 0){
                const equipment = data.filter((element) => element.filter === 'Equipment')
                upperCaseName(equipment)
            }
            break;
        default:
            if(category.length === 0){
                const bodyParts = data.filter((element) => element.filter === 'Body parts')
                upperCaseName(bodyParts)
            }
            break;
  };
    }, [category, params.name])



const settings = {
        // className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        initialSlide: 1,
        slidesToShow: 5,
        slidesToScroll: 5,
        rows: 2,
        width:100,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        rows: 3,
                    }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    rows: 10,
                    initialSlide: 0,
                    infinite: true,
                }
            }
        ]
};
  return (
      <ul className={cn('ExercisesSubcategoriesItem_container')}>
        <Slider {...settings}>
        {category.map((item)=>
<React.Fragment key={item.name}> 
        <LiItem 
        imgURL={item.imgURL}> 
            <div className={cn('ExercisesSubcategoriesItem_info')}>
            <h3 className={cn('ExercisesSubcategoriesItem_name')}>{item.name}</h3>
            <p className={cn('ExercisesSubcategoriesItem_filter')}>{item.filter}</p>
            </div>
        </LiItem>
</React.Fragment>
        )}
        </Slider>
        </ul>
  )
        };

export default ExercisesSubcategoriesItem
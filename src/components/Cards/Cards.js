import React, {useEffect, useState} from 'react';
import {
  Card, CardImg, CardBody
} from 'reactstrap';
import './cards.css'
import img1 from '../../images/star.png'

const Example = ({searchs}) => {
    console.log(searchs)

    return (
        <div className="cards">
            {
                searchs.length==0 ?
                <div className="result">No results found</div>
                :
                searchs.map((search) => {
                    return(
                        <Card className="card" key={search.id}>
                            <CardImg className="image"
                            src={search.backdrop_path !=null ?
                            `https://image.tmdb.org/t/p/w500${search.backdrop_path}`:
                            "https://cdn.quotesgram.com/img/77/83/1465359129-black-and-white-empty-empty-heart-heart-Favim_com-501667.jpg"}/>
                            <CardBody>
                            <div className="title">{search.title}</div>
                            <div className="rating">
                                <img src={img1}/>
                                <div>{search.vote_average}</div>
                            </div>
                            <div>Voting Count: {search.vote_count}</div>
                            <div>Release Date: {search.release_date}</div>
                            </CardBody>
                        </Card>
                    )
                })
            }   
        </div>
    );
};

export default Example;
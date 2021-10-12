import React,{useState} from 'react'
import img3 from '../../images/logo.png'
import './header.css'

export default function Header({datas,setSearchResult,search,setSearch}) {
    const searchHandler = (e) =>{
        setSearch(e.target.value);
        if(search !== ''){
            const results = datas.filter((data)=>{
                return data.title.toLowerCase().includes(search.toLowerCase());
            })
            setSearchResult(results);
        }        
    }
    
    return (
        <div className="header">
            <img src={img3} className="logo_img" />
            <div>
                <input type="text" placeholder="Search" className="search" value={search} 
                onChange={searchHandler}/>
            </div>            
        </div>
    )
}

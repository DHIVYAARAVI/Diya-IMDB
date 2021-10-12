import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer';


function App() {  
  const [datas, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  const [openloader,setopen]=useState(false)
  
  useEffect(()=>{
    window.addEventListener('scroll',(event)=>{
      if(window.innerHeight + window.scrollY >= document.body.offsetHeight){       
        setopen(true)
        setTimeout(() => {
          setPage(p=>p+1)
          setopen(false)
        }, 1000);
        console.log(page);
      }
    })
  },[])
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=55903b004b65252bf433fb4218601d2c&language=en-US&sort_by=popularity.desc&page=${page}&vote_average.gte=8.4`)
    .then(res =>{
        res.json().then(response=>{
            console.log(response.results)
            setData([...datas,...response.results]);
        })
    })
    .catch(err =>{
        console.log(err);
    })
  }, [page])  

  return (
    <div id="App" className="App">
      <Header 
        datas={datas} 
        search={search} 
        setSearch={setSearch} 
        searchResult={searchResult} 
        setSearchResult={setSearchResult}
      />
      <Cards searchs={search==="" ? datas: searchResult}/>
      <div className="load">
        <div style={openloader?{display:"block"}:{display:"none"}} className="loader"></div>
        <div style={openloader?{display:"block"}:{display:"none"}} className="loading">Loading....</div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;

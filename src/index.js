import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom'
import MobileCollapse from './component/mobilecollapse'
import Wrap from './ui/wrap/index'
import Sidebar from './ui/sidebar/index'
import Content from './ui/content'
import AnimeDetail from './ui/AnimeDetail'
import NotFound from './component/NotFound';
import AnimeStream from './ui/AnimeStream';
import Settings from './ui/Settings'
import AnimeMovie from './ui/AnimeMovie'

import './index.css';

function Search(){
  let {s} = useParams()
  return (
    <>
      <Content search = {s} />
    </>
  )
}

function Detail(){
  let {animeid} = useParams()
  return(
    <>
      <AnimeDetail animeid={animeid}/>
    </>
  )
}

function Stream(){
  let {animeid, epsid} = useParams()
  return (
    <>
      <AnimeStream epsid={epsid} animeid={animeid} />
    </>
  )
}

function Movie(){
  let {movieid} = useParams()
  return(
    <>
      <AnimeMovie epsid={movieid} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <MobileCollapse />
        <Wrap>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Content search = ""/>} />
            <Route path="/search/" element={<Content search = ""/>} />
            <Route path="/search/:s" element={<Search />} />
            <Route path="/anime/" element={<Detail/>} />
            <Route path="/anime/:animeid" element={<Detail />} />
            <Route path="/stream/:animeid/:epsid" element={<Stream/>} />
            <Route path="/settings/" element={<Settings />} />
            <Route path="/movie/:movieid" element={<Movie />} />

            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Wrap>
    </Router>
  </React.StrictMode>
);

import React, { useEffect, useState } from 'react'
import Score from './Score';



// livescoreapikey : 47ebd85ab310e584a034268128bd60da1f8a18362f61cc6c56903e7b2dc3bef9
const TourUrl='https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=-7'

const Scores = () => {

    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a1576e1d2mshff79dcb3cbb9727p1db395jsnda614f582d9b',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};





// Ccd
// : 
// "korea-republic"
// Ccdiso
// : 
// "KOR"
// Chi
// : 
// 0
// Cid
// : 
// "111"
// Cnm
// : 
// "Republic of Korea"
// Csnm
// : 
// "Republic of Korea"
// Events
// : 
// Array(1)
// 0
// : 
// ComX
// : 
// 0
// EO
// : 
// 1851663
// Eact
// : 
// 1
// Ecov
// : 
// 0
// Eds
// : 
// 20221008213016
// Ehid
// : 
// 0
// Eid
// : 
// "627983"
// Epr
// : 
// 1
// Eps
// : 
// "88'"
// Ern
// : 
// 43
// ErnInf
// : 
// "43"
// Esd
// : 
// 20221008213000
// Esid
// : 
// 3
// Et
// : 
// 1
// IncsX
// : 
// 1
// LuC
// : 
// 0
// LuX
// : 
// 0
// Pid
// : 
// 8
// Pids
// : 
// {1: '3817367', 6: '31803431', 8: '627983', 12: 'SBTE_27617387', 32: '2675817'}
// SDFowX
// : 
// 0
// SDInnX
// : 
// 0
// Sids
// : 
// {1: '877725', 6: '63331', 8: '9298', 12: 'SBTC3_36043', 32: '17622'}
// Spid
// : 
// 1
// StatX
// : 
// 1
// Stg
// : 
// {Sid: '9298', Snm: 'K-League 2', Sds: 'K-League 2', Scd: 'k-league-2', Cid: '111', …}
// SubsX
// : 
// 0
// T1
// : 
// [{…}]
// T2
// : 
// [{…}]
// Tr1
// : 
// "4"
// Tr1OR
// : 
// "4"
// Tr2
// : 
// "0"
// Tr2OR
// : 
// "0"
// Trh1
// : 
// "1"
// Trh2
// : 
// "0"
// [[Prototype]]
// : 
// Object
// length
// : 
// 1
// [[Prototype]]
// : 
// Array(0)
// Scd
// : 
// "k-league-2"
// Scu
// : 
// 0
// Sdn
// : 
// "K-League 2"
// Sds
// : 
// "K-League 2"
// Shi
// : 
// 0
// Sid
// : 
// "9298"
// Snm
// : 
// "K-League 2"






// fetch('https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=-7', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


    const [tour, setTour]=useState([])
    const [event, setEvent]=useState([])
    const getTour=async()=>{
        const response=await fetch(TourUrl,options)
        const tour= await response.json()
        setTour(tour.Stages)
        console.log(tour.Stages)
    }
    useEffect(()=>{
        getTour()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <section className="container">
        {tour.map((games)=>{
          return(
            <div key={games.Sid}>
              {games.Ccd}
              <br />
              {games.Scd}
              <br />
              <Score eevent={games.Events}/>
            </div>

            
              
            
            
          )
        })}
    </section>
  )
}

export default Scores
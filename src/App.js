import React,{useState} from 'react';
import './App.css';
import TweetArea from './Components/TweetArea';
import Tweetshow from './Components/Tweetshow';

function App() 
{
	  const [tweet,setTweets]=useState([]);
 function addtweet(newvalue)
  {
    setTweets(prevState => [...prevState,newvalue]);
    console.log(tweet);
    setTimeout(()=>{
             setTweets([]);
             },60000);

  }
  return (
    <div className="App" >
    <div className="myHeader">
     <center><h1>Task by Board Infinity by 1705041</h1></center>
      <center><h2>Tweet your Views </h2></center>
      <center><h3>(Tweets disappears after 1 minutes)</h3></center>
          </div>
           <Tweetshow tweets={tweet} />
           <TweetArea onChange={addtweet}/>
           <h1><p className="myHeader" align="center">Submitted by :
                           Konderu Hrishikesh
                           1705041 </p></h1>
    </div>
  );
}

export default App;

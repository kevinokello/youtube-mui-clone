
import { Button } from '@mui/material';
import './App.css';
import React from 'react';
function App() {
React.useEffect(() => {
fetch(
  "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAgQ_eJptXla5Qwha7V54tEmLi657mBvlI"
).then((res) => res.json()).then((data) => console.log(data));
}, []);

  return (
    <div className="App">
   <Button variant="contained">Test</Button>
    </div>
  );
}

export default App;

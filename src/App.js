import './App.css';
import img from "./images/1.jfif"
import img1 from "./images/2.jfif"
import img2 from "./images/3.jfif"
import img3 from "./images/4.jfif"
import img4 from "./images/5.jfif"
import img5 from "./images/download.jfif"


function App() {
  return (
    <div className="App">
     <h1> &#127958;&#65039; VELANKANNI BEACH</h1>
<table>
<tr>
<th>&#128205; ADDRESS</th>
<td>Mira Bhayandar, Maharashtra, 401106</td>
</tr>
<tr>
<th>&#127757; LOCATION</th>
<td><a href="https://maps.app.goo.gl/TGLKz5yNd2ubzoHFA">Velankanni Beach Google Maps</a></td>
</tr>
<tr>
<th>&#128347; HOURS</th>
<td>09:00-18:00</td>
</tr>
<tr>
<th>&#128288; CATEGORY</th>
<td>Beaches</td>
</tr>
<tr>
<th>&#127775; RATINGS</th>
<td>4.1 ⭐⭐⭐⭐☆</td>
</tr>
</table>
<img className="mainp" height="275px" width="550px" src={img5}/>
<br/>
<br/>
<p>A beautiful scenic beach away from the cityside with a lot of peace and beauty. A serene place located at far away land.
The crowd here is not too much but it is the natures beauty to be explored.There are many cafe’s and restaurants around.
The approach road gives a pure feelingnof a coastal city in mumbai. One gets the feel of coming to Goa or Kerala  by going
to this beach.A peace lover would love this place.Though it can be kept much cleaner than what it is now.Beautiful church situated on beach.
Great statues. Peaceful environment. Must visit place. You get dry fish Bombay duck and sukat etc.her at very cheap rates.
Extremely beautiful place to visit with your friends or family and holds a serene beauty in itself.
Less crowded usually which makes it cleaner than most of the beaches in Mumbai.</p>
<p className="p1">Sunset view is awesome.</p>
<img src={img} alt="" /> 
<img src={img1} width="302px" height="195px"/>
<img src={img2} height="195px"/>
<img src={img3} height="195px"/>
<img src={img4} width="280px" height="195px"/>
    </div>
  );
}

export default App;

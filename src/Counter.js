import React, { Component } from 'react'
import  './counter.css'

export  class Counter extends Component {

constructor(){
    console.log('this is a constructor')
    super();
    this.state={
        counter:0,
        time:0,
        intervall:null
        
    }
}

//life cycle 
componentDidMount(){
    console.log('this is for the first render');
    this.setState({
       intervall:setInterval(
        ()=> this.setState({time : this.state.time +1}),1000)
    })
    
}


componentDidUpdate(){
    console.log('u did an update ');
    console.log(this.state.counter)

}

componentWillUnmount(){
    console.log('you kill me');
    clearInterval(this.state.intervall)
}

//function add +1 
incr=()=>{
    this.setState({
      counter : this.state.counter +1 
    })
}
//function dec
dec =()=>{
if(this.state.counter >0){ 
    this.setState({
        counter :  this.state.counter -1 
    })}
}

res=()=>{
    this.setState({
        counter : 0
    })
}



  render() {
    console.log('this the render part ')
    return (
      <div>Counter
        <button  onClick={()=>this.incr()}   >+</button>
        <button  onClick={()=>this.dec()} >--</button>
<h1>{ this.state.counter  }</h1>
<button  onClick={()=>this.res()} >reset</button>
<hr/>
<p>timer</p>
<h1>{this.state.time}</h1>

<hr/>
<div className="container">
    
<div className="card-wrapper">
  
  <div className="card">
    
    <div className="card-image">
      <img src="https://image.ibb.co/dUTfmJ/profile_img.jpg" alt="profile one"/>
    </div>

  <ul className="social-icons">
    <li>
      <a href="ss">
        <i className="fab fa-facebook-f"></i>
      </a>
    </li>
    <li>
      <a href="OOX">
        <i className="fab fa-instagram"></i>
      </a>
    </li>
    <li>
      <a href="OO">
        <i className="fab fa-twitter"></i>
      </a>
    </li>
    <li>
      <a href="o">
        <i className="fab fa-dribbble"></i>
      </a>
    </li>
  </ul>

  <div className="details">
    <h2>John Smith
      <br></br>
      <span class="job-title">UI Developer</span>
    </h2>
  </div>
</div>
</div>


<div className="card-wrapper">
  
  <div className="card profile-two">
    
    <div className="card-image profile-img--two">
      <img src="https://image.ibb.co/c9rY6J/profile02.jpg" alt="profile two"/>
    </div>

    <ul className="social-icons">
      <li>
        <a href="qq">
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a href="AA">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="dd">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="CC">
          <i className="fab fa-dribbble"></i>
        </a>
      </li>
    </ul>

    <div className="details jane">
        <h2>Jane Doe
          <br></br>
          <span className="job-title">UI Designer</span>
        </h2>
    </div>
</div>
</div>
 
</div>
      </div>
    )
  }
}
export default Counter; 
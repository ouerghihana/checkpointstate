import React, { Component } from 'react';
import Counter from './Counter';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class App extends Component {
  constructor(){
    super();
    this.state={
      person: {
      
        fullName: 'Hana Ouerghi',
        bio: 'Im a good developper , i make horrible site',
        imgSrc : 'https://media.licdn.com/dms/image/C4D12AQGJGsv345Q5ig/article-cover_image-shrink_720_1280/0/1615908783422?e=2147483647&v=beta&t=wv6lnKYpyJUYoeILVYU_z2E8mPUHwHZT4tdGCnbret4' ,
        profession: 'Web Developer',
      },

      show:true 
    }

  }
toggel=()=>{
  this.setState({show:!this.state.show})
}

  render() {
    const { person} = this.state; 
    return (
      <div>
       
          <Card className="bg-dark text-white">
            <Card.Img  className='photo1'  src={person.imgSrc} alt="photo1"  />
            <Card.ImgOverlay>
              <Card.Title> <h1>welcome to my profile </h1></Card.Title>
              <Card.Text>
               
        <h2>My name is {person.fullName}</h2>
        <h3>Bio:{person.bio}</h3>
       
        <h3>My profession is:{person.profession}</h3>
       
              </Card.Text>
              <Button variant="primary">follow</Button>
            </Card.ImgOverlay>
          </Card>

          <hr/>

<button   onClick={()=>this.toggel()} >show/hide</button>
    {this.state.show   &&     <Counter/>}
      
     </div>
    )
  }
}
       
      
    


export default App
  
 

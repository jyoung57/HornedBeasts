import { Component } from 'react';
import HornedBeast from './HornedBeast';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Another Beast',
      imageUrl: 'imageUrl',
      description: 'description',
    }
  }
    render() {
    let array = [1, 2]
    let [test, subject] = array
    let {name, imageUrl, description} = this.state
    let url1 =
      'https://images.unsplash.com/photo-1621409771865-6e6ed95ef57d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';
    let url2 = 'https://images.unsplash.com/photo-1628073389053-688f8ae4f978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=989&q=80';
    
      return (
        <>
          <div>Gallery</div>
          <HornedBeast description='beach setting' title='Beach' image={url1} />
          <HornedBeast description='bird on the beach' title='Bird' image={url2} />
        </>
      );
    }
}

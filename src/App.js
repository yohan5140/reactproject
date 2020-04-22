import React, { Component }from 'react';
import MyCommponent from './MyCommponent';
import Customer from './components/Customer';
const customer = {
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '박요한',
  'birthday': '860510',
  'gender': '남자',
  'job': '사무직'
}
class App extends Component {
  render(){
    return (
      <Customer 
        id = {customer.id}
        image = {customer.image}
        name = {customer.name}
        birthday = {customer.birthday}
        gender = {customer.gender}
        job = {customer.job}
      />
    );
  }
}

export default App;

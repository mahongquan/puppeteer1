import React from 'react';
class A4Lian extends React.Component{
  onClick=()=>{
    print("onClick");
  }
  render(){
	return (
<div>

      <button  onClick={this.onClick}>打印</button>
     
</div>);
    }
}
export default A4Lian;
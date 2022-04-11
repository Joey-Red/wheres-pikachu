import React from 'react';
function CapturedMons(props) {
  let { capturedMons } = props;
  let outputArray = [];
  let nameArray = [];
  if (props.capturedMons.length === 0){
    return (
      <div className='empty'>Nothing yet...</div>
    )
  }
  if (capturedMons.includes('Pikachu')){
    outputArray.push(props.Pikachu);
    nameArray.push('Pikachu');
  }
  if (capturedMons.includes('Celebi')){
    outputArray.push(props.Celebi);
    nameArray.push('Celebi');
  }
  if (capturedMons.includes('Blissey')){
    outputArray.push(props.Blissey);
    nameArray.push('Blissey');
  }
  if (capturedMons.includes('Ditto')){
    outputArray.push(props.Ditto);
    nameArray.push('Ditto');
  }
  if (capturedMons.includes('Metapod')){
    outputArray.push(props.Metapod);
    nameArray.push('Metapod');
  }
  if (capturedMons.includes('Charmeleon')){
    outputArray.push(props.Charmeleon);
    nameArray.push('Charmeleon');
  }if (capturedMons.includes('Sableye')){
    outputArray.push(props.Sableye);
    nameArray.push('Sableye');
  }if (capturedMons.includes('Ledyba')){
    outputArray.push(props.Ledyba);
    nameArray.push('Ledyba');
  }if (capturedMons.includes('Jumpluff')){
    outputArray.push(props.Jumpluff);
    nameArray.push('Jumpluff');
  }
  
  const listItems = outputArray.map((mon, index) =>
  <div className='capChild' key={index}>{nameArray[index]}<img src={`${mon}`} alt='' /></div>);
  return (
    <div className='capContainerContainer'>
      <div className='capContainer'>{listItems}</div>
    </div>
  )
}
export default CapturedMons;
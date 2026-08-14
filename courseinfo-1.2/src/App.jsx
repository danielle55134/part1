const Header = (namecours)=>{
  return(
    <div><h1>{namecours.name}</h1></div>
  )
}
const Part = (part)=>{
  return(
    <p>{part.name} {part.nbre}</p>
  )
}
const Content= (props)=>{
  return(
<div>
<p> <Part name={props.part}  nbre={props.nb} /></p>

</div>
  )
}
const Total = (tot)=>{
  return(
  <p>le nombre total d'exercices est: {tot.nbre}</p>
  )
}
const App= ()=>{
    const nb1=10
  const nb2=7
  const nb3 =14
  const part1='part1'
  const part2= 'part2'
  const part3= 'part3'
  return(
    <div>
    <Header name='Half stack application development' />
    <Content part= {part1} nb= {10} />
    <Content part= {part2} nb= {7} />
    <Content part= {part3} nb= {14} />
    <Total nbre={nb1+nb2+nb3} />
     </div>
     
  )
}
export default App;
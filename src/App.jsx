const Header = (namecours)=>{
  return(
    <div><h1>{namecours.name}</h1></div>
  )
}
const Content= (part)=>{
  return(
<div><p>Nom de la partie: {part.name}, nombre d'exercice: {part.nbre}</p></div>
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
  return(
    <div>
    <Header name='Half stack application development' />
    <Content name= 'part1' nbre= {10} />
    <Content name= 'part2' nbre= {7} />
    <Content name= 'part3' nbre= {14} />
    <Total nbre={nb1+nb2+nb3} />
     </div>
     
  )
}
export default App;
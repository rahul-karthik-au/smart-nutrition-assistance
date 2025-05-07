type goalsInfo={
    goals:string
}
type goalsInfoPage={
    data:goalsInfo,
    update:(newData: Partial<goalsInfo>)=> void
}
const goalsPage=({data,update}:goalsInfoPage)=>{
    return(<>
    <div>Goals Info Page</div>
    <label>Goals</label>
    <input type="text" value={data.goals} onChange={(e)=>update({goals:e.target.value})}></input>
    </>)
}
export default goalsPage
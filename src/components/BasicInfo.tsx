type BasicInfo={
    firstname:string
}
type basicInfoPage = {
    data:BasicInfo,
    update:(newdata:Partial<BasicInfo>)=>void} 

const basicInfoPage=({data,update}:basicInfoPage)=>{
    return(<>
    <div>
        <div>Basic Info Page</div>
        <label>FirstName</label>
        <input type="text" value={data.firstname} onChange={(e)=>update({firstname:e.target.value})}></input>
    </div>
    </>)
}
export default basicInfoPage
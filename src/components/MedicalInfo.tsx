type medicalInfo = {
    allergies:string
}
type medicalInfoPage = {
 data:medicalInfo,
 update:(newdata:Partial<medicalInfo>)=>void
}

const medicalInfoPage=({data,update}:medicalInfoPage)=>{
    return(<>
            <div>Medical Info Page</div>
            <label>Allergies</label>
            <input type="text" value={data.allergies} onChange={(e)=>{update({allergies:e.target.value})}}></input>
        </>)
}
export default medicalInfoPage;
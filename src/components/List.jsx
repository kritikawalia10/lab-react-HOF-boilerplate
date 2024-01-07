import React from 'react';

class HOF extends React.Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }
    render(){
        const filterData = this.state.userData.filter((item)=>{
            if(item.user_type == "Designer"){
                return item;
            }
        })
        const filterData2 = this.state.userData.filter((item)=>{
            if(item.name.charAt(0) == "J"){
                return item;
            }
        })
        const filterData3 = this.state.userData.filter((item)=>{
            if(item.age > 28 && item.age <= 50){
                return item;
            }
        })
        const filterData4 = this.state.userData.filter((item)=>{
            if(item.user_type == "Designer"){
                return item;
            }
        })
        const Age = filterData4.reduce((reducedValue, initialValue)=>{
            if(reducedValue.age !== undefined){
                return reducedValue.age+initialValue.age
            }else{
                return reducedValue+initialValue.age
            }
        })
        return (
        <>
        <div style={{fontFamily:"sans", textAlign:"center",width:"75vw"}}>
            <h1 style={{marginLeft:"40%"}}>Display all items</h1>
            <div style={{border:"3px solid black", width:"40vw", marginLeft:"40%",paddingRight:"14px",paddingLeft:"12px",paddingTop:"6px",paddingBottom:"6px"}}>
                {this.state.userData.map((item)=>{
                    return(
                    <div className="container" key={item.id} style={{display:"flex", justifyContent:"space-between", color:"blue"}}>
                        <div>Id: {item.id}</div>
                        <div>Name: {item.name}</div>
                        <div>UserType: {item.user_type}</div>
                    </div>
                    )
                })}
            </div>
        </div>
        <div style={{fontFamily:"sans", textAlign:"center",width:"75vw"}}>
            <h1 style={{marginLeft:"40%"}}>Display based on user type</h1>
            <div style={{border:"3px solid black", width:"40vw", marginLeft:"40%",paddingRight:"14px",paddingLeft:"12px",paddingTop:"6px",paddingBottom:"6px"}}>
                {filterData.map((item)=>{
                    return(
                    <div className="container" key={item.id} style={{display:"flex", justifyContent:"space-between", color:"blue"}}>
                        <div>Id: {item.id}</div>
                        <div>Name: {item.name}</div>
                        <div>UserType: {item.user_type}</div>
                    </div>
                    )
                })}
            </div>
        </div>
        <div style={{fontFamily:"sans", textAlign:"center",width:"75vw"}}>
            <h1 style={{marginLeft:"40%"}}>Filter all data starting with J</h1>
            <div style={{border:"3px solid black", width:"40vw", marginLeft:"40%",paddingRight:"14px",paddingLeft:"12px",paddingTop:"6px",paddingBottom:"6px"}}>
                {filterData2.map((item)=>{
                    return(
                    <div className="container" key={item.id} style={{display:"flex", justifyContent:"space-between", color:"blue"}}>
                        <div>Id: {item.id}</div>
                        <div>Name: {item.name}</div>
                        <div>UserType: {item.user_type}</div>
                    </div>
                    )
                })}
            </div>
        </div>
        <div style={{fontFamily:"sans", textAlign:"center",width:"75vw"}}>
            <h1 style={{marginLeft:"40%"}}>Filter all data based on age greater than 28 and less or equals to 50</h1>
            <div style={{border:"3px solid black", width:"40vw", marginLeft:"40%",paddingRight:"14px",paddingLeft:"12px",paddingTop:"6px",paddingBottom:"6px"}}>
                {filterData3.map((item)=>{
                    return(
                    <div className="container" key={item.id} style={{display:"flex", justifyContent:"space-between", color:"blue"}}>
                        <div>Id: {item.id}</div>
                        <div>Name: {item.name}</div>
                        <div>UserType: {item.user_type}</div>
                    </div>
                    )
                })}
            </div>
        </div>
        <div style={{fontFamily:"sans", textAlign:"center",width:"75vw"}}>
            <h1 style={{marginLeft:"40%"}}>Total years of designer</h1>
            <div style={{border:"3px solid black", width:"40vw", marginLeft:"40%",paddingRight:"14px",paddingLeft:"12px",paddingTop:"6px",paddingBottom:"6px"}}>
                <div className="container" style={{display:"flex", justifyContent:"space-between", color:"blue"}}>
                    <div>{Age}</div>
                </div>
            </div>
        </div>
        </>
        )
    }
}

export default HOF;
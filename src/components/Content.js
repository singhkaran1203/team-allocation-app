import { useState,useContext } from "react";
import male from "../images/male.jpg";
import female from "../images/female.png";
import Header from "./Header";
import EmployeeContext from "./Employees-context";



function Content() {
  const empCxt=useContext(EmployeeContext);

  const [selectedteam,setteam]=useState("TeamA");


  function handleteamselection(event){
    setteam(event.target.value);
  }

  function handlecardclick(event){
    const transformedemployees=empCxt.employeelist.map((employee)=>{
      if(employee.id===parseInt(event.currentTarget.id)){
        if(employee.teamName===selectedteam){
          return {...employee,teamName:""}
        }
        else{
          return {...employee,teamName:selectedteam}
        }
      }
      else{
        return employee;
      }
    })
    empCxt.setemployeeslist(transformedemployees);
  }

  return (
    <div className="container text-center">
      <Header selectedteam={selectedteam} employees={empCxt.employeelist}></Header>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
            <select className="form-select form-select-lg" value={selectedteam} onChange={handleteamselection}>
                <option value="TeamA">Team A</option>
                <option value="TeamB">Team B</option>
                <option value="TeamC">Team C</option>
                <option value="TeamD">Team D</option>
            </select>
        </div>
      </div>
      <div className="row mt-3 mb-3">
        {empCxt.employeelist.map((employee) => {
          return (
            <div key={employee.id} className="col-md-4 col-sm-6">
              <div  id={employee.id} className={(employee.teamName===selectedteam)?"mycard card m-2 border border-5 border-dark":"mycard card m-2"} onClick={handlecardclick}>
                <img
                  src={employee.gender === "male" ? male : female}
                  alt="emp"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Full name : {employee.fullName}
                  </h5>
                  <p className="card-text">
                    Designation : {employee.designation}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Content;

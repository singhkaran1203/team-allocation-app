import { useContext } from "react";
import EmployeeContext from "./Employees-context";

function Groupedemployee() {
  const empCxt = useContext(EmployeeContext);
  return (
    <div>
      <h1 className="text-center mt-3 mb-3">Team Member Allocation</h1>
      <div className="accordion container" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <strong>Team A</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {
                empCxt.employeelist.map((employee)=>{
                    if(employee.teamName==="TeamA"){
                        return(
                            <div>
                                <p className="mb-0">Full Name : {employee.fullName}</p>
                                <p>Designation : {employee.designation}</p>
                                <hr />
                            </div>
                        );
                    }
                    return "";
                })
              }
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong>Team B</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            {
                empCxt.employeelist.map((employee)=>{
                    if(employee.teamName==="TeamB"){
                        return(
                            <div>
                                <p className="mb-0">Full Name : {employee.fullName}</p>
                                <p>Designation : {employee.designation}</p>
                                <hr />
                            </div>
                        );
                    }
                    return "";
                })
              }
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Team C</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            {
                empCxt.employeelist.map((employee)=>{
                    if(employee.teamName==="TeamC"){
                        return(
                            <div>
                                <p className="mb-0">Full Name : {employee.fullName}</p>
                                <p>Designation : {employee.designation}</p>
                                <hr />
                            </div>
                        );
                    }
                    return "";
                })
              }
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <strong>Team D</strong>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            {
                empCxt.employeelist.map((employee)=>{
                    if(employee.teamName==="TeamD"){
                        return(
                            <div>
                                <p className="mb-0">Full Name : {employee.fullName}</p>
                                <p>Designation : {employee.designation}</p>
                                <hr />
                            </div>
                        );
                    }
                    return "";
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groupedemployee;

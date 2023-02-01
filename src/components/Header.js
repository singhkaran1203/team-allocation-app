function Header(props){
    const membercount=(props.employees).filter((employee)=>{
        return employee.teamName===props.selectedteam}).length;
    return(
        <div className="text-center">
            <h1 >Team Member Allocation </h1>
            <h3>{props.selectedteam} has {membercount} members</h3>
        </div>
    );
}

export default Header;
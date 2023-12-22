import logo from "./images/react.png"

function Header() {
  return (
    <div className="pt-2 pl-2" style={{borderBottom:"1px solid #777"}}>
      <img className="h-5" src={logo} alt="" style={{height:"35px", verticalAlign:"top"}}/>
      <span className="h2 pt-4 m-2 text-white-50">CountOpedia</span>
    </div>
  );
}

export default Header

import React, { Component } from "react";

class ChildComponents extends Component {
  state = {
    firstName: "",
    lastName: "",
  };
  render() {
    console.log(">>check pros", this.props);
    // let name = this.props.name;
    // let age = this.props.age;
    let { name, age, address, arrJobs } = this.props;
    return (
      <>
        <div className="list-Jobs">
          {
            //     <h1>
            //     Child Component: {name} - {age} - {address}
            //   </h1>
            arrJobs.map((item, index) => {
              return (
                <div key={item.id}>
                  {item.title} - {item.salary}
                </div>
              );
            })
          }
        </div>
      </>
    );
  }
}
export default ChildComponents;

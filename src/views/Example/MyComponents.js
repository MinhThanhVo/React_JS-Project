import React from "react";
import ChildComponents from "./ChildComponents";
class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "abc", title: "Developer", salary: "400$" },
      { id: "def", title: "Tester", salary: "300$" },
      { id: "ghi", title: "Manager", salary: "600$" },
    ],
  };
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleOnclickSubmit = (event) => {
    event.preventDefault(event);
    console.log("Check data: ", this.state);
  };

  render() {
    console.log("This state: ", this.state);
    return (
      <>
        <form>
          <label>
            First Name:
            <input
              type="text"
              defaultValue={this.state.firstName}
              onChange={(event) => this.handleChangeFirstName(event)}
            />
          </label>
          <br></br>

          <label>
            Last Name:
            <input
              type="text"
              defaultValue={this.state.lastName}
              onChange={(event) => this.handleChangLastName(event)}
            />
          </label>
          <br></br>
          <input
            type="submit"
            onClick={(event) => this.handleOnclickSubmit(event)}
          />
        </form>
        <ChildComponents
          name={this.state.firstName}
          age={"25"}
          address={"Quang Ngai"}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyComponent;

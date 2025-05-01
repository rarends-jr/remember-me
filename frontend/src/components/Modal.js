import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="todo-title">Title</Label>
              <Input
                type="text"
                id="todo-title"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter Todo Title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-description">Description</Label>
              <Input
                type="text"
                id="todo-description"
                name="description"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Enter Todo description"
              />
            </FormGroup>
            <FormGroup>
                <Label for="todo-cadence_type">Repeat</Label><br/>
                <select
                  id="todo-cadence_type"
                  name="cadence_type"
                  onChange={this.handleChange}
                >
                    <option value="never" {...this.state.activeItem.cadence_type === 'never'? "selected" : ""}>Never</option>
                    <option value="daily" {...this.state.activeItem.cadence_type === 'daily'? "selected" : ""}>Daily</option>
                    <option value="weekly" {...this.state.activeItem.cadence_type === 'weekly'? "selected" : ""}>Weekly</option>
                    <option value="monthly" {...this.state.activeItem.cadence_type === 'monthly'? "selected" : ""}>Monthly</option>
                    <option value="yearly" {...this.state.activeItem.cadence_type === 'yearly'? "selected" : ""}>Yearly</option>
                </select>
            </FormGroup>
            <FormGroup>
              <Label for="todo-cadence_amount">Repeat Every</Label>
              <Input
                type="number"
                id="todo-cadence_amount"
                name="cadence_amount"
                value={this.state.activeItem.cadence_amount}
                onChange={this.handleChange}
                placeholder="Enter Todo repeat every"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-last_completion_datetime">Last Completed</Label>
              <Input
                type="datetime"
                id="todo-last_completion_datetime"
                name="last_completion_datetime"
                value={this.state.activeItem.last_completion_datetime}
                onChange={this.handleChange}
                placeholder="Enter Todo last completion"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="completed"
                  checked={this.state.activeItem.completed}
                  onChange={this.handleChange}
                />
                Completed
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

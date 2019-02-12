import * as React from "react";

interface Props {
  onSubmit: (text: string) => void;
}

interface State {
  value: string;
}

class Component extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    this.setState({
      value: event.target.value
    });
  }

  public handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = this.state.value.trim();
    if (text === "") {
      return;
    }
    this.props.onSubmit(text);
    this.setState({ value: "" });
  }

  public render() {
    return (
      <div>
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <input
            onChange={e => this.handleChange(e)}
            value={this.state.value}
          />
          <button type="submit">Add TODO</button>
        </form>
      </div>
    );
  }
}

export default Component;

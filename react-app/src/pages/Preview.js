import React, { Component } from "react";
//
import Metatags from "../components/Metatags";
import PageComponents from "../components/PreviewComponents";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      components: [],
    };
  }

  componentDidMount = () => {
    window.addEventListener("message", this.handlePreviewEntry);
  };
  componentWillUnmount = () => {
    window.removeEventListener("message", this.handlePreviewEntry);
  };

  handlePreviewEntry = event => {
    this.setState({
      title: event.data.entry.title,
      description: event.data.entry.description,
      components: event.data.entry.components,
    });
  };

  render() {
    const { title, description, components } = this.state;
    return (
      <article>
        <Metatags title={title} pageDescription={description} />
        <PageComponents components={components} />
      </article>
    );
  }
}

export default Preview;

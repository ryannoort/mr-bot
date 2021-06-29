import React from 'react';
import randomWord from "./randomWord"

class Frames extends React.Component {
  numColumns = 5;
  constructor(props) {
    super(props);
    this.numColumns = 5;
    this.numRows = 5;
   }

  render() {
    let content = [];
    for (let i = 0; i < this.numColumns; i++) {
      let row = [];
      for (let j = 0; j < this.numRows; j++) {
        var frameId = this.numColumns * i + j
        row.push(
          <iframe key={ frameId } title={ `frame-${ frameId }` } id={ `frame-${ frameId }` } className="w-1/5 h-full"></iframe>
        );
      }

      content.push(<div key={i} className="flex h-1/5">{ row }</div>);
    }

    return content
  }

  componentDidMount() {
    this.updateSource(0);
  }

  updateSource(frameId) {
    if(!window.Paused) {
      var element = document.getElementById(`frame-${frameId}`);
      var src = `https://www.bing.com/search?q=${randomWord()}+${randomWord()}+${randomWord()}`;
      element.setAttribute("src", src);
    }

    setTimeout(() => { this.updateSource(++frameId % (this.numColumns * this.numRows)) }, 250)
  }
}

export default Frames;

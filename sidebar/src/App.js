import React from "react";
import Ficons from "./Ficons";

import "./App.css"

class Foobar extends React.Component {

    constructor(props) {
        super(props);

        this.linkArray = [];
        this.colors = ["#001f3f", "#0074d9", "#7fdbff", "#39cccc", "#3d9970", "#2ecc40", "#01ff70", "#ffdc00", "#ff851b", "#ff4136", "#f012be", "#b10dc9", "#85144b", "#ffffff", "#dddddd", "#aaaaaa", "#111111"];

        this.state = {
            isVertical: true,
            persons: [],
        };
    }

    componentDidMount() { }

    componentWillUnmount() { }

    onToggleHandler(e) {
        e.preventDefault();
        console.log(this.state.isVertical);

        // let ul = window.document.querySelector("[monkee-fullpage]");
        if (this.state.isVertical) {
            // console.log('xxxx');
            // ul.classList.add("monkee-fullpage-list-horizontal");
            this.setState({
                isVertical: false,
            })
        } else {
            // console.log('yyyy');
            // ul.classList.remove("monkee-fullpage-list-horizontal");
            this.setState({
                isVertical: true,
            })
        }
    }

    render() {
        return (
            <div id="monk_markdown_container">
                <div id="workbench_parts_editor_container">
                    <div id="workbench_parts_activitybar">
                        <div className="activitybar-top">
                            <div className="sep">
                                <a className="activitybar-btn" href="#new-document" role="button" id="btn-new" title="New document">
                                    <Ficons icon='fa-file-text-o' />
                                </a>
                                <a className="activitybar-btn" href="#save-document" role="button" id="btn-save"
                                    title="Save current document">
                                    <Ficons icon='fa-floppy-o' />
                                </a>
                            </div>
                            <div className="sep">
                                <a className="activitybar-btn" href="#preview" role="button" id="btn-preview" title="Live preview">
                                    <Ficons icon='fa-eye' />
                                </a>
                                <a className="activitybar-btn" href="#distraction" role="button" id="btn-fullscreen"
                                    title="Distraction free">
                                    <Ficons icon='fa-arrows-alt' />
                                </a>
                                <a className="activitybar-btn" href="#headphone" role="button" id="btn-headphone"
                                    title="Buy me a new headphone">
                                    <Ficons icon='fa-headphones' />
                                </a>


                            </div>

                        </div>

                        <div className="activitybar-bottom">
                            <a className="activitybar-btn" href="https://github.com/MatthijsKamstra/javascript-mini-projects"
                                target="_blank" rel="noreferrer" role="button" id="btn-save" title="Github">
                                <Ficons icon='fa-github' />
                            </a>
                            <a className="activitybar-btn" href="https://twitter.com/matthijskamstra" target="_blank" rel="noreferrer" role="button"
                                id="btn-save" title="Twitter">
                                <Ficons icon='fa-twitter' />
                            </a>

                            <a onClick={(e) => this.onToggleHandler(e)} className="activitybar-btn" href="#d" rel="noreferrer" role="button" id="btn-toggle-dir" title="change direction">
                                <Ficons icon={(this.state.isVertical) ? 'fa-arrows-h' : 'fa-arrows-v'} />
                            </a>

                        </div>

                    </div>

                    <div id="workbench_parts_editor">
                        <ul id="slides" className="monkee-fullpage-list">
                            <li className="monkee-fullpage-slide" id="new-document">#new-document</li>
                            <li className="monkee-fullpage-slide" id="save-document">#save-document</li>
                            <li className="monkee-fullpage-slide" id="preview">#preview</li>
                            <li className="monkee-fullpage-slide" id="distraction">#distraction</li>
                            <li className="monkee-fullpage-slide" id="headphone">#headphone</li>
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}

export default Foobar;

import React from "react";

import "./App.css"

class Foobar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [],
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() { }

    onToggleHandler(e) {
        e.prefentdefault();
        let ul = window.document.querySelector("[monkee-fullpage]");
        if (this.isVertical) {
            this.innerHTML = "<i class=\"fa fa-arrows-v\" aria-hidden=\"true\"></i>";
            this.isVertical = false;
            ul.classList.add("monkee-fullpage-list-horizontal");
        } else {
            this.innerHTML = "<i class=\"fa fa-arrows-h\" aria-hidden=\"true\"></i>";
            this.isVertical = true;
            ul.classList.remove("monkee-fullpage-list-horizontal");
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
                                    <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                </a>
                                <a className="activitybar-btn" href="#save-document" role="button" id="btn-save"
                                    title="Save current document">
                                    <i className="fa fa-floppy-o" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="sep">
                                <a className="activitybar-btn" href="#preview" role="button" id="btn-preview" title="Live preview">
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </a>
                                <a className="activitybar-btn" href="#distraction" role="button" id="btn-fullscreen"
                                    title="Distraction free">
                                    <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                                </a>
                                <a className="activitybar-btn" href="#headphone" role="button" id="btn-headphone"
                                    title="Buy me a new headphone">
                                    <i className="fa fa-headphones" aria-hidden="true"></i>
                                </a>

                            </div>

                        </div>

                        <div className="activitybar-bottom">
                            <a className="activitybar-btn" href="https://github.com/MatthijsKamstra/javascript-mini-projects"
                                target="_blank" rel="noreferrer" role="button" id="btn-save" title="Github">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                            <a className="activitybar-btn" href="https://twitter.com/matthijskamstra" target="_blank" rel="noreferrer" role="button"
                                id="btn-save" title="Twitter">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>

                            <a onClick={(e) => this.onToggleHandler(e)} className="activitybar-btn" href="#d" rel="noreferrer" role="button" id="btn-toggle-dir" title="change direction">
                                <i className="fa fa-arrows-h" aria-hidden="true"></i>
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

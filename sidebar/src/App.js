import React, { useEffect, useState } from "react";
import Ficons from "./Ficons";

import "./App.css"

function App() {


    const [isVertical, setisVertical] = useState(true);


    const linkArray = [];
    const colors = ["#001f3f", "#0074d9", "#7fdbff", "#39cccc", "#3d9970", "#2ecc40", "#01ff70", "#ffdc00", "#ff851b", "#ff4136", "#f012be", "#b10dc9", "#85144b", "#ffffff", "#dddddd", "#aaaaaa", "#111111"];


    useEffect(() => {
        // change bg color slides (voor visual effect)
        let slides = document.getElementsByClassName('monkee-fullpage-slide');
        for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            slide.setAttribute("style", "background-color: " + colors[i]);
        }
        // get all links with `a href="#blah"` and use a toggle on them
        let links = window.document.getElementsByTagName("a");
        let first = false;
        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            if (link.getAttribute("href").charAt(0) === "#" && link.getAttribute("href").length > 1) {
                if (first === false) {
                    link.classList.add("active");
                }
                linkArray.push(link);
                link.onclick = onclickHandler;
                first = true;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function onclickHandler(e) {
        for (let i = 0; i < linkArray.length; i++) {
            const link = linkArray[i];
            link.classList.remove("active");
        }
        e.currentTarget.classList.add("active");
    }

    function onToggleHandler(e) {
        e.preventDefault();
        if (isVertical) {
            setisVertical(false);
        } else {
            setisVertical(true);
        }
    }

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
                        <a
                            className="activitybar-btn"
                            href="https://github.com/MatthijsKamstra/javascript-mini-projects"
                            target="_blank"
                            rel="noreferrer"
                            role="button"
                            id="btn-save"
                            title="Github">
                            <Ficons icon='fa-github' />
                        </a>
                        <a
                            className="activitybar-btn"
                            href="https://twitter.com/matthijskamstra"
                            target="_blank"
                            rel="noreferrer"
                            role="button"
                            id="btn-save"
                            title="Twitter">
                            <Ficons icon='fa-twitter' />
                        </a>

                        <a
                            onClick={onToggleHandler}
                            className="activitybar-btn"
                            href="#d"
                            rel="noreferrer"
                            role="button"
                            id="btn-toggle-dir"
                            title="change direction">
                            <Ficons icon={(isVertical) ? 'fa-arrows-h' : 'fa-arrows-v'} />
                        </a>

                    </div>

                </div>

                <div id="workbench_parts_editor">
                    <ul id="slides" className={(isVertical) ? "monkee-fullpage-list" : "monkee-fullpage-list monkee-fullpage-list-horizontal"}>
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


export default App;

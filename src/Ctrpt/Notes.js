import Vex from 'vexflow';

import React, {Component} from 'react';
import {Container} from '@material-ui/core';

const {
    Accidental,
    Formatter,
    Stave,
    StaveNote,
    Renderer,
    EasyScore,
} = Vex.Flow;

export default class Notes extends Component {
    componentDidMount() {
        const {notes} = this.props;

        const svgContainer = document.createElement('div');
        const renderer = new Renderer(svgContainer, Renderer.Backends.SVG);
        const ctx = renderer.getContext();
        const stave = new Stave(0, 0, 100);  // x, y, width
        stave.addClef("treble").setContext(ctx).draw();
        const bb = Formatter.FormatAndDraw(ctx, stave, notes);

        const svg = svgContainer.childNodes[0];
        const padding = 10;
        const half = padding / 2;
        svg.style.top = -bb.y + half + Math.max(0, (100 - bb.h) * 2/3) + "px";
        svg.style.height = Math.max(100, bb.h);
        svg.style.left = "0px";
        svg.style.width = 100 + "px";
        svg.style.position = "absolute";
        svg.style.overflow = "visible";
        svgContainer.style.height = Math.max(100, bb.h + padding) + "px";
        svgContainer.style.width = 100 + "px";
        svgContainer.style.position = "relative";
        svgContainer.style.display = "inlineBlock";

        this.refs.outer.appendChild(svgContainer);
    }

    render() {
        const bar = [new StaveNote({
            keys: ["c/0", "e/4", "g#/8"],
            duration: "w",
        })];

        return (
            <Container id={'exercise-container'}>
                <Notes notes={bar} />
            </Container>
        );
    }

}

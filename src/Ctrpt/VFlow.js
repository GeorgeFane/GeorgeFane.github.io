import Vex from 'vexflow';
const VF = Vex.Flow;

export default function VFlow() {

    // Create an SVG renderer and attach it to the DIV element named "boo".
    var vf = new VF.Factory({renderer: {elementId: 'boo'}});
    var score = vf.EasyScore();
    var system = vf.System();

    system.addStave({
    voices: [score.voice(score.notes('C#5/q, B4, A4, G#4'))]
    }).addClef('treble').addTimeSignature('4/4');

    vf.draw();

    return <div id='boo'></div>;
}
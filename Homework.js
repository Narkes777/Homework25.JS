class Marker {
    constructor(color, inkLevel) {
        this.color = color;
        this.inkLevel = inkLevel;
    }

    print(text) {
        let printedText = "";
        for (let i = 0; i < text.length; i++) {
            const character = text[i];
            if (character !== ' ' && this.inkLevel > 0.5) {
                printedText += character;
                this.inkLevel -= 0.5;
            } else {
                printedText += ' ';
            }
        }
        console.log('%c' + printedText, `color: ${this.color};`);
    }
}

class RefillableMarker extends Marker {
    refill(inkAmount) {
        this.inkLevel = Math.min(100, this.inkLevel + inkAmount);
    }
}

const marker1 = new Marker("blue", 50);
marker1.print("This is a blue marker.");
console.log(`Ink level: ${marker1.inkLevel}%`);

const marker2 = new RefillableMarker("red", 30);
marker2.print("This is a red marker.");
console.log(`Ink level: ${marker2.inkLevel}%`);

marker2.refill(50);
console.log(`Ink level after refill: ${marker2.inkLevel}%`);
marker2.print("Now I'm refilled!");
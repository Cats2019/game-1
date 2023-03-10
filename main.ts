input.onGesture(Gesture.Shake, function () {
    V1 = randint(1, 6)
    if (V1 < 3) {
        basic.showIcon(IconNames.Diamond)
    } else if (V1 < 4) {
        basic.showIcon(IconNames.Heart)
    } else if (V1 < 5) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Ghost)
    }
})
let V1 = 0
if (input.buttonIsPressed(Button.A)) {
	
} else {
	
}

class Slider {
  constructor(min, max, value,step, px, py) {
    this.max = max
    this.min = min
    this.value = value
    this.step = step
    this.px = px
    this.py = py
    this.slider = createSlider(this.max, this.min, this.value, this.step);
    this.slider.position(this.px, this.py);
    this.slider.size(200)
    this.value
  }
  display(){
    this.value = this.slider.value()
   
  }
}

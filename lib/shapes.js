class Shape {
    constructor() {
      this.color = '';
    }
  
    render() {
      throw new Error('render method must be implemented');
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius || 80; // default radius value of 50
      this.cx = "50%"; // default center x value of 50%
    }
  
    render() {
      return `<circle cx="${this.cx}" cy="50%" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  
  class Square extends Shape {
    constructor(size) {
      super();
      this.size = size;
      this.color = ""; // initialize color property
    }
  
    render() {
      return `<rect width="${this.size}" height="${this.size}" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    constructor(height) {
      super();
      this.height = height || 150;
      this.color = ""; // initialize color property
    }
  
    render() {
      const width = this.height / 2;
      return `<polygon points="0,${this.height} ${this.height},${this.height} ${width},0" fill="${this.color}" />`;
    }
  }
  
  
  
  module.exports = {
    Shape,
    Circle,
    Square,
    Triangle,
  };
  
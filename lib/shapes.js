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
      this.radius = radius;
    }
  
    render() {
      return `<circle r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(size) {
      super();
      this.size = size;
    }
  
    render() {
      return `<rect width="${this.size}" height="${this.size}" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    constructor(height) {
      super();
      this.height = height;
    }
  
    render() {
      return `<polygon points="0,${this.height} ${this.height},${this.height} ${this.height / 2},0" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Shape,
    Circle,
    Square,
    Triangle,
  };
  
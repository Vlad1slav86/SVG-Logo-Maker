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
      this.radius = radius || 100; 
      this.cx = "50%";
    }
  
    render() {
      return `<circle cx="${this.cx}" cy="50%" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  
  class Square extends Shape {
    constructor(size) {
      super();
      this.size = size || 200;
      this.color = "";
      this.xOffset = 50; 
    }
  
    render() {
      return `<rect x="${this.xOffset}" y="0" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
    }
  }
  
  
  class Triangle extends Shape {
    constructor(height) {
      super();
      this.height = height || 250;
      this.color = ""; // initialize color property
    }
  
    render() {
      const width = this.height / 2;
      return `<polygon points="${30},${this.height} ${this.height + 30},${this.height} ${this.height/2 + 30},0" fill="${this.color}" />`;

    }
  }
  
  
  
  module.exports = {
    Shape,
    Circle,
    Square,
    Triangle,
  };
  
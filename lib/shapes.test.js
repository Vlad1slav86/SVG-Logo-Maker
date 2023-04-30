const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
  test('renders a circle', () => {
    const circle = new Circle();
    const svg = circle.render();
    expect(svg).toContain('<circle');
  });
});

describe('Square', () => {
  test('renders a square', () => {
    const square = new Square();
    const svg = square.render();
    expect(svg).toContain('<rect');
  });
});

describe('Triangle', () => {
  test('renders a triangle', () => {
    const triangle = new Triangle();
    const svg = triangle.render();
    expect(svg).toContain('<polygon');
  });
});

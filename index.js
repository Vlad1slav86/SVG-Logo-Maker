const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (value) => {
        if (value.length > 3) {
          return 'Please enter up to three characters';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color:',
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color:',
    },
  ])
  .then((answers) => {
    let shape;
    switch (answers.shapeType) {
      case 'circle':
        shape = new Circle();
        break;
      case 'triangle':
        shape = new Triangle();
        break;
      case 'square':
        shape = new Square();
        break;
      default:
        console.log('Invalid shape type');
        return;
    }

    shape.color = answers.shapeColor;

    let x, y;
    if (shape instanceof Circle) {
      x = 150;
      y = 100;
    } else if (shape instanceof Square) {
      x = 150;
      y = 100;
    } else if (shape instanceof Triangle) {
      x = shape.height/2 + 30;
      y = shape.height/2;
    }

    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="100%" height="100%" fill="white" />
        ${shape.render()}
        <text x="${x}" y="${y}" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${answers.textColor}">
          ${answers.text.toUpperCase()}
        </text>
      </svg>
    `;

    fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  });

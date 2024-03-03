class RubiksCube {
    constructor(size) {
      this.size = size;
      this.faces = {
        front: this.createFace('g', size),
        back: this.createFace('b', size),
        left: this.createFace('o', size),
        right: this.createFace('r', size),
        top: this.createFace('w', size),
        bottom: this.createFace('y', size),
      };
    }
  
    createFace(color, size) {
      let face = [];
      for (let i = 0; i < size; i++) {
        var line = new Array();
        for (let j = 0; j < size; j++) {
          line.push(color+`${3*i + j}`)
        } 
        face.push(line);
      }
      return face;
    }

    R() {
      this.faces['right'] = this.faces['right'].map((row, rowIndex) =>
        row.map((_, colIndex) => this.faces['right'][size - colIndex - 1][rowIndex])
      );

      for (let i = 0; i < this.size; i++) {
        const temp = this.faces['top'][i][2];
        this.faces['top'][i][2] = this.faces['front'][i][2];
        this.faces['front'][i][2] = this.faces['bottom'][i][2];
        this.faces['bottom'][i][2] = this.faces['back'][this.size-i-1][0];
        this.faces['back'][this.size-i-1][0] = temp;
      }
    }

    Ri() {
      for (let i = 0; i < this.size; i++){
        this.R()
      }
    }

    L() {
      this.faces['left'] = this.faces['left'].map((row, rowIndex) =>
        row.map((_, colIndex) => this.faces['left'][size - colIndex - 1][rowIndex])
      );

      for (let i = 0; i < this.size; i++) {
        const temp = this.faces['top'][i][0];
        this.faces['top'][i][0] = this.faces['back'][this.size-i-1][2];
        this.faces['back'][this.size-i-1][2] = this.faces['bottom'][i][0];
        this.faces['bottom'][i][0] = this.faces['front'][i][0];
        this.faces['front'][i][0] = temp;
      }
    }

    Li() {
      for (let i = 0; i < this.size; i++){
        this.L()
      }
    }

    U() {
      this.faces['left'] = this.faces['left'].map((row, rowIndex) =>
        row.map((_, colIndex) => this.faces['left'][size - colIndex - 1][rowIndex])
      );

      for (let i = 0; i < this.size; i++) {
        const temp = this.faces['top'][i][0];
        this.faces['top'][i][0] = this.faces['back'][this.size-i-1][2];
        this.faces['back'][this.size-i-1][2] = this.faces['bottom'][i][0];
        this.faces['bottom'][i][0] = this.faces['front'][i][0];
        this.faces['front'][i][0] = temp;
      }
    }

    Ui() {
      for (let i = 0; i < this.size; i++){
        this.L()
      }
    }

    // rotateFaceClockWise(face) {
    //   this.faces[face] = this.faces[face].map((row, rowIndex) =>
    //     row.map((_, colIndex) => this.faces[face][size - colIndex - 1][rowIndex])
    //   );
  
    //   // // Update adjacent faces
    //   // const adjacentFaces = this.getAdjacentFaces(face);
    //   // adjacentFaces.forEach((adjFace) => this.rotateAdjacentFaceClockwise(adjFace));
    // }

    // rotateAdjacentFaceClockwise(face) {
    //   const tempRow = this.faces[face][0].slice();
    //   this.faces[face][0] = this.faces[face][2].slice().reverse();
    //   this.faces[face][2] = this.faces[face][8].slice();
    //   this.faces[face][8] = this.faces[face][6].slice().reverse();
    //   this.faces[face][6] = tempRow;
    //   this.faces[face][1] = this.faces[face][5].slice().reverse();
    //   this.faces[face][5] = this.faces[face][7].slice();
    //   this.faces[face][7] = this.faces[face][3].slice().reverse();
    //   this.faces[face][3] = tempRow.reverse();
    // }
  
    // getAdjacentFaces(face) {
    //   switch (face) {
    //     case 'front':
    //       return ['left', 'top', 'right', 'bottom'];
    //     case 'back':
    //       return ['right', 'top', 'left', 'bottom'];
    //     case 'left':
    //       return ['back', 'top', 'front', 'bottom'];
    //     case 'right':
    //       return ['front', 'top', 'back', 'bottom'];
    //     case 'top':
    //       return ['left', 'back', 'right', 'front'];
    //     case 'bottom':
    //       return ['left', 'front', 'right', 'back'];
    //     default:
    //       return [];
    //   }
    // }
  
    printCube() {
      console.log('Rubik\'s Cube:');
      Object.entries(this.faces).forEach(([face, colors]) => {
        console.log(`${face} face:`);
        colors.forEach((row) => console.log(row));
      });
    }
}
  
// Example usage:
const size = 3; // 3x3 Rubik's Cube
const rubiksCube = new RubiksCube(size);

// rubiksCube.printCube();

// Rotate the front face clockwise
rubiksCube.R();
rubiksCube.Ri();
rubiksCube.L();
rubiksCube.Li();

rubiksCube.printCube();  

export default RubiksCube;

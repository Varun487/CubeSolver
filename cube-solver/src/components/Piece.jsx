import { Box } from "@react-three/drei";

const colorSides = [
    [0, 1, 'green'],
    [0, -1, 'blue'],
    [1, 1, 'white'],
    [1, -1, 'yellow'],
    [2, 1, 'darkorange'],
    [2, -1, 'red']
]

const Piece = ({ position }) => {
    return (
        <>
          <Box position={position} args={[0.9, 0.9, 0.9]}>
            {[...Array(6).keys()].map((i) => (
                <meshStandardMaterial
                    key={i}
                    attach={`material-${i}`}
                    color={position[colorSides[i][0]] === colorSides[i][1] ? colorSides[i][2] : `black`}
                />
            ))}
         </Box>
       </>
    );  
}

export default Piece;

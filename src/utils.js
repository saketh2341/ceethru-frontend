import { Position, ArrowHeadType, Node, XYPosition } from 'react-flow-renderer';
// import { forEachTrailingCommentRange } from 'typescript';

// this helper function returns the intersection point
// of the line between the center of the intersectionNode and the target node
function getNodeIntersection(intersectionNode, targetNode) {
  // https://math.stackexchange.com/questions/1724792/an-algorithm-for-finding-the-intersection-point-between-a-center-of-vision-and-a
  const {
    width: intersectionNodeWidth,
    height: intersectionNodeHeight,
    position: intersectionNodePosition,
  } = intersectionNode.__rf;
  const targetPosition = targetNode.__rf.position;

  const w = intersectionNodeWidth / 2;
  const h = intersectionNodeHeight / 2;
  

  const x2 = intersectionNodePosition.x + w;
  const y2 = intersectionNodePosition.y + h;
  const x1 = targetPosition.x + w;
  const y1 = targetPosition.y + h;
 
  const xx1 = (x1 - x2) / (2 * w) - (y1 - y2) / (2 * h);
  const yy1 = (x1 - x2) / (2 * w) + (y1 - y2) / (2 * h);
  const a = 1 / (Math.abs(xx1) + Math.abs(yy1));
  const xx3 = a * xx1;
  const yy3 = a * yy1;
  const dif=Math.abs(y2-y1)/(2*h);
  const difx=Math.abs(x2-x1)/(w)
  
  var x = w * (xx3 + yy3) + x2
  var y = h * (-xx3 + yy3) + y2;
  const x4 = w * (xx3 + yy3) + x1;
  const y4 = h * (-xx3 + yy3) + y1;
if(dif){
  x+=dif
}
else y+=difx
  console.log(x,y)
  console.log(x2,y2,x1,y1)
  console.log(xx1,yy1,xx3,yy3,a)
  console.log(intersectionNodeWidth,intersectionNodeHeight,intersectionNodePosition)
  return { x, y };
}

// returns the position (top,right,bottom or right) passed node compared to the intersection point
function getEdgePosition(node, intersectionPoint) {
  const n = { ...node.__rf.position, ...node.__rf };
  const nx = Math.round(n.x);
  const ny = Math.round(n.y);
  const px = Math.round(intersectionPoint.x);
  const py = Math.round(intersectionPoint.y);

  if (px <= nx + 1) {
    return Position.Left;
  }
  if (px >= nx + n.width - 1) {
    return Position.Right;
  }
  if (py <= ny + 1) {
    return Position.Top;
  }
  if (py >= n.y + n.height - 1) {
    return Position.Bottom;
  }
 
  return Position.Top;
}

// returns the parameters (sx, sy, tx, ty, sourcePos, targetPos) you need to create an edge
export function getEdgeParams(source, target) {
  const sourceIntersectionPoint = getNodeIntersection(source, target);
  const targetIntersectionPoint = getNodeIntersection(target, source);

  const sourcePos = getEdgePosition(source, sourceIntersectionPoint);
  const targetPos = getEdgePosition(target, targetIntersectionPoint);

  return {
    sx: sourceIntersectionPoint.x,
    sy: sourceIntersectionPoint.y,
    tx: targetIntersectionPoint.x,
    ty: targetIntersectionPoint.y,
    sourcePos,
    targetPos,
  };
}
var methoddepth=new Map()
var methodmap=new Map();
var classmap=new Map()
var Methodposition=new Map()
const data=[{
  "MethodNodes": [
    {
      "2": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameStateTest",
        "Calling": [],
        "MethodName": "setup",
        "LineNumber": 24
      }
    },
    {
      "3": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameStateTest",
        "Calling": [],
        "MethodName": "startingPlayerIsX",
        "LineNumber": 31
      }
    },
    {
      "4": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameStateTest",
        "Calling": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "getGameBoard",
            "Id": 71
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "getLastMove",
            "Id": 67
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "getCurrentPlayer",
            "Id": 66
          }
        ],
        "MethodName": "copyConstructorDeepCopiesBoard",
        "LineNumber": 36
      }
    },
    {
      "5": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameStateTest",
        "Calling": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "availableStates",
            "Id": 65
          }
        ],
        "MethodName": "getAvaliableStatesEmptyBoard",
        "LineNumber": 47
      }
    },
    {
      "6": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameStateTest",
        "Calling": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "availableStates",
            "Id": 65
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "getCurrentPlayer",
            "Id": 66
          }
        ],
        "MethodName": "getAvailableStatesLastOne",
        "LineNumber": 54
      }
    },
    {
      "7": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameStateTest",
        "Calling": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          }
        ],
        "MethodName": "getAvailableStatesCompleteBoard",
        "LineNumber": 74
      }
    },
    {
      "8": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameStateTest",
        "Calling": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "hasWin",
            "Id": 68
          }
        ],
        "MethodName": "hasWinRow",
        "LineNumber": 92
      }
    },
    {
      "9": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameStateTest",
        "Calling": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "hasWin",
            "Id": 68
          }
        ],
        "MethodName": "hasWinCol",
        "LineNumber": 100
      }
    },
    {
      "10": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameStateTest",
        "Calling": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "hasWin",
            "Id": 68
          }
        ],
        "MethodName": "hasWinDiagonal",
        "LineNumber": 108
      }
    },
    {
      "11": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameStateTest",
        "Calling": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          }
        ],
        "MethodName": "isOverWin",
        "LineNumber": 118
      }
    },
    {
      "12": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameStateTest",
        "Calling": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "switchPlayer",
            "Id": 72
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          }
        ],
        "MethodName": "isOverDraw",
        "LineNumber": 126
      }
    },
    {
      "13": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameStateTest",
        "Calling": [],
        "MethodName": "playOnBoard",
        "LineNumber": 147
      }
    },
    {
      "14": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameStateTest",
        "Calling": [
          {
            "ClassName": "ExpectedException",
            "MethodName": "expect",
            "Id": null
          },
          {
            "ClassName": "ExpectedException",
            "MethodName": "expectMessage",
            "Id": null
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          }
        ],
        "MethodName": "playOffBoard",
        "LineNumber": 153
      }
    },
    {
      "15": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameStateTest",
        "Calling": [],
        "MethodName": "playSameLocation",
        "LineNumber": 160
      }
    },
    {
      "16": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameStateTest",
        "Calling": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "switchPlayer",
            "Id": 72
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "switchPlayer",
            "Id": 72
          }
        ],
        "MethodName": "switchPlayer",
        "LineNumber": 171
      }
    },
    {
      "18": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "GameBoardTest",
        "Calling": [],
        "MethodName": "setup",
        "LineNumber": 22
      }
    },
    {
      "19": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "GameBoardTest",
        "Calling": [
          {
            "ClassName": "GameBoard",
            "MethodName": "mark",
            "Id": 77
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "mark",
            "Id": 77
          }
        ],
        "MethodName": "copyConstructor",
        "LineNumber": 29
      }
    },
    {
      "20": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "GameBoardTest",
        "Calling": [],
        "MethodName": "getMarkUnmarked",
        "LineNumber": 40
      }
    },
    {
      "21": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "GameBoardTest",
        "Calling": [
          {
            "ClassName": "ExpectedException",
            "MethodName": "expect",
            "Id": null
          },
          {
            "ClassName": "ExpectedException",
            "MethodName": "expectMessage",
            "Id": null
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          }
        ],
        "MethodName": "getMarkOffBoard",
        "LineNumber": 45
      }
    },
    {
      "22": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "GameBoardTest",
        "Calling": [
          {
            "ClassName": "ExpectedException",
            "MethodName": "expect",
            "Id": null
          },
          {
            "ClassName": "ExpectedException",
            "MethodName": "expectMessage",
            "Id": null
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          }
        ],
        "MethodName": "getMarkOffBoardNegative",
        "LineNumber": 52
      }
    },
    {
      "23": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "GameBoardTest",
        "Calling": [
          {
            "ClassName": "GameBoard",
            "MethodName": "mark",
            "Id": 77
          }
        ],
        "MethodName": "markOnBoard",
        "LineNumber": 61
      }
    },
    {
      "24": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "GameBoardTest",
        "Calling": [
          {
            "ClassName": "GameBoard",
            "MethodName": "mark",
            "Id": 77
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "mark",
            "Id": 77
          }
        ],
        "MethodName": "markTwice",
        "LineNumber": 69
      }
    },
    {
      "25": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "GameBoardTest",
        "Calling": [
          {
            "ClassName": "ExpectedException",
            "MethodName": "expect",
            "Id": null
          },
          {
            "ClassName": "ExpectedException",
            "MethodName": "expectMessage",
            "Id": null
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "mark",
            "Id": 77
          }
        ],
        "MethodName": "markNull",
        "LineNumber": 78
      }
    },
    {
      "26": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "GameBoardTest",
        "Calling": [
          {
            "ClassName": "ExpectedException",
            "MethodName": "expect",
            "Id": null
          },
          {
            "ClassName": "ExpectedException",
            "MethodName": "expectMessage",
            "Id": null
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "mark",
            "Id": 77
          }
        ],
        "MethodName": "markOffBoard",
        "LineNumber": 85
      }
    },
    {
      "27": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "GameBoardTest",
        "Calling": [],
        "MethodName": "getOpenPositionsAll",
        "LineNumber": 94
      }
    },
    {
      "28": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "GameBoardTest",
        "Calling": [
          {
            "ClassName": "GameBoard",
            "MethodName": "mark",
            "Id": 77
          }
        ],
        "MethodName": "getOpenPositions",
        "LineNumber": 101
      }
    },
    {
      "30": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeBoardPrinterTest",
        "Calling": [],
        "MethodName": "setup",
        "LineNumber": 24
      }
    },
    {
      "31": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeBoardPrinterTest",
        "Calling": [
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "printGameBoard",
            "Id": 87
          }
        ],
        "MethodName": "printGameBoardEmpty",
        "LineNumber": 29
      }
    },
    {
      "32": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeBoardPrinterTest",
        "Calling": [
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "printGameBoard",
            "Id": 87
          }
        ],
        "MethodName": "printGameBoard",
        "LineNumber": 43
      }
    },
    {
      "34": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameRunnerTest",
        "Calling": [
          {
            "ClassName": "TicTacToeGameRunnerTest",
            "MethodName": "scannerWithInputs",
            "Id": 39
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          }
        ],
        "MethodName": "moveHumanContinuesToAcceptInputUntilValid",
        "LineNumber": 33
      }
    },
    {
      "35": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameRunnerTest",
        "Calling": [
          {
            "ClassName": "TicTacToeGameRunnerTest",
            "MethodName": "scannerWithInputs",
            "Id": 39
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          }
        ],
        "MethodName": "moveHumanErrorWhenOffBoard",
        "LineNumber": 43
      }
    },
    {
      "36": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameRunnerTest",
        "Calling": [
          {
            "ClassName": "TicTacToeGameRunnerTest",
            "MethodName": "scannerWithInputs",
            "Id": 39
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          }
        ],
        "MethodName": "moveHumanErrorWhenRepeatMove",
        "LineNumber": 55
      }
    },
    {
      "37": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameRunnerTest",
        "Calling": [
          {
            "ClassName": "TicTacToeGameRunnerTest",
            "MethodName": "scannerWithInputs",
            "Id": 39
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          }
        ],
        "MethodName": "moveHumanSwitchesPlayers",
        "LineNumber": 67
      }
    },
    {
      "38": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameRunnerTest",
        "Calling": [
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveComputer",
            "Id": 59
          }
        ],
        "MethodName": "moveComputerSwitchesPlayers",
        "LineNumber": 77
      }
    },
    {
      "39": {
        "AcessModifier": "PRIVATE",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameRunnerTest",
            "MethodName": "moveHumanContinuesToAcceptInputUntilValid",
            "Id": 34
          },
          {
            "ClassName": "TicTacToeGameRunnerTest",
            "MethodName": "moveHumanErrorWhenOffBoard",
            "Id": 35
          },
          {
            "ClassName": "TicTacToeGameRunnerTest",
            "MethodName": "moveHumanErrorWhenRepeatMove",
            "Id": 36
          },
          {
            "ClassName": "TicTacToeGameRunnerTest",
            "MethodName": "moveHumanSwitchesPlayers",
            "Id": 37
          }
        ],
        "RetunType": "Scanner",
        "TestFlag": 1,
        "ClassName": "TicTacToeGameRunnerTest",
        "Calling": [],
        "MethodName": "scannerWithInputs",
        "LineNumber": 91
      }
    },
    {
      "41": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeEvaluatorTest",
        "Calling": [],
        "MethodName": "setup",
        "LineNumber": 32
      }
    },
    {
      "42": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeEvaluatorTest",
        "Calling": [
          {
            "ClassName": "ExpectedException",
            "MethodName": "expect",
            "Id": null
          },
          {
            "ClassName": "ExpectedException",
            "MethodName": "expectMessage",
            "Id": null
          }
        ],
        "MethodName": "constructorNullPlayer",
        "LineNumber": 39
      }
    },
    {
      "43": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeEvaluatorTest",
        "Calling": [],
        "MethodName": "evaluateWin",
        "LineNumber": 48
      }
    },
    {
      "44": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeEvaluatorTest",
        "Calling": [],
        "MethodName": "evaluateWinConsidersAvailableMoves",
        "LineNumber": 54
      }
    },
    {
      "45": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeEvaluatorTest",
        "Calling": [],
        "MethodName": "evaluateLoss",
        "LineNumber": 62
      }
    },
    {
      "46": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeEvaluatorTest",
        "Calling": [],
        "MethodName": "evaluateDraw",
        "LineNumber": 68
      }
    },
    {
      "47": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeEvaluatorTest",
        "Calling": [
          {
            "ClassName": "ExpectedException",
            "MethodName": "expect",
            "Id": null
          },
          {
            "ClassName": "ExpectedException",
            "MethodName": "expectMessage",
            "Id": null
          },
          {
            "ClassName": "TicTacToeEvaluator",
            "MethodName": "evaluate",
            "Id": 97
          }
        ],
        "MethodName": "evaluateNull",
        "LineNumber": 73
      }
    },
    {
      "49": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeMinimaxAgentTest",
        "Calling": [],
        "MethodName": "setup",
        "LineNumber": 39
      }
    },
    {
      "50": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeMinimaxAgentTest",
        "Calling": [],
        "MethodName": "evaluateLeaf",
        "LineNumber": 44
      }
    },
    {
      "51": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeMinimaxAgentTest",
        "Calling": [
          {
            "ClassName": "ExpectedException",
            "MethodName": "expect",
            "Id": null
          },
          {
            "ClassName": "ExpectedException",
            "MethodName": "expectMessage",
            "Id": null
          },
          {
            "ClassName": "MinimaxAgent<TicTacToeGameState>",
            "MethodName": "evaluateNextState",
            "Id": null
          }
        ],
        "MethodName": "evaluateNegativeDepth",
        "LineNumber": 50
      }
    },
    {
      "52": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeMinimaxAgentTest",
        "Calling": [
          {
            "ClassName": "MinimaxAgent<TicTacToeGameState>",
            "MethodName": "evaluateNextState",
            "Id": null
          }
        ],
        "MethodName": "preferWinningState",
        "LineNumber": 58
      }
    },
    {
      "53": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeMinimaxAgentTest",
        "Calling": [
          {
            "ClassName": "MinimaxAgent<TicTacToeGameState>",
            "MethodName": "evaluateNextState",
            "Id": null
          }
        ],
        "MethodName": "preventLosingMove",
        "LineNumber": 74
      }
    },
    {
      "54": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeMinimaxAgentTest",
        "Calling": [
          {
            "ClassName": "MinimaxAgent<TicTacToeGameState>",
            "MethodName": "evaluateNextState",
            "Id": null
          }
        ],
        "MethodName": "preferEarlyWin",
        "LineNumber": 89
      }
    },
    {
      "55": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 1,
        "ClassName": "TicTacToeMinimaxAgentTest",
        "Calling": [],
        "MethodName": "evaluateGameAlreadyOver",
        "LineNumber": 101
      }
    },
    {
      "57": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeMain",
            "MethodName": "main",
            "Id": 85
          }
        ],
        "RetunType": "void",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameRunner",
        "Calling": [
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "printInstructions",
            "Id": 62
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveComputer",
            "Id": 59
          },
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "printGameBoard",
            "Id": 87
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "getGameBoard",
            "Id": 71
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "isOver",
            "Id": 69
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "printGameOver",
            "Id": 61
          }
        ],
        "MethodName": "run",
        "LineNumber": 50
      }
    },
    {
      "58": {
        "AcessModifier": "PACKAGE_PRIVATE",
        "CalledFrom": [],
        "RetunType": "TicTacToeGameState",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameRunner",
        "Calling": [],
        "MethodName": "getGame",
        "LineNumber": 69
      }
    },
    {
      "59": {
        "AcessModifier": "PACKAGE_PRIVATE",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameRunnerTest",
            "MethodName": "moveComputerSwitchesPlayers",
            "Id": 38
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "run",
            "Id": 57
          }
        ],
        "RetunType": "void",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameRunner",
        "Calling": [
          {
            "ClassName": "GameIntelligenceAgent<TicTacToeGameState>",
            "MethodName": "evaluateNextState",
            "Id": null
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "getLastMove",
            "Id": 67
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "Position",
            "MethodName": "getRow",
            "Id": 91
          },
          {
            "ClassName": "Position",
            "MethodName": "getCol",
            "Id": 92
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "switchPlayer",
            "Id": 72
          }
        ],
        "MethodName": "moveComputer",
        "LineNumber": 73
      }
    },
    {
      "60": {
        "AcessModifier": "PACKAGE_PRIVATE",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameRunnerTest",
            "MethodName": "moveHumanContinuesToAcceptInputUntilValid",
            "Id": 34
          },
          {
            "ClassName": "TicTacToeGameRunnerTest",
            "MethodName": "moveHumanErrorWhenOffBoard",
            "Id": 35
          },
          {
            "ClassName": "TicTacToeGameRunnerTest",
            "MethodName": "moveHumanErrorWhenRepeatMove",
            "Id": 36
          },
          {
            "ClassName": "TicTacToeGameRunnerTest",
            "MethodName": "moveHumanErrorWhenRepeatMove",
            "Id": 36
          },
          {
            "ClassName": "TicTacToeGameRunnerTest",
            "MethodName": "moveHumanSwitchesPlayers",
            "Id": 37
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "run",
            "Id": 57
          }
        ],
        "RetunType": "void",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameRunner",
        "Calling": [
          {
            "ClassName": "PrintStream",
            "MethodName": "print",
            "Id": null
          },
          {
            "ClassName": "Scanner",
            "MethodName": "nextLine",
            "Id": null
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "parseUserInput",
            "Id": 63
          },
          {
            "ClassName": "PrintStream",
            "MethodName": "printf",
            "Id": null
          },
          {
            "ClassName": "Position",
            "MethodName": "getRow",
            "Id": 91
          },
          {
            "ClassName": "Position",
            "MethodName": "getCol",
            "Id": 92
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "printInstructions",
            "Id": 62
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "Position",
            "MethodName": "getRow",
            "Id": 91
          },
          {
            "ClassName": "Position",
            "MethodName": "getCol",
            "Id": 92
          },
          {
            "ClassName": "PrintStream",
            "MethodName": "printf",
            "Id": null
          },
          {
            "ClassName": "Position",
            "MethodName": "getRow",
            "Id": 91
          },
          {
            "ClassName": "Position",
            "MethodName": "getCol",
            "Id": 92
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "printInstructions",
            "Id": 62
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "switchPlayer",
            "Id": 72
          }
        ],
        "MethodName": "moveHuman",
        "LineNumber": 83
      }
    },
    {
      "61": {
        "AcessModifier": "PRIVATE",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "run",
            "Id": 57
          }
        ],
        "RetunType": "void",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameRunner",
        "Calling": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "hasWin",
            "Id": 68
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "hasWin",
            "Id": 68
          },
          {
            "ClassName": "PrintStream",
            "MethodName": "println",
            "Id": null
          },
          {
            "ClassName": "PrintStream",
            "MethodName": "println",
            "Id": null
          }
        ],
        "MethodName": "printGameOver",
        "LineNumber": 109
      }
    },
    {
      "62": {
        "AcessModifier": "PRIVATE",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "run",
            "Id": 57
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "parseUserInput",
            "Id": 63
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "parseUserInput",
            "Id": 63
          }
        ],
        "RetunType": "void",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameRunner",
        "Calling": [
          {
            "ClassName": "PrintStream",
            "MethodName": "println",
            "Id": null
          }
        ],
        "MethodName": "printInstructions",
        "LineNumber": 119
      }
    },
    {
      "63": {
        "AcessModifier": "PRIVATE",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          }
        ],
        "RetunType": "Position",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameRunner",
        "Calling": [
          {
            "ClassName": "String",
            "MethodName": "split",
            "Id": null
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "printInstructions",
            "Id": 62
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "printInstructions",
            "Id": 62
          }
        ],
        "MethodName": "parseUserInput",
        "LineNumber": 123
      }
    },
    {
      "65": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvaliableStatesEmptyBoard",
            "Id": 5
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesLastOne",
            "Id": 6
          }
        ],
        "RetunType": "List<DiscreteGameState>",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameState",
        "Calling": [
          {
            "ClassName": "GameBoard",
            "MethodName": "getOpenPositions",
            "Id": 79
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          },
          {
            "ClassName": "Position",
            "MethodName": "getRow",
            "Id": 91
          },
          {
            "ClassName": "Position",
            "MethodName": "getCol",
            "Id": 92
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "switchPlayer",
            "Id": 72
          }
        ],
        "MethodName": "availableStates",
        "LineNumber": 64
      }
    },
    {
      "66": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "copyConstructorDeepCopiesBoard",
            "Id": 4
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesLastOne",
            "Id": 6
          }
        ],
        "RetunType": "Player",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameState",
        "Calling": [],
        "MethodName": "getCurrentPlayer",
        "LineNumber": 83
      }
    },
    {
      "67": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "copyConstructorDeepCopiesBoard",
            "Id": 4
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveComputer",
            "Id": 59
          }
        ],
        "RetunType": "Position",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameState",
        "Calling": [],
        "MethodName": "getLastMove",
        "LineNumber": 92
      }
    },
    {
      "68": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "hasWinRow",
            "Id": 8
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "hasWinCol",
            "Id": 9
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "hasWinDiagonal",
            "Id": 10
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "printGameOver",
            "Id": 61
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "printGameOver",
            "Id": 61
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "isOver",
            "Id": 69
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "isOver",
            "Id": 69
          },
          {
            "ClassName": "TicTacToeEvaluator",
            "MethodName": "evaluate",
            "Id": 97
          },
          {
            "ClassName": "TicTacToeEvaluator",
            "MethodName": "evaluate",
            "Id": 97
          }
        ],
        "RetunType": "boolean",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameState",
        "Calling": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "completesRow",
            "Id": 75
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "completesColumn",
            "Id": 73
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "completesDiagonal",
            "Id": 74
          }
        ],
        "MethodName": "hasWin",
        "LineNumber": 102
      }
    },
    {
      "69": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "run",
            "Id": 57
          }
        ],
        "RetunType": "boolean",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameState",
        "Calling": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "hasWin",
            "Id": 68
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "hasWin",
            "Id": 68
          }
        ],
        "MethodName": "isOver",
        "LineNumber": 111
      }
    },
    {
      "70": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "copyConstructorDeepCopiesBoard",
            "Id": 4
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesLastOne",
            "Id": 6
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesLastOne",
            "Id": 6
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesLastOne",
            "Id": 6
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesLastOne",
            "Id": 6
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesLastOne",
            "Id": 6
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesLastOne",
            "Id": 6
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesLastOne",
            "Id": 6
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesLastOne",
            "Id": 6
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesCompleteBoard",
            "Id": 7
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesCompleteBoard",
            "Id": 7
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesCompleteBoard",
            "Id": 7
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesCompleteBoard",
            "Id": 7
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesCompleteBoard",
            "Id": 7
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesCompleteBoard",
            "Id": 7
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesCompleteBoard",
            "Id": 7
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesCompleteBoard",
            "Id": 7
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "getAvailableStatesCompleteBoard",
            "Id": 7
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "hasWinRow",
            "Id": 8
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "hasWinRow",
            "Id": 8
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "hasWinRow",
            "Id": 8
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "hasWinCol",
            "Id": 9
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "hasWinCol",
            "Id": 9
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "hasWinCol",
            "Id": 9
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "hasWinDiagonal",
            "Id": 10
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "hasWinDiagonal",
            "Id": 10
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "hasWinDiagonal",
            "Id": 10
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "isOverWin",
            "Id": 11
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "isOverWin",
            "Id": 11
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "isOverWin",
            "Id": 11
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "isOverDraw",
            "Id": 12
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "isOverDraw",
            "Id": 12
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "isOverDraw",
            "Id": 12
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "isOverDraw",
            "Id": 12
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "isOverDraw",
            "Id": 12
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "isOverDraw",
            "Id": 12
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "isOverDraw",
            "Id": 12
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "isOverDraw",
            "Id": 12
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "isOverDraw",
            "Id": 12
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "playOffBoard",
            "Id": 14
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveComputer",
            "Id": 59
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "availableStates",
            "Id": 65
          }
        ],
        "RetunType": "boolean",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameState",
        "Calling": [
          {
            "ClassName": "GameBoard",
            "MethodName": "mark",
            "Id": 77
          }
        ],
        "MethodName": "play",
        "LineNumber": 123
      }
    },
    {
      "71": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "copyConstructorDeepCopiesBoard",
            "Id": 4
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "run",
            "Id": 57
          }
        ],
        "RetunType": "GameBoard",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameState",
        "Calling": [],
        "MethodName": "getGameBoard",
        "LineNumber": 137
      }
    },
    {
      "72": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "isOverDraw",
            "Id": 12
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "switchPlayer",
            "Id": 16
          },
          {
            "ClassName": "TicTacToeGameStateTest",
            "MethodName": "switchPlayer",
            "Id": 16
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveComputer",
            "Id": 59
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "availableStates",
            "Id": 65
          }
        ],
        "RetunType": "void",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameState",
        "Calling": [],
        "MethodName": "switchPlayer",
        "LineNumber": 144
      }
    },
    {
      "73": {
        "AcessModifier": "PRIVATE",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "hasWin",
            "Id": 68
          }
        ],
        "RetunType": "boolean",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameState",
        "Calling": [
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          }
        ],
        "MethodName": "completesColumn",
        "LineNumber": 148
      }
    },
    {
      "74": {
        "AcessModifier": "PRIVATE",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "hasWin",
            "Id": 68
          }
        ],
        "RetunType": "boolean",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameState",
        "Calling": [
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          }
        ],
        "MethodName": "completesDiagonal",
        "LineNumber": 155
      }
    },
    {
      "75": {
        "AcessModifier": "PRIVATE",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "hasWin",
            "Id": 68
          }
        ],
        "RetunType": "boolean",
        "TestFlag": 0,
        "ClassName": "TicTacToeGameState",
        "Calling": [
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          }
        ],
        "MethodName": "completesRow",
        "LineNumber": 164
      }
    },
    {
      "77": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "GameBoardTest",
            "MethodName": "copyConstructor",
            "Id": 19
          },
          {
            "ClassName": "GameBoardTest",
            "MethodName": "copyConstructor",
            "Id": 19
          },
          {
            "ClassName": "GameBoardTest",
            "MethodName": "markOnBoard",
            "Id": 23
          },
          {
            "ClassName": "GameBoardTest",
            "MethodName": "markTwice",
            "Id": 24
          },
          {
            "ClassName": "GameBoardTest",
            "MethodName": "markTwice",
            "Id": 24
          },
          {
            "ClassName": "GameBoardTest",
            "MethodName": "markNull",
            "Id": 25
          },
          {
            "ClassName": "GameBoardTest",
            "MethodName": "markOffBoard",
            "Id": 26
          },
          {
            "ClassName": "GameBoardTest",
            "MethodName": "getOpenPositions",
            "Id": 28
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "play",
            "Id": 70
          }
        ],
        "RetunType": "boolean",
        "TestFlag": 0,
        "ClassName": "GameBoard",
        "Calling": [
          {
            "ClassName": "GameBoard",
            "MethodName": "validatePosition",
            "Id": 83
          }
        ],
        "MethodName": "mark",
        "LineNumber": 67
      }
    },
    {
      "78": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "GameBoardTest",
            "MethodName": "getMarkOffBoard",
            "Id": 21
          },
          {
            "ClassName": "GameBoardTest",
            "MethodName": "getMarkOffBoardNegative",
            "Id": 22
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "completesColumn",
            "Id": 73
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "completesColumn",
            "Id": 73
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "completesColumn",
            "Id": 73
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "completesDiagonal",
            "Id": 74
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "completesDiagonal",
            "Id": 74
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "completesDiagonal",
            "Id": 74
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "completesDiagonal",
            "Id": 74
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "completesDiagonal",
            "Id": 74
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "completesRow",
            "Id": 75
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "completesRow",
            "Id": 75
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "completesRow",
            "Id": 75
          },
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "printRow",
            "Id": 88
          },
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "printRow",
            "Id": 88
          },
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "printRow",
            "Id": 88
          }
        ],
        "RetunType": "Player",
        "TestFlag": 0,
        "ClassName": "GameBoard",
        "Calling": [
          {
            "ClassName": "GameBoard",
            "MethodName": "validatePosition",
            "Id": 83
          }
        ],
        "MethodName": "getMark",
        "LineNumber": 88
      }
    },
    {
      "79": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "availableStates",
            "Id": 65
          }
        ],
        "RetunType": "List<Position>",
        "TestFlag": 0,
        "ClassName": "GameBoard",
        "Calling": [],
        "MethodName": "getOpenPositions",
        "LineNumber": 98
      }
    },
    {
      "80": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "String",
        "TestFlag": 0,
        "ClassName": "GameBoard",
        "Calling": [],
        "MethodName": "toString",
        "LineNumber": 110
      }
    },
    {
      "81": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "boolean",
        "TestFlag": 0,
        "ClassName": "GameBoard",
        "Calling": [],
        "MethodName": "equals",
        "LineNumber": 127
      }
    },
    {
      "82": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "int",
        "TestFlag": 0,
        "ClassName": "GameBoard",
        "Calling": [],
        "MethodName": "hashCode",
        "LineNumber": 144
      }
    },
    {
      "83": {
        "AcessModifier": "PRIVATE",
        "CalledFrom": [
          {
            "ClassName": "GameBoard",
            "MethodName": "mark",
            "Id": 77
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          }
        ],
        "RetunType": "void",
        "TestFlag": 0,
        "ClassName": "GameBoard",
        "Calling": [],
        "MethodName": "validatePosition",
        "LineNumber": 154
      }
    },
    {
      "85": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "void",
        "TestFlag": 0,
        "ClassName": "TicTacToeMain",
        "Calling": [
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "run",
            "Id": 57
          }
        ],
        "MethodName": "main",
        "LineNumber": 15
      }
    },
    {
      "87": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeBoardPrinterTest",
            "MethodName": "printGameBoardEmpty",
            "Id": 31
          },
          {
            "ClassName": "TicTacToeBoardPrinterTest",
            "MethodName": "printGameBoard",
            "Id": 32
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "run",
            "Id": 57
          }
        ],
        "RetunType": "void",
        "TestFlag": 0,
        "ClassName": "TicTacToeBoardPrinter",
        "Calling": [
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "printRow",
            "Id": 88
          },
          {
            "ClassName": "PrintStream",
            "MethodName": "println",
            "Id": null
          },
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "printRow",
            "Id": 88
          },
          {
            "ClassName": "PrintStream",
            "MethodName": "println",
            "Id": null
          },
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "printRow",
            "Id": 88
          }
        ],
        "MethodName": "printGameBoard",
        "LineNumber": 26
      }
    },
    {
      "88": {
        "AcessModifier": "PRIVATE",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "printGameBoard",
            "Id": 87
          },
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "printGameBoard",
            "Id": 87
          },
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "printGameBoard",
            "Id": 87
          }
        ],
        "RetunType": "void",
        "TestFlag": 0,
        "ClassName": "TicTacToeBoardPrinter",
        "Calling": [
          {
            "ClassName": "PrintStream",
            "MethodName": "printf",
            "Id": null
          },
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "markToString",
            "Id": 89
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          },
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "markToString",
            "Id": 89
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          },
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "markToString",
            "Id": 89
          },
          {
            "ClassName": "GameBoard",
            "MethodName": "getMark",
            "Id": 78
          }
        ],
        "MethodName": "printRow",
        "LineNumber": 34
      }
    },
    {
      "89": {
        "AcessModifier": "PRIVATE",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "printRow",
            "Id": 88
          },
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "printRow",
            "Id": 88
          },
          {
            "ClassName": "TicTacToeBoardPrinter",
            "MethodName": "printRow",
            "Id": 88
          }
        ],
        "RetunType": "String",
        "TestFlag": 0,
        "ClassName": "TicTacToeBoardPrinter",
        "Calling": [
          {
            "ClassName": "Player",
            "MethodName": "toString",
            "Id": null
          }
        ],
        "MethodName": "markToString",
        "LineNumber": 39
      }
    },
    {
      "91": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveComputer",
            "Id": 59
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "availableStates",
            "Id": 65
          }
        ],
        "RetunType": "int",
        "TestFlag": 0,
        "ClassName": "Position",
        "Calling": [],
        "MethodName": "getRow",
        "LineNumber": 25
      }
    },
    {
      "92": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveComputer",
            "Id": 59
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          },
          {
            "ClassName": "TicTacToeGameRunner",
            "MethodName": "moveHuman",
            "Id": 60
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "availableStates",
            "Id": 65
          }
        ],
        "RetunType": "int",
        "TestFlag": 0,
        "ClassName": "Position",
        "Calling": [],
        "MethodName": "getCol",
        "LineNumber": 29
      }
    },
    {
      "93": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "boolean",
        "TestFlag": 0,
        "ClassName": "Position",
        "Calling": [],
        "MethodName": "equals",
        "LineNumber": 33
      }
    },
    {
      "94": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "int",
        "TestFlag": 0,
        "ClassName": "Position",
        "Calling": [],
        "MethodName": "hashCode",
        "LineNumber": 45
      }
    },
    {
      "95": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [],
        "RetunType": "String",
        "TestFlag": 0,
        "ClassName": "Position",
        "Calling": [],
        "MethodName": "toString",
        "LineNumber": 50
      }
    },
    {
      "97": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "TicTacToeEvaluatorTest",
            "MethodName": "evaluateNull",
            "Id": 47
          }
        ],
        "RetunType": "int",
        "TestFlag": 0,
        "ClassName": "TicTacToeEvaluator",
        "Calling": [
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "hasWin",
            "Id": 68
          },
          {
            "ClassName": "TicTacToeGameState",
            "MethodName": "hasWin",
            "Id": 68
          }
        ],
        "MethodName": "evaluate",
        "LineNumber": 36
      }
    },
    {
      "99": {
        "AcessModifier": "PACKAGE_PRIVATE",
        "CalledFrom": [],
        "RetunType": "int",
        "TestFlag": 0,
        "ClassName": "StateEvaluator",
        "Calling": [],
        "MethodName": "evaluate",
        "LineNumber": 20
      }
    },
    {
      "102": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "MinimaxAgent",
            "MethodName": "evaluateNextState",
            "Id": 102
          }
        ],
        "RetunType": "T",
        "TestFlag": 0,
        "ClassName": "MinimaxAgent",
        "Calling": [
          {
            "ClassName": "MinimaxAgent",
            "MethodName": "evaluateNextState",
            "Id": 102
          },
          {
            "ClassName": "MinimaxAgent",
            "MethodName": "buildTree",
            "Id": 104
          }
        ],
        "MethodName": "evaluateNextState",
        "LineNumber": 56
      }
    },
    {
      "102": {
        "AcessModifier": "PUBLIC",
        "CalledFrom": [
          {
            "ClassName": "MinimaxAgent",
            "MethodName": "evaluateNextState",
            "Id": 102
          }
        ],
        "RetunType": "T",
        "TestFlag": 0,
        "ClassName": "MinimaxAgent",
        "Calling": [
          {
            "ClassName": "MinimaxAgent",
            "MethodName": "evaluateNextState",
            "Id": 102
          },
          {
            "ClassName": "MinimaxAgent",
            "MethodName": "buildTree",
            "Id": 104
          }
        ],
        "MethodName": "evaluateNextState",
        "LineNumber": 56
      }
    },
    {
      "104": {
        "AcessModifier": "PRIVATE",
        "CalledFrom": [
          {
            "ClassName": "MinimaxAgent",
            "MethodName": "evaluateNextState",
            "Id": 102
          },
          {
            "ClassName": "MinimaxAgent",
            "MethodName": "buildTree",
            "Id": 104
          },
          {
            "ClassName": "MinimaxAgent",
            "MethodName": "buildTree",
            "Id": 104
          }
        ],
        "RetunType": "Node<T>",
        "TestFlag": 0,
        "ClassName": "MinimaxAgent",
        "Calling": [
          {
            "ClassName": "T",
            "MethodName": "isOver",
            "Id": null
          },
          {
            "ClassName": "MinimaxAgent",
            "MethodName": "buildTree",
            "Id": 104
          },
          {
            "ClassName": "T",
            "MethodName": "availableStates",
            "Id": null
          },
          {
            "ClassName": "StateEvaluator<T>",
            "MethodName": "evaluate",
            "Id": null
          },
          {
            "ClassName": "MinimaxAgent",
            "MethodName": "buildTree",
            "Id": 104
          }
        ],
        "MethodName": "buildTree",
        "LineNumber": 106
      }
    },
    {
      "104": {
        "AcessModifier": "PRIVATE",
        "CalledFrom": [
          {
            "ClassName": "MinimaxAgent",
            "MethodName": "evaluateNextState",
            "Id": 102
          },
          {
            "ClassName": "MinimaxAgent",
            "MethodName": "buildTree",
            "Id": 104
          },
          {
            "ClassName": "MinimaxAgent",
            "MethodName": "buildTree",
            "Id": 104
          }
        ],
        "RetunType": "Node<T>",
        "TestFlag": 0,
        "ClassName": "MinimaxAgent",
        "Calling": [
          {
            "ClassName": "T",
            "MethodName": "isOver",
            "Id": null
          },
          {
            "ClassName": "MinimaxAgent",
            "MethodName": "buildTree",
            "Id": 104
          },
          {
            "ClassName": "T",
            "MethodName": "availableStates",
            "Id": null
          },
          {
            "ClassName": "StateEvaluator<T>",
            "MethodName": "evaluate",
            "Id": null
          },
          {
            "ClassName": "MinimaxAgent",
            "MethodName": "buildTree",
            "Id": 104
          }
        ],
        "MethodName": "buildTree",
        "LineNumber": 106
      }
    },
    {
      "108": {
        "AcessModifier": "PACKAGE_PRIVATE",
        "CalledFrom": [],
        "RetunType": "T",
        "TestFlag": 0,
        "ClassName": "GameIntelligenceAgent",
        "Calling": [],
        "MethodName": "evaluateNextState",
        "LineNumber": 31
      }
    },
    {
      "108": {
        "AcessModifier": "PACKAGE_PRIVATE",
        "CalledFrom": [],
        "RetunType": "T",
        "TestFlag": 0,
        "ClassName": "GameIntelligenceAgent",
        "Calling": [],
        "MethodName": "evaluateNextState",
        "LineNumber": 31
      }
    },
    {
      "110": {
        "AcessModifier": "PACKAGE_PRIVATE",
        "CalledFrom": [],
        "RetunType": "List<DiscreteGameState>",
        "TestFlag": 0,
        "ClassName": "DiscreteGameState",
        "Calling": [],
        "MethodName": "availableStates",
        "LineNumber": 13
      }
    },
    {
      "111": {
        "AcessModifier": "PACKAGE_PRIVATE",
        "CalledFrom": [],
        "RetunType": "boolean",
        "TestFlag": 0,
        "ClassName": "DiscreteGameState",
        "Calling": [],
        "MethodName": "isOver",
        "LineNumber": 20
      }
    }
  ],
  "ClassNodes": [
    {
      "TicTacToeGameStateTest": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/test/java/ttsu/game/tictactoe/TicTacToeGameStateTest.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 1,
        "Id": 1,
        "LineNumber": 17,
        "Nodes": [
          {
            "id": 2,
            "MethodName": "setup"
          },
          {
            "id": 3,
            "MethodName": "startingPlayerIsX"
          },
          {
            "id": 4,
            "MethodName": "copyConstructorDeepCopiesBoard"
          },
          {
            "id": 5,
            "MethodName": "getAvaliableStatesEmptyBoard"
          },
          {
            "id": 6,
            "MethodName": "getAvailableStatesLastOne"
          },
          {
            "id": 7,
            "MethodName": "getAvailableStatesCompleteBoard"
          },
          {
            "id": 8,
            "MethodName": "hasWinRow"
          },
          {
            "id": 9,
            "MethodName": "hasWinCol"
          },
          {
            "id": 10,
            "MethodName": "hasWinDiagonal"
          },
          {
            "id": 11,
            "MethodName": "isOverWin"
          },
          {
            "id": 12,
            "MethodName": "isOverDraw"
          },
          {
            "id": 13,
            "MethodName": "playOnBoard"
          },
          {
            "id": 14,
            "MethodName": "playOffBoard"
          },
          {
            "id": 15,
            "MethodName": "playSameLocation"
          },
          {
            "id": 16,
            "MethodName": "switchPlayer"
          }
        ]
      }
    },
    {
      "GameBoardTest": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/test/java/ttsu/game/tictactoe/GameBoardTest.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 1,
        "Id": 17,
        "LineNumber": 15,
        "Nodes": [
          {
            "id": 18,
            "MethodName": "setup"
          },
          {
            "id": 19,
            "MethodName": "copyConstructor"
          },
          {
            "id": 20,
            "MethodName": "getMarkUnmarked"
          },
          {
            "id": 21,
            "MethodName": "getMarkOffBoard"
          },
          {
            "id": 22,
            "MethodName": "getMarkOffBoardNegative"
          },
          {
            "id": 23,
            "MethodName": "markOnBoard"
          },
          {
            "id": 24,
            "MethodName": "markTwice"
          },
          {
            "id": 25,
            "MethodName": "markNull"
          },
          {
            "id": 26,
            "MethodName": "markOffBoard"
          },
          {
            "id": 27,
            "MethodName": "getOpenPositionsAll"
          },
          {
            "id": 28,
            "MethodName": "getOpenPositions"
          }
        ]
      }
    },
    {
      "TicTacToeBoardPrinterTest": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/test/java/ttsu/game/tictactoe/TicTacToeBoardPrinterTest.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 1,
        "Id": 29,
        "LineNumber": 18,
        "Nodes": [
          {
            "id": 30,
            "MethodName": "setup"
          },
          {
            "id": 31,
            "MethodName": "printGameBoardEmpty"
          },
          {
            "id": 32,
            "MethodName": "printGameBoard"
          }
        ]
      }
    },
    {
      "TicTacToeGameRunnerTest": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/test/java/ttsu/game/tictactoe/TicTacToeGameRunnerTest.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 1,
        "Id": 33,
        "LineNumber": 23,
        "Nodes": [
          {
            "id": 34,
            "MethodName": "moveHumanContinuesToAcceptInputUntilValid"
          },
          {
            "id": 35,
            "MethodName": "moveHumanErrorWhenOffBoard"
          },
          {
            "id": 36,
            "MethodName": "moveHumanErrorWhenRepeatMove"
          },
          {
            "id": 37,
            "MethodName": "moveHumanSwitchesPlayers"
          },
          {
            "id": 38,
            "MethodName": "moveComputerSwitchesPlayers"
          },
          {
            "id": 39,
            "MethodName": "scannerWithInputs"
          }
        ]
      }
    },
    {
      "TicTacToeEvaluatorTest": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/test/java/ttsu/game/ai/heuristic/tictactoe/TicTacToeEvaluatorTest.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 1,
        "Id": 40,
        "LineNumber": 20,
        "Nodes": [
          {
            "id": 41,
            "MethodName": "setup"
          },
          {
            "id": 42,
            "MethodName": "constructorNullPlayer"
          },
          {
            "id": 43,
            "MethodName": "evaluateWin"
          },
          {
            "id": 44,
            "MethodName": "evaluateWinConsidersAvailableMoves"
          },
          {
            "id": 45,
            "MethodName": "evaluateLoss"
          },
          {
            "id": 46,
            "MethodName": "evaluateDraw"
          },
          {
            "id": 47,
            "MethodName": "evaluateNull"
          }
        ]
      }
    },
    {
      "TicTacToeMinimaxAgentTest": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/test/java/ttsu/game/ai/tictactoe/TicTacToeMinimaxAgentTest.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 1,
        "Id": 48,
        "LineNumber": 25,
        "Nodes": [
          {
            "id": 49,
            "MethodName": "setup"
          },
          {
            "id": 50,
            "MethodName": "evaluateLeaf"
          },
          {
            "id": 51,
            "MethodName": "evaluateNegativeDepth"
          },
          {
            "id": 52,
            "MethodName": "preferWinningState"
          },
          {
            "id": 53,
            "MethodName": "preventLosingMove"
          },
          {
            "id": 54,
            "MethodName": "preferEarlyWin"
          },
          {
            "id": 55,
            "MethodName": "evaluateGameAlreadyOver"
          }
        ]
      }
    },
    {
      "TicTacToeGameRunner": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/main/java/ttsu/game/tictactoe/TicTacToeGameRunner.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 0,
        "Id": 56,
        "LineNumber": 16,
        "Nodes": [
          {
            "id": 57,
            "MethodName": "run"
          },
          {
            "id": 58,
            "MethodName": "getGame"
          },
          {
            "id": 59,
            "MethodName": "moveComputer"
          },
          {
            "id": 60,
            "MethodName": "moveHuman"
          },
          {
            "id": 61,
            "MethodName": "printGameOver"
          },
          {
            "id": 62,
            "MethodName": "printInstructions"
          },
          {
            "id": 63,
            "MethodName": "parseUserInput"
          }
        ]
      }
    },
    {
      "TicTacToeGameState": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/main/java/ttsu/game/tictactoe/TicTacToeGameState.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 0,
        "Id": 64,
        "LineNumber": 15,
        "Nodes": [
          {
            "id": 65,
            "MethodName": "availableStates"
          },
          {
            "id": 66,
            "MethodName": "getCurrentPlayer"
          },
          {
            "id": 67,
            "MethodName": "getLastMove"
          },
          {
            "id": 68,
            "MethodName": "hasWin"
          },
          {
            "id": 69,
            "MethodName": "isOver"
          },
          {
            "id": 70,
            "MethodName": "play"
          },
          {
            "id": 71,
            "MethodName": "getGameBoard"
          },
          {
            "id": 72,
            "MethodName": "switchPlayer"
          },
          {
            "id": 73,
            "MethodName": "completesColumn"
          },
          {
            "id": 74,
            "MethodName": "completesDiagonal"
          },
          {
            "id": 75,
            "MethodName": "completesRow"
          }
        ]
      }
    },
    {
      "GameBoard": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/main/java/ttsu/game/tictactoe/GameBoard.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 0,
        "Id": 76,
        "LineNumber": 16,
        "Nodes": [
          {
            "id": 77,
            "MethodName": "mark"
          },
          {
            "id": 78,
            "MethodName": "getMark"
          },
          {
            "id": 79,
            "MethodName": "getOpenPositions"
          },
          {
            "id": 80,
            "MethodName": "toString"
          },
          {
            "id": 81,
            "MethodName": "equals"
          },
          {
            "id": 82,
            "MethodName": "hashCode"
          },
          {
            "id": 83,
            "MethodName": "validatePosition"
          }
        ]
      }
    },
    {
      "TicTacToeMain": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/main/java/ttsu/game/tictactoe/TicTacToeMain.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 0,
        "Id": 84,
        "LineNumber": 10,
        "Nodes": [
          {
            "id": 85,
            "MethodName": "main"
          }
        ]
      }
    },
    {
      "TicTacToeBoardPrinter": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/main/java/ttsu/game/tictactoe/TicTacToeBoardPrinter.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 0,
        "Id": 86,
        "LineNumber": 13,
        "Nodes": [
          {
            "id": 87,
            "MethodName": "printGameBoard"
          },
          {
            "id": 88,
            "MethodName": "printRow"
          },
          {
            "id": 89,
            "MethodName": "markToString"
          }
        ]
      }
    },
    {
      "Position": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/main/java/ttsu/game/Position.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 0,
        "Id": 90,
        "LineNumber": 10,
        "Nodes": [
          {
            "id": 91,
            "MethodName": "getRow"
          },
          {
            "id": 92,
            "MethodName": "getCol"
          },
          {
            "id": 93,
            "MethodName": "equals"
          },
          {
            "id": 94,
            "MethodName": "hashCode"
          },
          {
            "id": 95,
            "MethodName": "toString"
          }
        ]
      }
    },
    {
      "TicTacToeEvaluator": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/main/java/ttsu/game/ai/heuristic/tictactoe/TicTacToeEvaluator.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 0,
        "Id": 96,
        "LineNumber": 20,
        "Nodes": [
          {
            "id": 97,
            "MethodName": "evaluate"
          }
        ]
      }
    },
    {
      "StateEvaluator": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/main/java/ttsu/game/ai/heuristic/StateEvaluator.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 0,
        "Id": 98,
        "LineNumber": 12,
        "Nodes": [
          {
            "id": 99,
            "MethodName": "evaluate"
          }
        ]
      }
    },
    {
      "MinimaxAgent": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/main/java/ttsu/game/ai/MinimaxAgent.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 0,
        "Id": 100,
        "LineNumber": 19,
        "Nodes": [
          {
            "id": 101,
            "MethodName": "evaluateNextState"
          },
          {
            "id": 102,
            "MethodName": "evaluateNextState"
          },
          {
            "id": 103,
            "MethodName": "buildTree"
          },
          {
            "id": 104,
            "MethodName": "buildTree"
          }
        ]
      }
    },
    {
      "Node": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/main/java/ttsu/game/ai/MinimaxAgent.java",
        "AccessModifier": "PRIVATE",
        "TestFlag": 0,
        "Id": 105,
        "LineNumber": 21,
        "Nodes": []
      }
    },
    {
      "GameIntelligenceAgent": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/main/java/ttsu/game/ai/GameIntelligenceAgent.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 0,
        "Id": 106,
        "LineNumber": 13,
        "Nodes": [
          {
            "id": 107,
            "MethodName": "evaluateNextState"
          },
          {
            "id": 108,
            "MethodName": "evaluateNextState"
          }
        ]
      }
    },
    {
      "DiscreteGameState": {
        "Path": "/Users/saketh123/Downloads/tictactoe-java-master/src/main/java/ttsu/game/DiscreteGameState.java",
        "AccessModifier": "PUBLIC",
        "TestFlag": 0,
        "Id": 109,
        "LineNumber": 5,
        "Nodes": [
          {
            "id": 110,
            "MethodName": "availableStates"
          },
          {
            "id": 111,
            "MethodName": "isOver"
          }
        ]
      }
    }
  ]
}
]

const elements = [];
const startx=100
const starty=100
var MethodsPositionJson=new Map()
var MethodFlag=new Map()
// let classposition=new Map();
export function build(id,depth,actualdepth,classposition){
  
  var methodjson=methodmap.get(String(id))
    var ClassName=methodjson["ClassName"]
    console.log(ClassName)
    const flagjson={
     "ClassName":ClassName,
      "MethodName":methodjson["MethodName"]
    }
    console.log(flagjson)
    if(classposition.has(ClassName)){
      console.log(ClassName)
    }
    else{
        const l=classposition.size
        const x=(l+1)*250;
        const y=100
        classposition.set(ClassName,{"x":x,"y":y+250})
        Methodposition.set(ClassName,0)
        elements.push({ id: classmap.get(ClassName)["Id"], data: { label: ClassName }, position: {x,y} });
    }
    // var l1=Methodposition.get(ClassName)
    if(!MethodFlag.has(id)){

    MethodFlag.set(id,1)
    const classposjson=classposition.get(ClassName)
    console.log(classposjson)
    // MethodsPositionJson.set(methodjson["MethodName"],classposjson)
    console.log(MethodsPositionJson.get(methodjson["MethodName"]))
    // Methodposition.set(ClassName,l1+1)
    
    console.log({ id: id, data: { label: methodjson["MethodName"] }, position: classposjson})
    console.log(classposition.get(ClassName))
    
    elements.push({ id: id, data: { label: methodjson["MethodName"] }, position: classposition.get(ClassName)});
    console.log(classposjson)
    var ypos= classposjson["y"]
   var xpos=classposjson["x"]
   ypos+=250;
   console.log(ypos)
   classposition["y"]=ypos
   console.log(classposjson)
    classposition.set(ClassName,{"x":xpos,"y":ypos})
    }
    if(depth===actualdepth) return 
    for(var i in methodjson["Calling"]){
      console.log(methodjson["Calling"][i])
      if(depth+1<=actualdepth){
        elements.push({
                      id:`edge-${id}-${methodjson["Calling"][i]["Id"]}`,
                      target: `${methodjson["Calling"][i]["Id"]}`,
                      source: `${id}`,
                      type: 'floating',
                      arrowHeadType: ArrowHeadType.Arrow,
                      // label:m.get(arr[k]["Id"])["RetunType"]
                    });
              }
      
      build(methodjson["Calling"][i]["Id"],depth+1,actualdepth,classposition)
    }
    
}

export function buildcalledfrom(id,depth,actualdepth,classposition){
  var methodjson=methodmap.get(String(id))
  var ClassName=methodjson["ClassName"]
  // console.log(ClassName)
  const flagjson={
   "ClassName":ClassName,
    "MethodName":methodjson["MethodName"]
  }
  // console.log(flagjson)
  if(classposition.has(ClassName)){
    console.log(ClassName)
  }
  else{
      const l=classposition.size
      console.log(l)
      const x=(0-l+1)*250;
      const y=100
      console.log(x,y)
      classposition.set(ClassName,{"x":x,"y":y+250})
      Methodposition.set(ClassName,0)
      elements.push({ id: classmap.get(ClassName)["Id"], data: { label: ClassName }, position: {x,y} });
  }
  // var l1=Methodposition.get(ClassName)
  if(!MethodFlag.has(id)){

  MethodFlag.set(id,1)
  const classposjson=classposition.get(ClassName)
  // console.log(classposjson)
  // MethodsPositionJson.set(methodjson["MethodName"],classposjson)
  // console.log(MethodsPositionJson.get(methodjson["MethodName"]))
  // Methodposition.set(ClassName,l1+1)
  
  // console.log({ id: id, data: { label: methodjson["MethodName"] }, position: classposjson})
  // console.log(classposition.get(ClassName))
  
  elements.push({ id: id, data: { label: methodjson["MethodName"] }, position: classposition.get(ClassName)});
  // console.log(classposjson)
  var ypos= classposjson["y"]
 var xpos=classposjson["x"]
 ypos+=250;
//  console.log(ypos)
 classposition["y"]=ypos
//  console.log(classposjson)
  classposition.set(ClassName,{"x":xpos,"y":ypos})
  }
  if(depth===actualdepth) return 
  for(var i in methodjson["CalledFrom"]){
    // console.log(methodjson["CalledFrom"][i])
    const callmethodjson=methodmap.get(String(methodjson["CalledFrom"][i]["Id"]))
    console.log(callmethodjson["TestFlag"])
    if(callmethodjson["TestFlag"]===0){
    if(depth+1<=actualdepth){
      elements.push({
                    id:`edge-${methodjson["CalledFrom"][i]["Id"]}-${id}`,
                    target: `${id}`,
                    source: `${methodjson["CalledFrom"][i]["Id"]}`,
                    type: 'floating',
                    arrowHeadType: ArrowHeadType.Arrow,
                    // label:m.get(arr[k]["Id"])["RetunType"]
                  });
            }
    
            buildcalledfrom(methodjson["CalledFrom"][i]["Id"],depth+1,actualdepth,classposition)
          }
          }
}

export function createElements() {
  let classposition=new Map();
  let classpositionofCalledFrom=new Map();
  const StartingClass="TicTacToeGameState";
  const center = { x: 100, y: 100 };
  var x=250;
  var y=100;
  const depth=2
  const nodes=data[0]["ClassNodes"];
  const methods=data[0]["MethodNodes"];

  
  for(var i in methods)
{
  for(var j in methods[i])
    // console.log(String(j),methods[i][j])
    methodmap.set(String(j),methods[i][j])
}
  
for(var i in nodes){
  // console.log(i)
  for(var j in nodes[i]){
    // console.log(j)
  
    const classjson=nodes[i]
    classmap.set(j,nodes[i][j])
   
  }}
  for(var i in nodes){
    // console.log(i)
    for(var j in nodes[i]){
      // console.log(j)
    
      const classjson=nodes[i]
      classmap.set(j,nodes[i][j])
      if(j===StartingClass){
        // console.log({ id: `${nodes[i][j]["Id"]}`, data: { label: j }, position: {x,y} })
        elements.push({ id: `${nodes[i][j]["Id"]}`, data: { label: j }, position: {x,y},  style: {
          background: '#D6D5E6',
          color: '#333',
          border: '1px solid #222138',
          
        },onclick:{
     
        } });
        classposition.set(j,{"x":x,"y":y+250})
        classpositionofCalledFrom.set(j,{"x":x,"y":y+250})
        Methodposition.set(j,0)
        // console.log()
        for(var k=0;k<classjson[j]["Nodes"].length;k++){
          
          build(classjson[j]["Nodes"][k]["id"],0,2,classposition)
          buildcalledfrom(classjson[j]["Nodes"][k]["id"],0,2,classpositionofCalledFrom)
        }
        // console.log("hi")
        // for(var [key,value] of MethodsPositionJson){
        //   // console.log(key,value)
        // }
      }
    }}
  // for(var i=0;i<nodes.length;i++){
  //   classmap.set(nodes[i]["name"],nodes[i])
  // }
  // var loop=1;
  // while(loop){
  //   const StartClassNode=classmap.get(StartingClass)
  //   elements.push({ id: StartClassNode["id"], data: { label: StartClassNode["name"] }, position: {x,y} });
    
  // }
  for(var [key,value] of MethodsPositionJson){
    console.log(key,value)
  }
  // for(var i=0;i<methods.length;i++){
  //   var key in methods[i]
  //   m.set(methods[i]["id"],methods[i]);
  // }
  // console.log(nodes)
  // for(var i in nodes){
  //   console.log(i)
  //   for(var j in nodes[i]){
  //     console.log(j)
    
  //     const classjson=nodes[i]
  //     console.log(classjson[j])
  //     if(classjson[j]["TestFlag"]===1){
  //       continue
  //     }
  //     console.log(classjson[j]["Path"])
  //     elements.push({ id: `${nodes[i][j]["Id"]}`, data: { label: j }, position: {x,y} });
  //     for(var k=0;k<nodes[i][j]["Nodes"].length;k++){
  //       y+=200
  //       const id=nodes[i][j]["Nodes"][k]["id"]
  //       const name=nodes[i][j]["Nodes"][k]["MethodName"]
  //       console.log(nodes[i][j]["Nodes"][k]["id"])
  //       console.log(nodes[i][j]["Nodes"][k]["MethodName"])
  //       // if()
  //       const methodjson=methodmap.get(String(id-1))
  //       console.log(methodjson)
  //       elements.push({ id: String(id), data: { label:name }, position: {x,y} });
  //     }
  //     y=100
  //     x=x+200
  //   }
  // }
  // for(var i in nodes){
  
 
     
    
  // }
  // for(var i in methods){
  //   for(var j in methods[i]){
  //     const methodjson=methods[i][j]
  //     console.log(i)
  //     var arr=methodjson["Calling"]
  //   if(arr.length==0){
  //     continue
  //   }
  //   else{
  //     for(var k=0;k<arr.length;k++){
  //       elements.push({
  //             id:`edge-${j}-${arr[k]["Id"]}`,
  //             target: `${arr[k]["Id"]}`,
  //             source: `${j}`,
  //             type: 'floating',
  //             arrowHeadType: ArrowHeadType.Arrow,
  //             // label:m.get(arr[k]["Id"])["RetunType"]
  //           });
  //     }
  //   }
  //   }
  // }
  // for(var i=0;i<methods.length;i++){
  //   var arr=methods[i]["calling"]
  //   if(arr.length==0){
  //     continue
  //   }
  //   else{
  //     for(var j=0;j<arr.length;j++){
  //       elements.push({
  //             id: `edge-${i}-${arr[j]}`,
  //             target: `${arr[j]}`,
  //             source: `${methods[i]["id"]}`,
  //             type: 'floating',
  //             arrowHeadType: ArrowHeadType.Arrow,
              
  //           });
  //     }
  //   }
  // }
  // const edges=data[0]["edges"]
  // console.log(edges)
  // for(let i=0;i<edges.length;i++){
  //   elements.push({
  //         id: `edge-${i}`,
  //         target: edges[i]["to"],
  //         source: edges[i]["from"],
  //         type: 'floating',
  //         arrowHeadType: ArrowHeadType.Arrow,
  //       });
  // }
  // elements.push({ id: 'target', data: { label: 'Target' }, position: center });
  // elements.push({ id: '1', data: { label: 'Source' }, position: { center } });
  // for (let i = 0; i < 2; i++) {
  //   const degrees = i*2 * (360 / 4);
  //   const radians = degrees * (Math.PI / 180);
  //   var x;
  //   if(i%2==1){
  //      x = 250 * Math.cos(radians) + center.x;
  //   }
  //   else
  //    x = 250 * Math.cos(radians) + center.x;
  //   const y = 250 * Math.sin(radians) + center.y;
  //   console.log(x,y)
  //   elements.push({ id: `${i}`, data: { label: 'Source' }, position: { x, y } });

  //   elements.push({
  //     id: `edge-${i}`,
  //     target: 'target',
  //     source: `${i}`,
  //     type: 'floating',
  //     arrowHeadType: ArrowHeadType.Arrow,
  //   });
  // }

  return elements;
}
export function runTsDemo() {
  const tsMsg: string = 'hello typescript'
  const enum Direction {
    Up,
    Down,
    Left,
    Right
  }
  const dir: Direction = Direction.Down
  console.log(dir)

  const tupleType: [number, string] = [1, 'hello']
  console.log(tupleType)
  
  return tsMsg
} 
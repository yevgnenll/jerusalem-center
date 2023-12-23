export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

const colorCode = (name: string): string => {
  return COLORS.indexOf(name.toLowerCase()).toString()
};

export function decodedValue(values: Array<string>): number {
  var result = ""

  values.forEach(function (value, index, array) {
    if (index <= 1) {
      result += colorCode(value)
    }
  })

  return parseInt(String(result))
}
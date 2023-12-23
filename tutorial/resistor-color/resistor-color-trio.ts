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

function calculateType(num: number): string {
  if (num < 1000) {
    return num + " ohms"
  }
  if (num < 1000 * 1000) {
    return  (num / 1000) + " kiloohms"
  }
  if (num < 1000 * 1000 * 1000) {
    return (num / 1000000) + " megaohms"
  }
  return (num / 1000000000) + " gigaohms"
}

function zeroPadding(num: string): string {
  return '0'.repeat(COLORS.indexOf(num));
}

export function decodedResistorValue(nums: Array<string>): string {
  var prefix = decodedValue(nums)
  var last = zeroPadding(nums[2])
  console.log(prefix + "" + last)
  return calculateType(parseInt(prefix + "" + last))
}

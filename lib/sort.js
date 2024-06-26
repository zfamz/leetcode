function merge(nums, left, mid, right, tmp) {
  let i = left
  let j = mid + 1
  for (let index = left; index <= right; index++) {
    if (i > mid) {
      tmp[index] = nums[j]
      j++
    } else if (j > right) {
      tmp[index] = nums[i]
      i++
    } else if (nums[i] > nums[j]) {
      tmp[index] = nums[j]
      j++
    } else {
      tmp[index] = nums[i]
      i++
    }
  }

  for (let index = left; index <= right; index++) {
    nums[index] = tmp[index]
  }
}

export function mergeSort(nums, left, right, tmp = []) {
  if (left >= right) return
  const mid = left + ((right - left) >> 1)
  mergeSort(nums, left, mid, tmp)
  mergeSort(nums, mid + 1, right, tmp)
  merge(nums, left, mid, right, tmp)
}

function quickSort(arr, start, end) {
  if (start > end) return
  let l = start
  let r = end
  let x = arr[l]
  while (l < r) {
    while (r > l && arr[r] >= x) r--
    if (r > l) {
      arr[l] = arr[r]
      l++
    }
    while (r > l && arr[l] <= x) l++
    if (r > l) {
      arr[r] = arr[l]
      r--
    }
  }
  arr[l] = x
  quickSort(arr, start, l - 1)
  quickSort(arr, l + 1, end)
}

function quickSort_1(arr, start, end) {
  if (start >= end) {
    return
  }
  let l = start
  let r = end
  let x = arr[l]

  while (l < r) {
    while (l < r && arr[r] >= x) r--
    while (l < r && arr[l] <= x) l++
    if (l < r) {
      let temp = arr[l]
      arr[l] = arr[r]
      arr[r] = temp
    }
  }
  arr[start] = arr[r]
  arr[r] = x
  quickSort_1(arr, start, l - 1)
  quickSort_1(arr, l + 1, end)
}

const heapSort = (arr) => {
  const len = arr.length

  const siftDown = (arr, index, len) => {
    const left = index * 2 + 1
    const right = index * 2 + 2
    let largest = index

    if (left < len && arr[largest] < arr[left]) {
      largest = left
    }
    if (right < len && arr[largest] < arr[right]) {
      largest = right
    }
    if (largest !== index) {
      ;[arr[largest], arr[index]] = [arr[index], arr[largest]]
      siftDown(arr, largest, len)
    }
  }
  const buildHeap = (arr, len) => {
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      siftDown(arr, i, len)
    }
  }

  buildHeap(arr, len)

  for (let i = 1; i < arr.length; i++) {
    ;[arr[0], arr[len - i]] = [arr[len - i], arr[0]]
    siftDown(arr, 0, len - i)
  }
}

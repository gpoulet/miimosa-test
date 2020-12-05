export const getProgressValue = (collected, target) => {
  const value = Number(collected * 100 / target)
  if (value > 100) {
    return 100
  } else {
    return value;
  }
}

export const getPercentValue = (collected, target) => {
  return Math.floor(Number(collected * 100 / target))
}

export const getColorFromStatus = status => {
  switch (status) {
    case "success": return "primary"
    case "in_progress": return "secondary"
    default : return "secondary"
  }
}
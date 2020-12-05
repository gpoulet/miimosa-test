export const getColorFromStatus = status => {
  switch (status) {
    case "success": return "primary"
    case "in_progress": return "secondary"
    default : return "default"
  }
}
export const getColorFromStatus = status => {
  switch (status) {
    case "success": return "primary"
    case "in_progress": return "secondary"
    default : return "default"
  }
}

export const getLabelFromStatus = status => {
  switch (status) {
    case "success": return "Succès"
    case "in_progress": return "En cours"
    case "failed": return "Echec"
    default : return ""
  }
}
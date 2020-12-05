import { string, number, shape } from "prop-types"

function ProjectDetails({ id, title, collected, target, status }) {
  return (
    <div>
      <p>
      id: {id}<br/>
      title: {title}<br/>
      collected: {collected}<br/>
      target: {target}<br/>
      status: {status}<br/>
      </p>
    </div>
  )
}

ProjectDetails.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  collected: number.isRequired,
  target: number.isRequired,
  status: string.isRequired,
  description: string.isRequired,
  imageUrl: string.isRequired,
  user: shape({
    first_name: string,
    last_name: string
  }),
};

export default ProjectDetails;

//
// "collected": 15000,
//   "description": "",
//   "id": "c6d6f6f9-07d8-4540-87a7-3b8ff8869f55",
//   "image_url": "",
//   "status": "success",
//   "target": 15000,
//   "title": "Bar smoothie Bio",
//   "user": {
//     "first_name": "Lancelot",
//     "last_name": "Little Finger"
// }
import { string, number } from "prop-types"
import Link from "next/link"

function Project({ id, title, collected, target, status }) {
  return (
    <div>
      <p>
      id: {id}<br/>
      title: {title}<br/>
      collected: {collected}<br/>
      target: {target}<br/>
      status: {status}<br/>
      <Link href={"/details/"+id}>
        <a>Découvrir</a>
      </Link>
      </p>
    </div>
  )
}

Project.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  collected: number.isRequired,
  target: number.isRequired,
  status: string.isRequired,
};

export default Project;

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
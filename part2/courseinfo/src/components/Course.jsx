const Course = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>
      <h2>{course.name}</h2>
      {course.parts.map(part => 
        <div key={part.id}>
          {part.name} {part.exercises}
        </div>
      )}
      <p>Total of {total} exercises</p>
    </div>
  )
}

export default Course
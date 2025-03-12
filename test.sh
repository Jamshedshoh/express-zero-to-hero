# add task
# curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title": "New Task", "description": "Test", "status": "Pending"}'

# fetch all tasks
# curl -X GET http://localhost:3000/tasks

# Get a single task
# curl -X GET http://localhost:3000/tasks/1

# Update a task
# curl -X PUT http://localhost:3000/tasks/3 -H "Content-Type: application/json" -d '{"status": "Completed"}'

# Delete a task
# curl -X DELETE http://localhost:3000/tasks/1
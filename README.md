# Task-Manager-API

## Environment Variables Config

`PORT`, `EMAIL`, `PASS`, `JWT_SECRET`, `MONGODB_URL`

## Postman
  Set postman environment variable url=https://sourabh-kanojia-task-manager.herokuapp.com
  
* Set Test Script:
```js
if (pm.response.code === response) {
    pm.environment.set('authToken', pm.response.json().token)
}
//For Create User response = 201
//For Login User response = 200
```
### Authorization
  * Create user                     - `POST /users`
  * Login user                      - `POST /users/login`
* User actions
  * Logout user                     - `POST /users/logout`
  * Logout all users                - `POST /users/logout-all`
  * Read profile                    - `GET /users/me`
  * Update user                     - `PATCH /users/me`
  * Delete user                     - `DELETE /users/me`
  * Upload avatar                   - `POST /users/me/avatar`
  * Delete avatar                   - `DELETE /users/me/avatar`
  * Get user avatar                 - `GET /users/:id/avatar`
### Task
  * Create task                     - `POST /tasks`
  * Read tasks                      - `GET /tasks`
    * completed       - `Boolean`
    * sortBy          - `<field_name>:asc|desc`
    * limit           - `Number`
    * skip            - `Number`
  * Read task                       - `GET /tasks/:id`
  * Update task                     - `PATCH /tasks/:id`
  * Delete task                     - `DELETE /tasks/:id`

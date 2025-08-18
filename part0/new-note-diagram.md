```mermaid
sequenceDiagram
participant client as Web Browser
participant backend as Web Server

    client->>backend: Request /exampleapp/notes (GET)
    activate backend
    backend-->>client: Return HTML page
    deactivate backend

    client->>backend: Submit form data (POST /exampleapp/new_note)
    activate backend
    backend-->>client: Confirmation / redirect
    deactivate backend

    client->>backend: Reload /exampleapp/notes (GET)
    activate backend
    backend-->>client: Updated HTML content
    deactivate backend

    client->>backend: Fetch /exampleapp/data.json (GET)
    activate backend
    backend-->>client: JSON response [{ "content": "Learning web dev", "date": "2025-08-18" }, ...]
    deactivate backend
'''